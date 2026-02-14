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

  const activeStepData = howIWorkSteps.find((s) => s.id === activeStep);

  return (
    <>
      {/* Hero + Identification */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <div className="max-w-3xl">
            <p className="text-[14px] font-semibold text-accent uppercase tracking-wider mb-3">
              Affordable systems for small businesses
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-primary">
              Stop running your business from
              <br className="hidden sm:block" />
              calls, chats, and memory.
            </h1>
            <p className="mt-4 text-text-light text-lg leading-relaxed">
              We build simple, budget-friendly systems that save small businesses 5 to 10 hours every week. No expensive software subscriptions, no complicated setups. Just practical tools that fit how you already work.
            </p>
          </div>

          <p className="mt-8 text-[14px] font-medium text-primary">
            Which of these sounds most like your situation?
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {identificationCards.map((card) => (
              <button
                key={card.id}
                onClick={() => setSelectedCard(card.id === selectedCard ? null : card.id)}
                className={`hover-elevate text-left rounded-xl border-2 p-4 transition-colors duration-[120ms] ${
                  selectedCard === card.id
                    ? "border-accent bg-accent/5"
                    : "border-border bg-white hover:border-accent/40"
                }`}
              >
                <span className="text-[15px] font-medium text-primary block">{card.label}</span>
                <span className="text-[13px] text-text-light mt-1 block">{card.description}</span>
              </button>
            ))}
          </div>

          {selectedCardData && (
            <div className="mt-6 rounded-xl bg-bg border border-border p-6 wizard-step">
              <p className="text-[14px] font-semibold text-accent mb-3">
                {selectedCardData.label}
              </p>
              <p className="text-[15px] text-text leading-relaxed">{selectedCardData.suggestion}</p>
              <ul className="mt-4 space-y-2">
                {selectedCardData.symptoms.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-text-light">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Symptoms Checklist */}
      <SectionReveal id="problems" className="bg-bg py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Does any of this sound familiar?
          </h2>
          <p className="mt-2 text-text-light">
            Check the ones that apply. Most business owners are surprised how many they recognize.
          </p>

          <div className="mt-6 space-y-2">
            {symptoms.map((symptom) => (
              <label
                key={symptom.id}
                className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors duration-[120ms] ${
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

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-[14px] text-text-light">
              Selected: <span className="font-semibold text-primary">{checkedCount}</span> of {symptoms.length}
            </span>
            {checkedCount >= 3 && (
              <span className="text-[14px] font-medium text-accent bg-accent/10 rounded-full px-4 py-2 wizard-step">
                Most businesses with 3+ of these lose 6-10 hours every week. We can help fix that affordably.
              </span>
            )}
          </div>
        </div>
      </SectionReveal>

      {/* How It Works */}
      <SectionReveal id="how-it-works" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            How we work with you
          </h2>
          <p className="mt-2 text-text-light">
            No mystery. No jargon. Here is exactly what happens when we work together, step by step.
          </p>

          <div className="mt-8 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {howIWorkSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 w-[140px] transition-all duration-[120ms] ${
                    activeStep === step.id
                      ? "border-accent bg-accent/5"
                      : "border-border bg-white hover:border-accent/40"
                  }`}
                >
                  <span className="text-[12px] font-medium text-text-light uppercase tracking-wider">
                    Step {index + 1}
                  </span>
                  <span className="text-[15px] font-semibold text-primary">{step.title}</span>
                  <span className="flex items-center gap-1 text-[12px] text-accent">
                    <ClockIcon className="w-3 h-3" />
                    {step.duration}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {activeStepData && (
            <div className="mt-6 rounded-xl bg-bg border border-border p-6 wizard-step">
              <h3 className="text-lg font-semibold text-primary">{activeStepData.title}</h3>
              <p className="mt-1 text-[14px] text-accent font-medium">{activeStepData.description}</p>
              <p className="mt-3 text-[15px] text-text leading-relaxed">{activeStepData.detail}</p>
            </div>
          )}
        </div>
      </SectionReveal>

      {/* Outcomes */}
      <SectionReveal className="bg-bg py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            What changes look like
          </h2>
          <p className="mt-2 text-text-light">
            Drag the slider to compare before and after for each area.
          </p>

          <div className="mt-6 space-y-6">
            {outcomes.map((outcome) => {
              const val = getSliderValue(outcome.id);
              return (
                <div key={outcome.id} className="rounded-xl border border-border bg-white p-6">
                  <h3 className="text-[15px] font-semibold text-primary mb-4">{outcome.area}</h3>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={val}
                    onChange={(e) => setSliderValue(outcome.id, Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-accent bg-border"
                    aria-label={`Compare before and after for ${outcome.area}`}
                  />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div
                      className="rounded-lg p-4 transition-opacity duration-[180ms]"
                      style={{
                        backgroundColor: "rgba(239, 68, 68, 0.05)",
                        opacity: val <= 50 ? 1 : 0.3 + 0.7 * ((100 - val) / 100),
                      }}
                    >
                      <p className="text-[12px] font-semibold text-red-600 mb-1">Before</p>
                      <p className="text-[14px] text-text">{outcome.before}</p>
                    </div>
                    <div
                      className="rounded-lg p-4 transition-opacity duration-[180ms]"
                      style={{
                        backgroundColor: "rgba(42, 157, 143, 0.05)",
                        opacity: val >= 50 ? 1 : 0.3 + 0.7 * (val / 100),
                      }}
                    >
                      <p className="text-[12px] font-semibold text-accent mb-1">After</p>
                      <p className="text-[14px] text-text">{outcome.after}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>

      {/* Trust Panel */}
      <SectionReveal className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            What to expect from us
          </h2>
          <p className="mt-2 text-text-light">
            Clear commitments, not marketing promises. We keep costs low and communication honest.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-bg p-6">
              <h3 className="text-[14px] font-semibold text-primary uppercase tracking-wider mb-4">
                How We Work
              </h3>
              <ul className="space-y-3">
                {expectations.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-[14px] text-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
              <h3 className="text-[14px] font-semibold text-primary uppercase tracking-wider mb-4">
                Our Guarantee
              </h3>
              <ul className="space-y-3">
                {guarantees.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-[14px] text-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Stories */}
      <SectionReveal className="bg-bg py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            How it has worked for others
          </h2>
          <p className="mt-2 text-text-light">
            Real businesses, real problems, real results. All built within budget.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {operationalStories.map((story) => (
              <div key={story.id} className="rounded-xl border border-border bg-white p-6 flex flex-col">
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent bg-accent/10 rounded-full px-3 py-1 w-fit mb-4">
                  <ClockIcon className="w-3 h-3" />
                  Saved {story.saved}
                </span>
                <span className="text-[13px] font-medium text-primary mb-1">{story.business}</span>
                <div className="mb-3">
                  <span className="text-[12px] font-medium text-text-light uppercase tracking-wider">Situation</span>
                  <p className="mt-1 text-[14px] text-text leading-relaxed">{story.situation}</p>
                </div>
                <div className="mb-3">
                  <span className="text-[12px] font-medium text-accent uppercase tracking-wider">What we built</span>
                  <p className="mt-1 text-[14px] text-text leading-relaxed">{story.change}</p>
                </div>
                <div className="mt-auto">
                  <span className="text-[12px] font-medium text-primary uppercase tracking-wider">Result</span>
                  <p className="mt-1 text-[14px] text-text font-medium leading-relaxed">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="bg-primary py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-7 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to save time and money?
          </h2>
          <p className="mt-3 text-white/70 mx-auto max-w-lg">
            Tell us about your business in a few minutes. We review it before we talk so you do not have to explain everything twice. No cost, no obligation.
          </p>
          <div className="mt-6">
            <Link
              href="/start"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 text-[15px] font-semibold text-white transition-all duration-[120ms] hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
            >
              Talk to Us
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
