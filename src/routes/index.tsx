import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { GraduationCap, Lightbulb, Microscope } from "lucide-react";
import { coursesQuery, programsQuery, servicesQuery } from "@/lib/catalog-queries";
import { CourseCard } from "@/components/course-card";
import { CLIENTS, PILLARS, STATS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cynet East Africa | Expert Training & Consultancy" },
      {
        name: "description",
        content:
          "Cynet East Africa Consultancy delivers high-impact professional training, research and consultancy across East Africa. 5000+ professionals trained.",
      },
      { property: "og:title", content: "Cynet East Africa | Expert Training & Consultancy" },
      {
        property: "og:description",
        content: "High-impact training, research and consultancy for organizations in East Africa.",
      },
    ],
  }),
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(coursesQuery({ featuredOnly: true }));
    context.queryClient.ensureQueryData(programsQuery());
    context.queryClient.ensureQueryData(servicesQuery());
  },
  component: Index,
});

const PILLAR_ICONS = [GraduationCap, Lightbulb, Microscope];

function Index() {
  const { data: featured } = useSuspenseQuery(coursesQuery({ featuredOnly: true }));
  const { data: programs } = useSuspenseQuery(programsQuery());
  const { data: services } = useSuspenseQuery(servicesQuery());

  return (
    <div>
      <section className="bg-brand-gradient text-on-brand">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase opacity-80">
              Featured Trainings
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] font-bold md:text-6xl">
              Empowering <span className="text-accent">Professionals</span> Through Expert Training
              &amp; Consultancy
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-90">
              We specialize in providing high-impact training, research and consultancy services to
              individuals and organizations across various industries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/training-calendar"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                View 2026 Calendar
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Consult an Expert
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:mt-4">
            {PILLARS.map((pillar, i) => {
              const Icon = PILLAR_ICONS[i] ?? GraduationCap;
              return (
                <div
                  key={pillar.title}
                  className={`rounded-2xl bg-glass p-6 ${i === 1 ? "sm:mt-10" : ""}`}
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold">{pillar.title}</h2>
                  <p className="mt-2 text-sm opacity-85">{pillar.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-6 rounded-2xl bg-glass px-8 py-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-accent">{s.value}</p>
                <p className="mt-1 text-sm opacity-85">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold md:text-4xl">Upcoming Courses</h2>
          <Link to="/training-calendar" className="text-sm font-semibold text-primary hover:underline">
            View full 2026 calendar →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold md:text-4xl">Our Programs</h2>
            <Link
              to="/training-programs"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all training categories →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {programs.map((program) => (
              <Link
                key={program.slug}
                to="/training-programs"
                className="rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-1"
              >
                <h3 className="text-base font-semibold">{program.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{program.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Tailored solutions to help organizations succeed — from growth strategy and financial
          advisory to team building and research. We drive measurable outcomes at every stage.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.number} className="rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-4xl font-bold text-accent">{service.number}</span>
              <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center text-2xl font-bold">
            Companies and people that trust our training and services
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-muted-foreground"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
