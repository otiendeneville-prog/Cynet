import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Cynet East Africa Consultancy" },
      {
        name: "description",
        content:
          "Talk to Cynet East Africa about training, research or consultancy. Based at View Park Towers, Nairobi. Email info@cyneteastafrica.com.",
      },
      { property: "og:title", content: "Contact Cynet East Africa Consultancy" },
      {
        property: "og:description",
        content: "Reach our Nairobi team for training, research and advisory enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="bg-brand-gradient text-on-brand">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase opacity-80">Contact Us</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Consult an expert</h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90">
            Share a few details about your team and objectives — we respond within one working day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Office</h2>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" /> {SITE.address}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4 text-primary" /> {SITE.email}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Follow us</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-elevate"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const body = `Name: ${data.get("name")}\nOrganization: ${data.get("organization")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
            window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry from website")}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
        >
          <h2 className="text-lg font-semibold">Send an enquiry</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Full name
              <input
                required
                name="name"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="text-sm font-medium">
              Organization
              <input
                name="organization"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium">
            Email
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="mt-4 block text-sm font-medium">
            How can we help?
            <textarea
              required
              name="message"
              rows={5}
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <button
            type="submit"
            className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Send enquiry
          </button>
          {sent ? (
            <p className="mt-3 text-sm text-muted-foreground">
              Your email client should now be open with your message ready to send.
            </p>
          ) : null}
        </form>
      </section>
    </div>
  );
}