import type { Metadata } from "next";
import Link from "next/link";
import { solutionCategories } from "@/lib/data";
import { ArrowRightIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Affordable solutions for common small business problems. Communication, scheduling, tracking, and team coordination issues solved within your budget.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <p className="text-[14px] font-semibold text-accent uppercase tracking-wider mb-3">
            Solutions by problem, not by technology
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            Tell us what is not working. We will figure out what to build.
          </h1>
          <p className="mt-4 text-text-light text-lg leading-relaxed">
            You do not need to know what software to ask for. You do not need a technical background. Just describe the problem that is costing you time or money, and we will find the most affordable way to fix it. Every solution below is something we have built for real businesses, within their budget.
          </p>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7 space-y-8">
          {solutionCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="rounded-xl border border-border bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  {category.title}
                </h2>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent bg-accent/10 rounded-full px-3 py-1 shrink-0 w-fit">
                  <ClockIcon className="w-3.5 h-3.5" />
                  Saves {category.savings}
                </span>
              </div>

              <p className="text-[15px] text-text leading-relaxed">{category.description}</p>

              <div className="mt-5 rounded-lg bg-bg p-5">
                <h3 className="text-[13px] font-semibold text-text-light uppercase tracking-wider mb-2">
                  What this looks like in real life
                </h3>
                <p className="text-[14px] text-text leading-relaxed">{category.realLife}</p>
              </div>

              <div className="mt-5">
                <h3 className="text-[13px] font-semibold text-text-light uppercase tracking-wider mb-3">
                  What usually causes this
                </h3>
                <ul className="space-y-2">
                  {category.causes.map((cause, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] text-text">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-attention shrink-0" />
                      {cause}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-lg bg-accent/5 border border-accent/20 p-5">
                <h3 className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-2">
                  How we fix it
                </h3>
                <p className="text-[14px] text-text leading-relaxed">{category.systemFix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-7 text-center">
          <p className="text-white/80">
            Not sure which category fits your situation? That is completely fine. Tell us what is happening and we will sort it out.
          </p>
          <Link
            href="/start"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 text-[15px] font-semibold text-white transition-all duration-[120ms] hover:bg-accent-dark hover:shadow-lg"
          >
            Describe your situation
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
