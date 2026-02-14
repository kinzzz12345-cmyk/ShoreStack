"use client";

import { useState } from "react";
import Link from "next/link";
import {
  identificationCards,
  symptoms,
  howIWorkSteps,
  outcomes,
  expectations,
  guarantees,
  operationalStories,
} from "@/lib/data";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRightIcon, CheckIcon, ClockIcon } from "@/components/Icons";

export default function HomePage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [checkedSymptoms, setCheckedSymptoms] = useState<Set<string>>(new Set());
  const [activeStep, setActiveStep] = useState<string>("observe");
  const [outcomeSliders, setOutcomeSliders] = useState<Record<string, number>>({});

  const selectedCardData = identificationCards.find((c) => c.id === selectedCard);
  const checkedCount = checkedSymptoms.size;

  function toggleSymptom(id: string) {
    setCheckedSymptoms((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function getSliderValue(id: string) {
    return outcomeSliders[id] ?? 50;
  }

  function setSliderValue(id: string, value: number) {
    setOutcomeSliders((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <>
      {/* ── SECTION 1: Interactive Identification Panel ── */}
      <section className="bg-white py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-primary">
            Stop running your business from
            <br className="hidden sm:block" />
            calls, chats, and memory.
          </h1>
          <p className="mt-[16px] text-text-light text-lg">
            Pick what sounds most like you. The rest of the page will adjust.
          </p>

          <div className="mt-[28px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
            {identificationCards.map((card) => (
              <button
                key={card.id}
                onClick={() => setSelectedCard(card.id === selectedCard ? null : card.id)}
                className={`hover-elevate text-left rounded-lg border-2 p-[16px] transition-colors duration-[120ms] ${
                  selectedCard === card.id
                    ? "border-accent bg-accent/5"
                    : "border-border bg-white hover:border-accent/40"
                }`}
              >
                <span className="text-[15px] font-medium text-text leading-snug block">
                  {card.label}
                </span>
              </button>
            ))}
          </div>

          {selectedCardData && (
            <div className="mt-[28px] rounded-lg bg-bg border border-border p-[28px] wizard-step">
              <p className="text-[14px] font-medium text-accent mb-[16px]">
                Viewing suggestions for: {selectedCardData.label}
              </p>
              <p className="text-text">{selectedCardData.suggestion}</p>
              <ul className="mt-[16px] space-y-[8px]">
                {selectedCardData.symptoms.map((s, i) => (
                  <li key={i} className="flex items-start gap-[8px] text-[15px] text-text-light">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 2: Symptoms Checklist ── */}
      <SectionReveal id="problems" className="bg-bg py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Does any of this sound familiar?
          </h2>
          <p className="mt-[8px] text-text-light">
            Check the ones that apply. Be honest — most business owners check more than they expect.
          </p>

          <div className="mt-[28px] space-y-[8px]">
            {symptoms.map((symptom) => (
              <label
                key={symptom.id}
                className={`flex items-start gap-[12px] rounded-lg border p-[16px] cursor-pointer transition-colors duration-[120ms] ${
                  checkedSymptoms.has(symptom.id)
                    ? "border-accent bg-accent/5"
                    : "border-border bg-white hover:border-accent/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checkedSymptoms.has(symptom.id)}
                  onChange={() => toggleSymptom(symptom.id)}
                  className="mt-0.5 h-5 w-5 rounded border-border text-accent accent-accent shrink-0"
                />
                <span className="text-[15px] text-text">{symptom.label}</span>
              </label>
            ))}
          </div>

          <div className="mt-[28px] flex items-center gap-[16px]">
            <span className="text-[15px] text-text-light">
              Selected: <span className="font-semibold text-primary">{checkedCount}</span> of {symptoms.length}
            </span>
            {checkedCount >= 3 && (
              <span className="text-[15px] font-medium text-accent bg-accent/10 rounded-full px-[16px] py-[8px] wizard-step">
                Businesses usually lose 6–10 hours weekly to these.
              </span>
            )}
          </div>
        </div>
      </SectionReveal>

      {/* ── SECTION 3: How I Work ── */}
      <SectionReveal id="how-it-works" className="bg-white py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            How I work
          </h2>
          <p className="mt-[8px] text-text-light">
            No mystery. Here is exactly what happens when we work together.
          </p>

          {/* Horizontal timeline - scrollable on mobile */}
          <div className="mt-[44px] overflow-x-auto pb-[8px]">
            <div className="flex gap-[8px] min-w-max">
              {howIWorkSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col items-center gap-[8px] rounded-lg border-2 p-[16px] w-[160px] transition-all duration-[120ms] ${
                    activeStep === step.id
                      ? "border-accent bg-accent/5"
                      : "border-border bg-white hover:border-accent/40"
                  }`}
                >
                  <span className="text-[13px] font-medium text-text-light uppercase tracking-wider">
                    Step {index + 1}
                  </span>
                  <span className="text-[15px] font-semibold text-primary">{step.title}</span>
                  <span className="flex items-center gap-1 text-[13px] text-accent">
                    <ClockIcon className="w-3.5 h-3.5" />
                    {step.duration}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active step detail */}
          {howIWorkSteps.map((step) =>
            activeStep === step.id ? (
              <div key={step.id} className="mt-[28px] rounded-lg bg-bg border border-border p-[28px] wizard-step">
                <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                <p className="mt-[8px] text-text">{step.description}</p>
              </div>
            ) : null
          )}
        </div>
      </SectionReveal>

      {/* ── SECTION 4: Outcomes (Before vs After) ── */}
      <SectionReveal className="bg-bg py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            What changes look like
          </h2>
          <p className="mt-[8px] text-text-light">
            Drag the slider to see the before and after.
          </p>

          <div className="mt-[28px] space-y-[28px]">
            {outcomes.map((outcome) => {
              const val = getSliderValue(outcome.id);
              return (
                <div key={outcome.id} className="rounded-lg border border-border bg-white p-[28px]">
                  <h3 className="text-[15px] font-semibold text-primary mb-[16px]">{outcome.area}</h3>
                  <div className="relative">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={val}
                      onChange={(e) => setSliderValue(outcome.id, Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-accent bg-border"
                      aria-label={`Compare before and after for ${outcome.area}`}
                    />
                    <div className="mt-[16px] grid grid-cols-2 gap-[16px]">
                      <div
                        className="rounded-lg p-[16px] transition-opacity duration-[180ms]"
                        style={{
                          backgroundColor: "rgba(239, 68, 68, 0.05)",
                          opacity: val <= 50 ? 1 : 0.3 + 0.7 * ((100 - val) / 100),
                        }}
                      >
                        <p className="text-[13px] font-medium text-red-600 mb-[4px]">Before</p>
                        <p className="text-[15px] text-text">{outcome.before}</p>
                      </div>
                      <div
                        className="rounded-lg p-[16px] transition-opacity duration-[180ms]"
                        style={{
                          backgroundColor: "rgba(42, 157, 143, 0.05)",
                          opacity: val >= 50 ? 1 : 0.3 + 0.7 * (val / 100),
                        }}
                      >
                        <p className="text-[13px] font-medium text-accent mb-[4px]">After</p>
                        <p className="text-[15px] text-text">{outcome.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>

      {/* ── SECTION 5: Transparency Trust Panel ── */}
      <SectionReveal className="bg-white py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            What to expect from me
          </h2>
          <p className="mt-[8px] text-text-light">
            Clear commitments, not marketing promises.
          </p>

          <div className="mt-[28px] grid grid-cols-1 md:grid-cols-2 gap-[28px]">
            <div className="rounded-lg border border-border bg-bg p-[28px]">
              <h3 className="text-[15px] font-semibold text-primary uppercase tracking-wider mb-[16px]">
                What I Expect of Myself
              </h3>
              <ul className="space-y-[12px]">
                {expectations.map((item, i) => (
                  <li key={i} className="flex items-start gap-[8px]">
                    <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-[15px] text-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-accent/30 bg-accent/5 p-[28px]">
              <h3 className="text-[15px] font-semibold text-primary uppercase tracking-wider mb-[16px]">
                What I Guarantee
              </h3>
              <ul className="space-y-[12px]">
                {guarantees.map((item, i) => (
                  <li key={i} className="flex items-start gap-[8px]">
                    <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-[15px] text-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ── SECTION 6: Operational Stories ── */}
      <SectionReveal className="bg-bg py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            How it has worked for others
          </h2>
          <p className="mt-[8px] text-text-light">
            Real situations, real changes, real results.
          </p>

          <div className="mt-[28px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {operationalStories.map((story) => (
              <div key={story.id} className="rounded-lg border border-border bg-white p-[28px] flex flex-col">
                <div className="mb-[16px]">
                  <span className="text-[13px] font-medium text-text-light uppercase tracking-wider">Situation</span>
                  <p className="mt-[4px] text-[15px] text-text">{story.situation}</p>
                </div>
                <div className="mb-[16px]">
                  <span className="text-[13px] font-medium text-accent uppercase tracking-wider">Change</span>
                  <p className="mt-[4px] text-[15px] text-text">{story.change}</p>
                </div>
                <div className="mt-auto">
                  <span className="text-[13px] font-medium text-primary uppercase tracking-wider">Result</span>
                  <p className="mt-[4px] text-[15px] text-text font-medium">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ── SECTION 7: Guided Start CTA ── */}
      <SectionReveal className="bg-primary py-[72px]">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to simplify your operations?
          </h2>
          <p className="mt-[8px] text-white/70 mx-auto">
            The intake form takes a few minutes. I review it before our call so you
            do not need to explain everything again.
          </p>
          <div className="mt-[28px]">
            <Link
              href="/start"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-[28px] py-[16px] text-[15px] font-semibold text-white transition-shadow duration-[120ms] hover:shadow-lg hover:shadow-accent/20"
            >
              Start the intake process
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
