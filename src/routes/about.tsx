import { createFileRoute, Link } from "@tanstack/react-router";
import { STATS, PILLARS, CLIENTS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cynet East Africa Consultancy" },
      {
        name: "description",
        content:
          "Cynet East Africa Consultancy has trained 5000+ professionals across 25+ industries with practitioner-led training, research and advisory since inception.",
      },
      { property: "og:title", content: "About Cynet East Africa Consultancy" },
      {
        property: "og:description",
        content: "Eleven years of training, research and consultancy across East Africa.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-brand-gradient text-on-brand">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase opacity-80">About Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
            We improve the efficiency of the institutions that shape East Africa
          </h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90">
            Cynet East Africa Consultancy delivers high-impact training, research and consultancy to
            government, development and private sector organizations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Trusted by teams across the region</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="rounded-xl border border-border bg-secondary/60 px-4 py-4 text-sm font-medium text-secondary-foreground"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-brand-gradient px-8 py-12 text-on-brand">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to transform your organization?</h2>
          <p className="mt-2 max-w-xl opacity-90">
            Tell us your objectives and we will design the training or advisory engagement around
            them.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
          >
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}