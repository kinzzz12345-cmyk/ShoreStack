import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "ShoreStack is a small local business in Maryland helping other small businesses save time and money with affordable, practical software solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex justify-center md:justify-start">
              <div className="w-[180px] h-[180px] rounded-xl bg-bg border-2 border-border flex items-center justify-center text-text-light text-[14px]">
                Photo
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-[14px] font-semibold text-accent uppercase tracking-wider mb-3">
                Small local business in Maryland
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary">
                We build practical systems for small businesses, affordably
              </h1>
              <p className="mt-4 text-text leading-relaxed">
                ShoreStack is a small, local software business based in Maryland. We are not a large agency with overhead costs that get passed on to you. We work directly with business owners who are tired of wasting time on things that should be simpler, and who need solutions that fit their budget rather than drain it.
              </p>
              <p className="mt-4 text-text leading-relaxed">
                The most useful work we have done has always been the simplest. A booking page that stops phone tag. A task board that replaces group chats. A form that captures every detail so nobody has to ask twice. These are not flashy projects, but they save real hours every single week for the businesses that use them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7 space-y-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              Why we focus on small businesses
            </h2>
            <p className="mt-4 text-text leading-relaxed">
              Large companies have IT departments, consultants, and budgets for enterprise software. Small businesses do not. They use what they can afford, which usually means a mix of WhatsApp, spreadsheets, paper notebooks, and memory. That works for a while, until it does not.
            </p>
            <p className="mt-4 text-text leading-relaxed">
              When a salon owner spends two hours every evening texting appointment reminders, that is not a technology problem. That is an operations problem that the right system can fix in a week, for a fraction of what you might expect. We find those opportunities and fix them affordably because we understand that every dollar matters when you are running a small business.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              How we keep costs low
            </h2>
            <p className="mt-4 text-text leading-relaxed">
              We do not have a fancy office, a sales team, or layers of management. When you work with us, you talk directly to the people building your system. That means lower costs for you and faster turnaround times. We also do not build more than you need. If a simple solution solves your problem, that is what we build, and that is what you pay for.
            </p>
            <p className="mt-4 text-text leading-relaxed">
              We give you a fixed price before any work begins, and that price does not change. If something turns out to be simpler than planned, the cost goes down, not up. We do not use contracts that lock you in. If at any point you feel this is not working, we stop. You keep everything we built up to that point. It is your business and your system.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              What clients should expect
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Direct communication",
                  desc: "You talk to us directly, not a project manager or support team. We explain things in plain language and respond within one business day.",
                },
                {
                  title: "Honest assessment",
                  desc: "If your idea is more complex than it needs to be, we will say so. If something already exists that solves your problem, we will tell you instead of building from scratch.",
                },
                {
                  title: "Working version early",
                  desc: "You will see a working version before paying in full. Real testing with your team, not a slide deck. Changes happen based on how it actually performs.",
                },
                {
                  title: "Support after launch",
                  desc: "Systems need adjustments after they go live. We stay available for refinements because the first version is rarely the final one. No extra charges for reasonable tweaks.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-border bg-white p-5">
                  <h3 className="text-[15px] font-semibold text-primary flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-text leading-relaxed pl-6">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-7 text-center">
          <p className="text-white/80">
            If this sounds like the kind of team you want working on your business operations, let us talk. No cost, no obligation.
          </p>
          <Link
            href="/start"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 text-[15px] font-semibold text-white transition-all duration-[120ms] hover:bg-accent-dark hover:shadow-lg"
          >
            Start a conversation
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
