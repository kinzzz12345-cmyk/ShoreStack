import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why I work with small businesses, how I approach problem solving, and what to expect when working with me.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[44px]">
            {/* Photo placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="w-[200px] h-[200px] rounded-lg bg-bg border-2 border-border flex items-center justify-center text-text-light text-[14px]">
                Photo
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-primary">
                I build practical systems for small businesses
              </h1>
              <p className="mt-[16px] text-text">
                I am a solo developer. Not a team. Not an agency. I work directly with
                business owners who are tired of wasting time on things that should be
                simpler.
              </p>
              <p className="mt-[16px] text-text">
                I have spent 20 years writing software, and the most useful work I have
                done has always been the simplest. A booking page that stops phone tag.
                A task board that replaces group chats. A form that captures every detail
                so nobody has to ask twice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px] space-y-[44px]">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              Why I work with small businesses
            </h2>
            <p className="mt-[16px] text-text">
              Large companies have IT departments, consultants, and budgets for
              off-the-shelf software. Small businesses do not. They use what they can
              afford — usually a mix of WhatsApp, spreadsheets, paper notebooks, and
              memory. It works until it does not.
            </p>
            <p className="mt-[16px] text-text">
              When a salon owner spends two hours every evening texting appointment
              reminders, that is not a technology problem. That is an operations problem
              that the right system can fix in a week. That is the kind of work I find
              most meaningful.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              How I approach problem solving
            </h2>
            <p className="mt-[16px] text-text">
              I do not start by asking what software you want. I start by watching how
              your business actually runs. Where does information get stuck? Where do
              people get confused? What takes longer than it should?
            </p>
            <p className="mt-[16px] text-text">
              Most of the time, the answer is not more software — it is the right
              software in the right place. I look for the smallest change that removes
              the most friction. Sometimes that means building a custom tool. Sometimes
              it means connecting two things that already exist. Sometimes it means
              removing a step entirely.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              What clients should expect while working with me
            </h2>
            <div className="mt-[16px] space-y-[16px]">
              <div className="rounded-lg border border-border bg-white p-[16px]">
                <h3 className="text-[15px] font-semibold text-primary">Direct communication</h3>
                <p className="mt-[4px] text-[15px] text-text">
                  You will always talk to me — not a project manager, not a sales
                  person, not a support team. I explain things in plain language.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white p-[16px]">
                <h3 className="text-[15px] font-semibold text-primary">Honest assessment</h3>
                <p className="mt-[4px] text-[15px] text-text">
                  If your idea is more complex than it needs to be, I will say so. If
                  something already exists that solves your problem, I will tell you
                  instead of building from scratch. I do not sell work — I solve problems.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white p-[16px]">
                <h3 className="text-[15px] font-semibold text-primary">Working version early</h3>
                <p className="mt-[4px] text-[15px] text-text">
                  You will see a working version before paying in full. Real testing
                  with your team, not a slide deck or a mockup. Changes happen based on
                  how it actually performs in your workflow.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white p-[16px]">
                <h3 className="text-[15px] font-semibold text-primary">No disappearing after launch</h3>
                <p className="mt-[4px] text-[15px] text-text">
                  Systems need adjustments after they go live. Your team will have
                  questions. Workflows change. I stay available for refinements because
                  the first version is rarely the final one.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              Honest explanation of my working process
            </h2>
            <p className="mt-[16px] text-text">
              I work with a small number of clients at a time. That means I am not
              always available immediately, but when I am working on your project, you
              have my full attention.
            </p>
            <p className="mt-[16px] text-text">
              I respond within one business day. I give realistic timelines, not
              optimistic ones. If something takes longer than expected, I tell you why.
              If something turns out to be simpler than planned, the cost goes down —
              not up.
            </p>
            <p className="mt-[16px] text-text">
              I do not use contracts that lock you in. If at any point you feel this is
              not working, we stop. You keep everything I built up to that point. It is
              your business and your system.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-[44px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px] text-center">
          <p className="text-white/80">
            If this sounds like the kind of person you want working on your operations,
            let us talk.
          </p>
          <Link
            href="/start"
            className="mt-[16px] inline-flex items-center justify-center rounded-lg bg-accent px-[28px] py-[16px] text-[15px] font-semibold text-white transition-shadow duration-[120ms] hover:shadow-lg hover:shadow-accent/20"
          >
            Start a conversation
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
