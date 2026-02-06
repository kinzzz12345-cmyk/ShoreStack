import type { Metadata } from "next";
import Link from "next/link";
import { portfolioItems } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio of custom websites, SaaS platforms, real estate systems, and business applications built with clean design and modern technology.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-white via-dust/30 to-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Projects That Speak for Themselves"
            description="Each project reflects a commitment to clean design, solid engineering, and real business results. Browse live projects and upcoming work."
          />
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Live Projects */}
          <div className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bondi mb-6">
              Live Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems
                .filter((item) => !item.isPlaceholder)
                .map((item) => (
                  <PortfolioCard key={item.title} item={item} />
                ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-blue mb-6">
              Coming Soon
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems
                .filter((item) => item.isPlaceholder)
                .map((item) => (
                  <PortfolioCard key={item.title} item={item} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies Teaser ── */}
      <section className="bg-dust/20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-dust bg-white p-8 sm:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-iron font-[family-name:var(--font-heading)]">
              Case Studies Coming Soon
            </h3>
            <p className="mt-3 text-slate-blue">
              Detailed breakdowns of the challenges, solutions, and results behind each
              project. Sign up to be notified when they are published.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bondi hover:text-bondi-dark transition-colors"
            >
              Get notified
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bondi py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
            Let&apos;s Build Your Next Project
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Whether you need a new website, a custom platform, or a complete digital
            system, I am here to help. Start with a free consultation.
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
