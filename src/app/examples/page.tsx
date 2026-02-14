import type { Metadata } from "next";
import Link from "next/link";
import { examples } from "@/lib/data";
import { ArrowRightIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Workflow scenarios showing how small businesses saved time by simplifying their daily operations.",
};

export default function ExamplesPage() {
  return (
    <>
      <section className="bg-white py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            How daily operations changed
          </h1>
          <p className="mt-[16px] text-text-light text-lg">
            These are not showcases of design work. These are stories about
            how real workflows improved after building the right system.
          </p>
        </div>
      </section>

      <section className="bg-bg py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px] space-y-[28px]">
          {examples.map((example) => (
            <div
              key={example.id}
              className="rounded-lg border border-border bg-white p-[28px] sm:p-[44px]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[8px] mb-[28px]">
                <h2 className="text-xl font-bold text-primary">{example.title}</h2>
                <span className="inline-flex items-center gap-[4px] text-[14px] font-semibold text-accent bg-accent/10 rounded-full px-[12px] py-[4px] shrink-0 w-fit">
                  <ClockIcon className="w-4 h-4" />
                  Saved {example.timeSaved}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                <div className="rounded-lg bg-bg p-[16px]">
                  <h3 className="text-[13px] font-semibold text-text-light uppercase tracking-wider mb-[8px]">
                    Daily situation
                  </h3>
                  <p className="text-[15px] text-text">{example.situation}</p>
                </div>
                <div className="rounded-lg bg-bg p-[16px]">
                  <h3 className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-[8px]">
                    What changed
                  </h3>
                  <p className="text-[15px] text-text">{example.change}</p>
                </div>
                <div className="rounded-lg bg-accent/5 border border-accent/20 p-[16px]">
                  <h3 className="text-[13px] font-semibold text-primary uppercase tracking-wider mb-[8px]">
                    Time saved
                  </h3>
                  <p className="text-[15px] text-text font-medium">
                    {example.timeSaved} of recovered time per week, redirected to
                    serving customers and growing the business.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-[44px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px] text-center">
          <p className="text-white/80">
            Your situation might be different — that is the point. Every system is built for how you work.
          </p>
          <Link
            href="/start"
            className="mt-[16px] inline-flex items-center justify-center rounded-lg bg-accent px-[28px] py-[16px] text-[15px] font-semibold text-white transition-shadow duration-[120ms] hover:shadow-lg hover:shadow-accent/20"
          >
            Tell me about your workflow
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
