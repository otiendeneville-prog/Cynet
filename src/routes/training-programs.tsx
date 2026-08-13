import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { programsQuery } from "@/lib/catalog-queries";

export const Route = createFileRoute("/training-programs")({
  head: () => ({
    meta: [
      { title: "Training Programs | Cynet East Africa Consultancy" },
      {
        name: "description",
        content:
          "Explore Cynet East Africa training categories: project management, M&E, finance, governance, ICT, HR, humanitarian and child protection courses.",
      },
      { property: "og:title", content: "Training Programs | Cynet East Africa" },
      {
        property: "og:description",
        content: "Ten professional training categories delivered across East Africa.",
      },
    ],
  }),
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(programsQuery());
  },
  component: ProgramsPage,
});

function ProgramsPage() {
  const { data: programs } = useSuspenseQuery(programsQuery());

  return (
    <div>
      <section className="bg-brand-gradient text-on-brand">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase opacity-80">
            Our Programs
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
            Training categories built for real institutional performance
          </h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90">
            Every program is practitioner-led, contextualised for East Africa and delivered in
            Nairobi, Mombasa, Kisumu or in-house at your organization.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.slug}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-elevate transition-transform hover:-translate-y-1"
            >
              <h2 className="text-lg font-semibold text-foreground">{program.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{program.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {program.courses.map((course) => (
                  <li
                    key={course}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}