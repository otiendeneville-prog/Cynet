import { CalendarDays, Clock, MapPin, UserRound } from "lucide-react";
import type { Course } from "@/lib/site-data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-elevate transition-transform hover:-translate-y-1">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold tracking-wide text-secondary-foreground uppercase">
          {course.category}
        </span>
        {course.featured ? (
          <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-accent-foreground uppercase">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-foreground">{course.title}</h3>

      <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <CalendarDays className="size-4 text-primary" />
          <dd>{course.dates}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-primary" />
          <dd>{course.duration}</dd>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-primary" />
          <dd>{course.location}</dd>
        </div>
        <div className="flex items-center gap-2">
          <UserRound className="size-4 text-primary" />
          <dd>{course.instructor}</dd>
        </div>
      </dl>

      <a
        href={`mailto:info@cyneteastafrica.com?subject=Registration: ${encodeURIComponent(course.title)}`}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Register Now
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}