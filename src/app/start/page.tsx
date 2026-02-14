"use client";

import { useState } from "react";
import { wizardSteps } from "@/lib/data";
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon, ClockIcon } from "@/components/Icons";

const totalSteps = 6;

function InquirySteps() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {inquirySteps.map((s) => (
        <div
          key={s.step}
          className="flex flex-col gap-2 rounded-xl border-2 border-border bg-white p-4"
        >
          <span className="text-[11px] font-medium text-text-light uppercase tracking-wider">
            Step {s.step}
          </span>
          <span className="text-[15px] font-semibold text-primary leading-tight">{s.title}</span>
          <span className="flex items-center gap-1 text-[12px] text-accent">
            <ClockIcon className="w-3 h-3" />
            {s.timeframe}
          </span>
          <p className="text-[13px] text-text-light leading-relaxed">{s.description}</p>
        </div>
      ))}
    </div>
  );
}

const inquirySteps = [
  {
    step: 1,
    title: "We review your submission",
    timeframe: "Same day",
    description: "We read everything you shared before picking up the phone. No cold call, no re-explaining yourself.",
  },
  {
    step: 2,
    title: "We reach out",
    timeframe: "Within 1 business day",
    description: "We contact you at the details you provided to schedule a brief conversation at a time that works for you.",
  },
  {
    step: 3,
    title: "Short call together",
    timeframe: "15–30 minutes",
    description: "A quick, no-pressure conversation to understand your situation better and answer any questions you have.",
  },
  {
    step: 4,
    title: "You get a clear answer",
    timeframe: "Same call",
    description: "We tell you honestly whether we can help, what it would involve, and what it would cost. No obligation.",
  },
];

