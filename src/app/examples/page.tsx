import type { Metadata } from "next";
import Link from "next/link";
import { examples } from "@/lib/data";
import { ArrowRightIcon, ClockIcon, ExternalLinkIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Real examples of how small businesses saved time and money by replacing manual processes with simple, affordable systems. Browse live website templates.",
};

const liveTemplates = [
  {
    name: "Saffron Amber",
    type: "Restaurant",
    url: "https://saffron-amber.vercel.app/",
    live: true,
  },
  {
    name: "Dog Best Friend",
    type: "Pet Grooming",
    url: "https://dog-best-friend.vercel.app/",
    live: true,
  },
  {
    name: "Krispy Cuts",
    type: "Barber Shop",
    url: "https://krispy-cuts.vercel.app/",
    live: true,
  },
  {
    name: "Coming Soon",
    type: "Real Estate",
    url: null,
    live: false,
  },
  {
    name: "Coming Soon",
    type: "Nail Salon",
    url: null,
    live: false,
  },
  {
    name: "Coming Soon",
    type: "Asset Management",
    url: null,
    live: false,
  },
];

export default function ExamplesPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <p className="text-[14px] font-semibold text-accent uppercase tracking-wider mb-3">
            Real results, real savings
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            How daily operations changed for these businesses
          </h1>
          <p className="mt-4 text-text-light text-lg leading-relaxed">
            These are not design showcases or marketing stories. These are real examples of small business owners who were losing hours every week to manual processes, and how simple, affordable systems changed that. Every project below was built within the client's budget.
          </p>
        </div>
      </section>

      {/* Live Templates */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <p className="text-[14px] font-semibold text-accent uppercase tracking-wider mb-3">
            Browse live templates
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            See what we can build for your business
          </h2>
          <p className="mt-2 text-text-light">
            Click any live template to explore it. Each one was designed for a specific type of business.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveTemplates.map((template, i) => (
              <div key={i}>
                {template.live && template.url ? (
                  <a
                    href={template.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border-2 border-border bg-white p-5 transition-all duration-[120ms] hover:border-accent hover:shadow-lg"
                  >
                    <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                      {template.type}
                    </span>
                    <span className="mt-1 text-[17px] font-bold text-primary group-hover:text-accent transition-colors duration-[120ms]">
                      {template.name}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent">
                      View live site
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-col rounded-xl border-2 border-dashed border-border bg-white/50 p-5">
                    <span className="text-[12px] font-semibold text-text-light uppercase tracking-wider">
                      {template.type}
                    </span>
                    <span className="mt-1 text-[17px] font-bold text-text-light">
                      {template.name}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-text-light/60">
                      In development
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7 space-y-6">
          <div className="mb-6">
            <p className="text-[14px] font-semibold text-accent uppercase tracking-wider mb-3">
              Case studies
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              How we helped real businesses save time and money
            </h2>
          </div>
          {examples.map((example) => (
            <div
              key={example.id}
              className="rounded-xl border border-border bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-primary">{example.title}</h2>
                  <span className="text-[13px] text-text-light">{example.business}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent bg-accent/10 rounded-full px-3 py-1 shrink-0">
                    <ClockIcon className="w-3.5 h-3.5" />
                    Saved {example.timeSaved}
                  </span>
                  <span className="text-[12px] font-medium text-attention bg-attention/10 rounded-full px-3 py-1 shrink-0">
                    {example.cost}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-lg bg-bg p-4">
                  <h3 className="text-[12px] font-semibold text-text-light uppercase tracking-wider mb-2">
                    The situation
                  </h3>
                  <p className="text-[14px] text-text leading-relaxed">{example.situation}</p>
                </div>
                <div className="rounded-lg bg-bg p-4">
                  <h3 className="text-[12px] font-semibold text-accent uppercase tracking-wider mb-2">
                    What we built
                  </h3>
                  <p className="text-[14px] text-text leading-relaxed">{example.change}</p>
                </div>
                <div className="rounded-lg bg-accent/5 border border-accent/20 p-4">
                  <h3 className="text-[12px] font-semibold text-primary uppercase tracking-wider mb-2">
                    The result
                  </h3>
                  <p className="text-[14px] text-text font-medium leading-relaxed">{example.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-7 text-center">
          <p className="text-white/80">
            Your situation is different, and that is the point. Every system we build is designed for how your business actually works, not a one-size-fits-all template.
          </p>
          <Link
            href="/start"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 text-[15px] font-semibold text-white transition-all duration-[120ms] hover:bg-accent-dark hover:shadow-lg"
          >
            Tell us about your business
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
