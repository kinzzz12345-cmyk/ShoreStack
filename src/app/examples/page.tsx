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
    gradient: "from-amber-500 to-orange-600",
    icon: (
      <svg className="w-10 h-10 text-white/90" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    name: "Dog Best Friend",
    type: "Pet Grooming",
    url: "https://dog-best-friend.vercel.app/",
    live: true,
    gradient: "from-sky-400 to-blue-600",
    icon: (
      <svg className="w-10 h-10 text-white/90" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.5 11.5c-.28 0-.5-.22-.5-.5V8.85C4 6.72 5.72 5 7.85 5h.3C9.76 5 11 6.24 11 7.85V9.5c0 .55-.22 1.05-.59 1.41L9 12.33V14a1 1 0 01-1 1H6a1 1 0 01-1-1v-1.67l-.91-.91A.49.49 0 014 11.13v-.13c0-.28.22-.5.5-.5zM18 9l1.5-3h1L22 9h-1l-.5-1h-1L19 9h-1zm-4 2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM14 13c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  {
    name: "Krispy Cuts",
    type: "Barber Shop",
    url: "https://krispy-cuts.vercel.app/",
    live: true,
    gradient: "from-slate-700 to-slate-900",
    icon: (
      <svg className="w-10 h-10 text-white/90" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0010.607 12m3.736 0l7.794 4.5-.803.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
      </svg>
    ),
  },
  {
    name: "Coming Soon",
    type: "Real Estate",
    url: null,
    live: false,
    gradient: "from-emerald-400 to-teal-600",
    icon: (
      <svg className="w-10 h-10 text-white/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    name: "Coming Soon",
    type: "Nail Salon",
    url: null,
    live: false,
    gradient: "from-pink-400 to-rose-500",
    icon: (
      <svg className="w-10 h-10 text-white/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    name: "Coming Soon",
    type: "Asset Management",
    url: null,
    live: false,
    gradient: "from-indigo-500 to-violet-600",
    icon: (
      <svg className="w-10 h-10 text-white/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
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

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {liveTemplates.map((template, i) => (
              <div key={i}>
                {template.live && template.url ? (
                  <a
                    href={template.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border-2 border-border bg-white overflow-hidden transition-all duration-[120ms] hover:border-accent hover:shadow-lg"
                  >
                    <div className={`relative flex items-center justify-center h-32 bg-gradient-to-br ${template.gradient}`}>
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                      {template.icon}
                    </div>
                    <div className="p-5">
                      <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                        {template.type}
                      </span>
                      <span className="mt-1 block text-[17px] font-bold text-primary group-hover:text-accent transition-colors duration-[120ms]">
                        {template.name}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent">
                        View live site
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col rounded-xl border-2 border-dashed border-border bg-white/50 overflow-hidden">
                    <div className={`relative flex items-center justify-center h-32 bg-gradient-to-br ${template.gradient} opacity-40`}>
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                      {template.icon}
                    </div>
                    <div className="p-5">
                      <span className="text-[12px] font-semibold text-text-light uppercase tracking-wider">
                        {template.type}
                      </span>
                      <span className="mt-1 block text-[17px] font-bold text-text-light">
                        {template.name}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-text-light/60">
                        In development
                      </span>
                    </div>
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
