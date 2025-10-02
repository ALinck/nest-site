'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users2, Globe2, Wrench, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- Safe Section wrapper ----------------------------------------------------
// Some runtimes can pass `null` children into layout wrappers. Guard so we
// never blow up trying to render when children are null/undefined.

type SectionProps = {
  id?: string;
  className?: string | null;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const cls = [
    "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  // If no children, render an empty, accessible section to preserve anchors
  // and spacing without throwing errors.
  if (children == null) {
    return <section id={id} className={cls} aria-hidden="true" />;
  }

  return (
    <section id={id} className={cls}>
      {children}
    </section>
  );
};

export default function NestLanding() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-50 text-slate-800">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center gap-3">
            <Image src="/nest-icon.png" alt="NEST logo" width={36} height={36} />
            <span className="font-semibold tracking-[0.08em]">NEST Cooperative</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#co-op" className="hover:opacity-80">Co‑op</a>
            <a href="#team" className="hover:opacity-80">Team</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild>
              <a href="#contact" className="inline-flex items-center gap-2">
                Contact
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <Section className="pt-14 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600 bg-white shadow-sm">
              <Globe2 className="w-3.5 h-3.5" /> Local roots • Modern tech • Cooperative structure
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight">
              Calm, dependable tech for cities, orgs, and small businesses
            </h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              We design, build, and maintain pragmatic software and infrastructure. No jargon‑storms—just reliable systems
              that match your real‑world workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#services" className="inline-flex items-center gap-2">
                  Our Services <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#team">Meet the Team</a>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.05 }} className="flex justify-center lg:justify-end">
            <Image src="/nest-icon.png" alt="NEST brand mark" width={240} height={240} className="rounded-2xl border shadow-sm" />
          </motion.div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="py-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">What we do</h2>
          <p className="text-slate-600 mt-1">Practical work, clean handoffs, long‑term maintainability.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={<Wrench className="w-5 h-5" />} title="Full‑stack software">
            Next.js frontends, NestJS APIs, Mongo/Postgres, auth, PDFs, exports, dashboards, searchable maps.
          </FeatureCard>
          <FeatureCard icon={<Users2 className="w-5 h-5" />} title="Networking & support">
            Small business networks, Wi‑Fi, device rollout, backups, monitoring, documentation, and friendly support.
          </FeatureCard>
          <FeatureCard icon={<Building2 className="w-5 h-5" />} title="Municipal tooling">
            Interactive kiosks and web apps designed around your community’s needs. Whether it’s property info, permitting, or local services, we create tools that match your workflows.
          </FeatureCard>
        </div>
      </Section>

      {/* CO‑OP */}
      <Section id="co-op" className="py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Why a cooperative?</h2>
            <p className="text-slate-600 mt-3">
              We’re a worker‑owned cooperative. That means incentives are aligned: better outcomes for our members and
              our clients, not growth for growth’s sake. You’ll always know who’s doing the work and how to reach us.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
              <li>Transparent communication and plain‑language proposals</li>
              <li>Right‑sized solutions—no upsells, no black boxes</li>
              <li>Stable, local partnership with shared accountability</li>
            </ul>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <StatTile k="10+" v="years combined" />
              <StatTile k="24h" v="response window" />
              <StatTile k="NH/NE" v="local focus" />
              <StatTile k="Co‑op" v="member‑owned" />
            </div>
          </div>
        </div>
      </Section>

      {/* TEAM */}
      <Section id="team" className="py-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Who you’ll work with</h2>
          <p className="text-slate-600 mt-1">Two founders, complementary strengths, shared values.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <PersonCard
            name="Alex Linck"
            title="Software Engineer & Product"
            blurb="Full‑stack engineering (Next.js, NestJS), data pipelines, UX pragmatism, and municipal tools designed around real workflows."
            email="alex@nest.coop"
          />
          <PersonCard
            name="Drew Brown"
            title="Networking & Support"
            blurb="Small‑biz networks, Wi‑Fi, endpoint management, backups, hands‑on onboarding, and calm ongoing support."
            email="drew@nest.coop"
          />
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Let’s scope your project</h2>
            <p className="text-slate-600 mt-2">
              Send a short note with your goals, constraints, and timeline. We’ll reply with questions and a simple path
              forward—often in a single page.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-slate-700">
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="mailto:hello@nest.coop">
                <Mail className="w-4 h-4" /> hello@nest.coop
              </a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="mailto:alex@nest.coop">
                <Mail className="w-4 h-4" /> alex@nest.coop
              </a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="mailto:drew@nest.coop">
                <Mail className="w-4 h-4" /> drew@nest.coop
              </a>
            </div>
            <div className="mt-6">
              <Button asChild>
                <a href="mailto:hello@nest.coop?subject=Project%20inquiry%20for%20NEST&body=Hi%20NEST%2C%5Cn%5CnHere%E2%80%99s%20what%20we%E2%80%99re%20trying%20to%20do%3A%20...%5CnConstraints%3A%20...%5CTimeline%3A%20...%5Cn%5CnThanks!">Start an email</a>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border bg-white shadow-sm p-6">
            <h3 className="font-semibold">Quick capabilities</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
              <li>Next.js / React</li>
              <li>NestJS / Node</li>
              <li>Mongo / Postgres</li>
              <li>Auth & SSO</li>
              <li>GIS & maps</li>
              <li>PDF / exports</li>
              <li>Dashboards</li>
              <li>Backups & DR</li>
              <li>Networking</li>
              <li>Monitoring</li>
              <li>Device rollout</li>
              <li>Docs & training</li>
            </ul>
          </div>
        </div>
      </Section>

      <footer className="mt-16 border-t">
        <Section className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/nest-icon.png" alt="NEST logo small" width={28} height={28} />
            <span className="text-sm text-slate-600">© {new Date().getFullYear()} NEST — New England Simplified Technologies Co‑op</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a href="#co-op" className="hover:opacity-80">What is a co‑op?</a>
            <span aria-hidden>•</span>
            <a href="#services" className="hover:opacity-80">Services</a>
            <span aria-hidden>•</span>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </Section>
      </footer>

      {/* --- Development sanity checks (act as lightweight tests) ------------- */}
      {process.env.NODE_ENV !== "production" && (
        <div className="hidden">
          {/* Should render without throwing, even when children are null/undefined */}
          <Section id="__test-empty" />
          <Section id="__test-null">{null}</Section>
          <Section id="__test-text">ok</Section>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, children }: React.PropsWithChildren<{ icon: React.ReactNode; title: string }>) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border bg-white">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700 text-sm leading-relaxed">{children}</CardContent>
    </Card>
  );
}

function PersonCard({ name, title, blurb, email }: { name: string; title: string; blurb: string; email: string }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl border bg-gradient-to-br from-slate-100 to-white" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg leading-tight">{name}</h3>
            <p className="text-sm text-slate-600">{title}</p>
            <p className="mt-2 text-slate-700 text-sm leading-relaxed">{blurb}</p>
            <a className="mt-3 inline-flex items-center gap-2 text-sm hover:opacity-80" href={`mailto:${email}`}>
              <Mail className="w-4 h-4" />
              {email}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StatTile({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
      <div className="text-2xl font-semibold">{k}</div>
      <div className="text-slate-600 text-xs tracking-wide uppercase">{v}</div>
    </div>
  );
}
