import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { iconMap, ArrowRightIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom website design, SaaS development, real estate platforms, booking systems, asset management, website redesign, and local SEO services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-white via-dust/30 to-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Services"
            title="Solutions That Solve Real Problems"
            description="Every service is designed to address a specific challenge your business faces. No fluff, no unnecessary complexity. Just clear solutions that help you grow."
          />
        </div>
      </section>

      {/* ── Services Detail ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${!isEven ? "lg:direction-rtl" : ""}`}>
                    {/* Content */}
                    <div className={!isEven ? "lg:order-2 lg:direction-ltr" : ""}>
                      <div className="inline-flex items-center justify-center rounded-xl bg-bondi/10 p-3 text-bondi mb-5">
                        {IconComponent && <IconComponent className="w-8 h-8" />}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-iron font-[family-name:var(--font-heading)] leading-tight">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-slate-blue">
                        {service.fullDescription}
                      </p>
                    </div>

                    {/* Problems & Benefits */}
                    <div className={`space-y-6 ${!isEven ? "lg:order-1 lg:direction-ltr" : ""}`}>
                      <div className="rounded-2xl border border-dust bg-dust/20 p-6 sm:p-8">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-iron mb-4">
                          What&apos;s Holding You Back
                        </h3>
                        <ul className="space-y-3">
                          {service.problemsSolved.split(". ").filter(Boolean).map((problem) => (
                            <li key={problem} className="flex items-start gap-3">
                              <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-iron/40" />
                              <span className="text-sm text-slate-blue">{problem.replace(/\.$/, "")}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-bondi/20 bg-bondi/5 p-6 sm:p-8">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-bondi mb-4">
                          The Payoff
                        </h3>
                        <ul className="space-y-3">
                          {service.benefits.split(". ").filter(Boolean).map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <div className="mt-0.5 flex-shrink-0 rounded-full bg-bondi/20 p-0.5">
                                <CheckIcon className="w-3.5 h-3.5 text-bondi" />
                              </div>
                              <span className="text-sm text-slate-blue">{benefit.replace(/\.$/, "")}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {index < services.length - 1 && (
                    <div className="mt-20 border-t border-dust" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-blue py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-lg text-dust/80 max-w-2xl mx-auto">
            Let&apos;s talk about your business and figure out the best path forward. A free consultation is just one click away.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-bondi px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bondi-dark"
          >
            Request a Free Consultation
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
