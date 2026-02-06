import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "20 years of full stack engineering experience building enterprise SaaS platforms, modern web applications, and scalable digital systems.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-white via-dust/30 to-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="About"
            title="Two Decades of Building What Matters"
            description="An independent software engineer focused on clean design, powerful systems, and helping businesses succeed in a digital world."
          />
        </div>
      </section>

      {/* ── Background ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-iron font-[family-name:var(--font-heading)] leading-tight">
                20 Years of Full Stack Engineering
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-blue">
                <p>
                  I have spent two decades as a full time software engineer, building
                  enterprise level SaaS platforms, multi tenant systems, booking
                  platforms, real estate applications, and asset management tools. My
                  work spans the entire technology stack from database architecture and
                  API design to front end interfaces and deployment infrastructure.
                </p>
                <p>
                  Over the years I have seen technology evolve dramatically, and I have
                  evolved with it. I stay current with modern frameworks, best practices,
                  and industry standards because the businesses I work with deserve
                  solutions built on today&apos;s technology, not yesterday&apos;s shortcuts.
                </p>
                <p>
                  I work independently, partnering directly with businesses and startups
                  to deliver solutions that are simple, fast, modern, and scalable. No
                  layers of management, no communication gaps. Just a direct line to the
                  person building your system.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "100+", label: "Projects Delivered" },
                  { value: "Full", label: "Stack Expertise" },
                  { value: "24hr", label: "Response Time" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-dust bg-dust/20 p-6 text-center"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-bondi font-[family-name:var(--font-heading)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-blue">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="rounded-2xl border border-dust bg-white p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-iron mb-4">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "TailwindCSS",
                    "REST APIs",
                    "GraphQL",
                    "AWS",
                    "Vercel",
                    "Docker",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-dust/40 px-3 py-1.5 text-xs font-medium text-slate-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-slate-blue py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-bondi mb-3">
              My Philosophy
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight">
              Clean Design Meets Powerful Engineering
            </h2>
            <p className="mt-4 text-base leading-relaxed text-dust/80">
              Good technology should be invisible to the people who use it. When a
              website loads fast, a dashboard is intuitive, or a booking system just
              works, that is the result of thoughtful design and solid engineering
              underneath. I believe in building things that are simple on the surface
              and powerful under the hood.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Simple",
                description:
                  "Clean interfaces that anyone can use. No unnecessary complexity, no confusing navigation. Every element has a purpose.",
              },
              {
                title: "Fast",
                description:
                  "Performance is not optional. Every project is optimized for speed because slow websites lose visitors and slow apps lose users.",
              },
              {
                title: "Scalable",
                description:
                  "Built on architecture that grows with your business. What works for 100 users should work for 10,000 without rebuilding from scratch.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white/10 border border-white/10 p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dust/80">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Small Business ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-bondi mb-3">
                Why I Help Small Businesses
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-iron font-[family-name:var(--font-heading)] leading-tight">
                Enterprise Quality Without Enterprise Prices
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-blue">
                Small businesses and startups deserve the same quality of technology that
                large corporations invest millions to build. The difference is that
                smaller teams need solutions that are efficient, focused, and delivered
                without bloated timelines or unnecessary overhead. That is exactly how I
                work.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-blue">
                I bring enterprise level experience directly to businesses that need it
                most. You get senior engineering talent, clean design instincts, and a
                collaborative partner who is invested in your success.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Direct access to a senior engineer with 20 years experience",
                "No agency overhead or communication layers",
                "Modern technology stack used by top companies",
                "Clear timelines and transparent communication",
                "Long term partnership mindset, not one off projects",
                "Fair pricing that respects your budget",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 rounded-full bg-bondi/10 p-1">
                    <CheckIcon className="w-4 h-4 text-bondi" />
                  </div>
                  <span className="text-sm text-slate-blue">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bondi py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Whether you have a clear project in mind or just an idea you want to explore,
            I am here to help. Start with a free consultation and let&apos;s figure out
            the best path forward.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-bondi transition-colors hover:bg-dust"
          >
            Request a Free Consultation
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
