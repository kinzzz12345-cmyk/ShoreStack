import type { Metadata } from "next";
import Link from "next/link";
import { solutionCategories } from "@/lib/data";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Business problems I help solve — communication, scheduling, tracking, and staff coordination issues for small businesses.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-white py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            Solutions by problem, not by technology
          </h1>
          <p className="mt-[16px] text-text-light text-lg">
            You do not need to know what software to ask for.
            Tell me what is not working and I will figure out what to build.
          </p>
        </div>
      </section>

      <section className="bg-bg py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px] space-y-[44px]">
          {solutionCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="rounded-lg border border-border bg-white p-[28px] sm:p-[44px]"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-primary">
                {category.title}
              </h2>
              <p className="mt-[8px] text-text">{category.description}</p>

              <div className="mt-[28px]">
                <h3 className="text-[14px] font-semibold text-text-light uppercase tracking-wider mb-[12px]">
                  What usually causes this
                </h3>
                <ul className="space-y-[8px]">
                  {category.causes.map((cause, i) => (
                    <li key={i} className="flex items-start gap-[8px] text-[15px] text-text">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-attention shrink-0" />
                      {cause}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-[28px] rounded-lg bg-accent/5 border border-accent/20 p-[16px] sm:p-[28px]">
                <h3 className="text-[14px] font-semibold text-accent uppercase tracking-wider mb-[8px]">
                  What a system fix looks like
                </h3>
                <p className="text-[15px] text-text">{category.systemFix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-[44px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px] text-center">
          <p className="text-white/80">
            Not sure which category fits? That is fine.
          </p>
          <Link
            href="/start"
            className="mt-[16px] inline-flex items-center justify-center rounded-lg bg-accent px-[28px] py-[16px] text-[15px] font-semibold text-white transition-shadow duration-[120ms] hover:shadow-lg hover:shadow-accent/20"
          >
            Describe your situation and I will sort it out
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