export default function StartPage() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState<string | null>(null);
  const [frustrations, setFrustrations] = useState<Set<string>>(new Set());
  const [teamSize, setTeamSize] = useState<string | null>(null);
  const [tools, setTools] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [referral, setReferral] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggleFrustration(f: string) {
    setFrustrations((prev) => {
      const next = new Set(prev);
      if (next.has(f)) next.delete(f);
      else next.add(f);
      return next;
    });
  }

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
    if (step === 2) return frustrations.size > 0;
    if (step === 3) return teamSize !== null;
    if (step === 4) return tools.size > 0;
    if (step === 5) return true;
    if (step === 6) return contactName.trim() !== "" && (contactEmail.trim() !== "" || contactPhone.trim() !== "");
    return true;
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessType,
          frustrations: Array.from(frustrations),
          teamSize,
          tools: Array.from(tools),
          notes,
          contactName,
          contactEmail,
          contactPhone,
          businessName,
          referral,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function goNext() {
    if (step < totalSteps) setStep(step + 1);
    else handleSubmit();
  }

  function goBack() {
    if (step > 1) setStep(step - 1);
  }

  function resetForm() {
    setStep(1);
    setBusinessType(null);
    setFrustrations(new Set());
    setTeamSize(null);
    setTools(new Set());
    setNotes("");
    setContactName("");
    setContactEmail("");
    setContactPhone("");
    setBusinessName("");
    setReferral("");
    setSubmitted(false);
    setError(null);
  }

  if (submitted) {
    return (
      <>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-7 text-center wizard-step">
            <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <CheckIcon className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">
              Thank you, {contactName.split(" ")[0]}. We have everything we need.
            </h1>
            <p className="mt-4 text-text mx-auto leading-relaxed">
              We will review your information before reaching out so you do not have to explain everything again. Expect to hear from us within one business day.
            </p>
            <p className="mt-6 text-text-light text-[14px]">
              We will contact you at {contactEmail || contactPhone} to schedule a conversation. No cost, no obligation.
            </p>
            <button
              onClick={resetForm}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-accent px-7 py-3 text-[15px] font-semibold text-white transition-all duration-[120ms] hover:bg-accent-dark hover:shadow-lg"
            >
              Submit another inquiry
            </button>
          </div>
        </section>

        <section className="bg-bg py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-7">
            <h2 className="text-xl sm:text-2xl font-bold text-primary text-center">
              What happens next
            </h2>
            <p className="mt-2 text-text-light text-center">
              Here is exactly what to expect. No surprises.
            </p>
            <InquirySteps />
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-7">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary">
          Tell us about your business
        </h1>
        <p className="mt-2 text-text-light">
          This takes a few minutes. It is not a commitment. It helps us understand your situation before we talk, so we can give you practical suggestions right away.
        </p>

        {/* Progress bar */}
        <div className="mt-6 flex gap-1">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-[180ms] ${
                i < step ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-[13px] text-text-light">
          Step {step} of {totalSteps}
        </p>

        {/* Error message */}
        {error && (
          <div className="mt-6 rounded-xl border-2 border-red-200 bg-red-50 p-4 text-red-700">
            <p className="text-[14px] font-medium">{error}</p>
          </div>
        )}

        {/* Step content */}
        <div className="mt-6 wizard-step" key={step}>
          {step === 1 && (
            <div>
              <h2 className="text-lg font-semibold text-primary mb-4">
                What type of business do you run?
              </h2>
              <div className="space-y-2">
                {wizardSteps.businessTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setBusinessType(type)}
                    className={`w-full text-left rounded-xl border-2 p-4 text-[15px] transition-colors duration-[120ms] ${
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
              <h2 className="text-lg font-semibold text-primary mb-1">
                What frustrates you the most?
              </h2>
              <p className="text-[14px] text-text-light mb-4">Select all that apply.</p>
              <div className="space-y-2">
                {wizardSteps.frustrations.map((f) => (
                  <button
                    key={f}
                    onClick={() => toggleFrustration(f)}
                    className={`w-full text-left rounded-xl border-2 p-4 text-[15px] transition-colors duration-[120ms] ${
                      frustrations.has(f)
                        ? "border-accent bg-accent/5 font-medium"
                        : "border-border bg-white hover:border-accent/40"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[13px] text-text-light">
                Selected: {frustrations.size}
              </p>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-semibold text-primary mb-4">
                How many people are involved in your daily operations?
              </h2>
              <div className="space-y-2">
                {wizardSteps.teamSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setTeamSize(size)}
                    className={`w-full text-left rounded-xl border-2 p-4 text-[15px] transition-colors duration-[120ms] ${
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
              <h2 className="text-lg font-semibold text-primary mb-1">
                What tools do you currently use?
              </h2>
              <p className="text-[14px] text-text-light mb-4">Select all that apply.</p>
              <div className="space-y-2">
                {wizardSteps.currentTools.map((tool) => (
                  <button
                    key={tool}
                    onClick={() => toggleTool(tool)}
                    className={`w-full text-left rounded-xl border-2 p-4 text-[15px] transition-colors duration-[120ms] ${
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
              <h2 className="text-lg font-semibold text-primary mb-4">
                Anything else you want us to know? (optional)
              </h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe your situation in your own words, or skip this step."
                rows={5}
                className="w-full rounded-xl border-2 border-border p-4 text-[15px] text-text bg-white placeholder:text-text-light/50 focus:border-accent focus:outline-none transition-colors duration-[120ms] resize-none"
              />
            </div>
          )}

          {step === 6 && (
            <div>
              <h2 className="text-lg font-semibold text-primary mb-1">
                How can we reach you?
              </h2>
              <p className="text-[14px] text-text-light mb-4">
                We will use this to contact you within one business day. No spam, no mailing lists.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-[14px] font-medium text-primary mb-1">
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="First and last name"
                    className="w-full rounded-xl border-2 border-border p-3 text-[15px] text-text bg-white placeholder:text-text-light/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-primary mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@business.com"
                    className="w-full rounded-xl border-2 border-border p-3 text-[15px] text-text bg-white placeholder:text-text-light/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-primary mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="(555) 555-5555"
                    className="w-full rounded-xl border-2 border-border p-3 text-[15px] text-text bg-white placeholder:text-text-light/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-primary mb-1">
                    Business name (optional)
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Your business name"
                    className="w-full rounded-xl border-2 border-border p-3 text-[15px] text-text bg-white placeholder:text-text-light/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-primary mb-1">
                    How did you hear about us? (optional)
                  </label>
                  <input
                    type="text"
                    value={referral}
                    onChange={(e) => setReferral(e.target.value)}
                    placeholder="Google, referral, social media, etc."
                    className="w-full rounded-xl border-2 border-border p-3 text-[15px] text-text bg-white placeholder:text-text-light/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={goBack}
            disabled={step === 1}
            className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors duration-[120ms] ${
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
            disabled={!canProceed() || submitting}
            className={`inline-flex items-center gap-1 rounded-xl px-6 py-3 text-[15px] font-semibold text-white transition-all duration-[120ms] ${
              canProceed() && !submitting
                ? "bg-accent hover:bg-accent-dark hover:shadow-lg"
                : "bg-border cursor-not-allowed"
            }`}
          >
            {submitting ? "Submitting..." : step === totalSteps ? "Submit" : "Continue"}
            {step < totalSteps && !submitting && <ChevronRightIcon className="w-4 h-4" />}
          </button>
        </div>

        {/* What to expect after submitting */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-[13px] font-semibold text-primary uppercase tracking-wider mb-1">
            What happens after you submit
          </p>
          <p className="text-[13px] text-text-light mb-0">
            No surprises. Here is exactly what to expect.
          </p>
        </div>
      </div>

      {/* Inquiry steps - wider container for 4-column grid */}
      <div className="mx-auto max-w-4xl px-4 sm:px-7">
        <InquirySteps />
      </div>
    </section>
  );
}
