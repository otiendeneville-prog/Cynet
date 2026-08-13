import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { coursesQuery } from "@/lib/catalog-queries";
import { CourseCard } from "@/components/course-card";

export const Route = createFileRoute("/training-calendar")({
  head: () => ({
    meta: [
      { title: "2026 Training Calendar | Cynet East Africa" },
      {
        name: "description",
        content:
          "Browse the Cynet East Africa 2026 training calendar with dates, duration and venues for scheduled professional courses.",
      },
      { property: "og:title", content: "2026 Training Calendar | Cynet East Africa" },
      {
        property: "og:description",
        content: "Scheduled 2026 professional courses in Nairobi, Mombasa and Kisumu.",
      },
    ],
  }),
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(coursesQuery());
  },
  component: CalendarPage,
});

function CalendarPage() {
  const { data: allCourses } = useSuspenseQuery(coursesQuery());
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(allCourses.map((c) => c.category)))];
  const courses =
    category === "All" ? allCourses : allCourses.filter((c) => c.category === category);

  return (
    <div>
      <section className="bg-brand-gradient text-on-brand">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase opacity-80">
            Training Calendar
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">2026 Scheduled Courses</h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90">
            Reserve your place early — cohorts are capped to keep sessions practical and
            facilitator-led.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={
                c === category
                  ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                  : "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}