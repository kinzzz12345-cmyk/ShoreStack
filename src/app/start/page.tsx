"use client";

import { useState } from "react";
import { wizardSteps } from "@/lib/data";
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from "@/components/Icons";

const totalSteps = 5;

export default function StartPage() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState<string | null>(null);
  const [frustration, setFrustration] = useState<string | null>(null);
  const [teamSize, setTeamSize] = useState<string | null>(null);
  const [tools, setTools] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function toggleTool(tool: string) {
    setTools((prev) => {
      const next = new Set(prev);
      if (next.has(tool)) next.delete(tool);
      else next.add(tool);
      return next;
    });
  }

  function canProceed() {
    if (step === 1) return businessType !== null;
    if (step === 2) return frustration !== null;
    if (step === 3) return teamSize !== null;
    if (step === 4) return tools.size > 0;
    return true;
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function goNext() {
    if (step < totalSteps) setStep(step + 1);
    else handleSubmit();
  }

  function goBack() {
    if (step > 1) setStep(step - 1);
  }

  if (submitted) {
    return (
      <section className="bg-white py-[72px]">
        <div className="mx-auto max-w-2xl px-[16px] sm:px-[28px] text-center wizard-step">
          <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-[28px]">
            <CheckIcon className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            Thank you. I have everything I need to prepare.
          </h1>
          <p className="mt-[16px] text-text mx-auto">
            I will review this before our call so you do not need to explain everything again.
          </p>
          <p className="mt-[28px] text-text-light text-[15px]">
            Expect to hear from me within one business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-[72px]">
      <div className="mx-auto max-w-2xl px-[16px] sm:px-[28px]">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary">
          Tell me about your business
        </h1>
        <p className="mt-[8px] text-text-light">
          This is preparation, not commitment. It helps me understand your situation
          before we talk.
        </p>

        {/* Progress bar */}
        <div className="mt-[28px] flex gap-[4px]">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-[180ms] ${
                i < step ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
        <p className="mt-[8px] text-[13px] text-text-light">
          Step {step} of {totalSteps}
        </p>

        {/* Step content */}
        <div className="mt-[28px] wizard-step" key={step}>
          {step === 1 && (
            <div>
              <h2 className="text-lg font-semibold text-primary mb-[16px]">
                What type of business do you run?
              </h2>
              <div className="space-y-[8px]">
                {wizardSteps.businessTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setBusinessType(type)}
                    className={`w-full text-left rounded-lg border-2 p-[16px] text-[15px] transition-colors duration-[120ms] ${
                      businessType === type
                        ? "border-accent bg-accent/5 font-medium"
                        : "border-border bg-white hover:border-accent/40"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-semibold text-primary mb-[16px]">
                What is your biggest daily frustration?
              </h2>
              <div className="space-y-[8px]">
                {wizardSteps.frustrations.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrustration(f)}
                    className={`w-full text-left rounded-lg border-2 p-[16px] text-[15px] transition-colors duration-[120ms] ${
                      frustration === f
                        ? "border-accent bg-accent/5 font-medium"
                        : "border-border bg-white hover:border-accent/40"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-semibold text-primary mb-[16px]">
                How many people are involved in your daily operations?
              </h2>
              <div className="space-y-[8px]">
                {wizardSteps.teamSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setTeamSize(size)}
                    className={`w-full text-left rounded-lg border-2 p-[16px] text-[15px] transition-colors duration-[120ms] ${
                      teamSize === size
                        ? "border-accent bg-accent/5 font-medium"
                        : "border-border bg-white hover:border-accent/40"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-lg font-semibold text-primary mb-[16px]">
                What tools do you currently use? (select all that apply)
              </h2>
              <div className="space-y-[8px]">
                {wizardSteps.currentTools.map((tool) => (
                  <button
                    key={tool}
                    onClick={() => toggleTool(tool)}
                    className={`w-full text-left rounded-lg border-2 p-[16px] text-[15px] transition-colors duration-[120ms] ${
                      tools.has(tool)
                        ? "border-accent bg-accent/5 font-medium"
                        : "border-border bg-white hover:border-accent/40"
                    }`}
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-lg font-semibold text-primary mb-[16px]">
                Anything else you want me to know? (optional)
              </h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe your situation in your own words, or leave this blank."
                rows={6}
                className="w-full rounded-lg border-2 border-border p-[16px] text-[15px] text-text bg-white placeholder:text-text-light/50 focus:border-accent focus:outline-none transition-colors duration-[120ms] resize-none"
              />
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="mt-[28px] flex justify-between items-center">
          <button
            onClick={goBack}
            disabled={step === 1}
            className={`inline-flex items-center gap-[4px] text-[15px] font-medium transition-colors duration-[120ms] ${
              step === 1
                ? "text-border cursor-not-allowed"
                : "text-text-light hover:text-primary"
            }`}
          >
            <ChevronLeftIcon className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={goNext}
            disabled={!canProceed()}
            className={`inline-flex items-center gap-[4px] rounded-lg px-[28px] py-[12px] text-[15px] font-semibold text-white transition-all duration-[120ms] ${
              canProceed()
                ? "bg-accent hover:shadow-lg hover:shadow-accent/20"
                : "bg-border cursor-not-allowed"
            }`}
          >
            {step === totalSteps ? "Submit" : "Continue"}
            {step < totalSteps && <ChevronRightIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}
