"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Unable to send your message. Please try again or email us directly.");
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-bondi/20 bg-bondi/5 p-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-bondi/10 text-bondi mb-4">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-iron font-[family-name:var(--font-heading)]">
          Thank you for reaching out!
        </h3>
        <p className="mt-2 text-slate-blue">
          We will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-iron mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-dust bg-white px-4 py-3 text-sm text-iron placeholder-silver focus:border-bondi focus:ring-2 focus:ring-bondi/20 outline-none transition-all"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-iron mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-dust bg-white px-4 py-3 text-sm text-iron placeholder-silver focus:border-bondi focus:ring-2 focus:ring-bondi/20 outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-iron mb-1.5">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-lg border border-dust bg-white px-4 py-3 text-sm text-iron placeholder-silver focus:border-bondi focus:ring-2 focus:ring-bondi/20 outline-none transition-all"
          placeholder="(240) 442-8990"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-iron mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-dust bg-white px-4 py-3 text-sm text-iron focus:border-bondi focus:ring-2 focus:ring-bondi/20 outline-none transition-all"
        >
          <option value="">Select a service</option>
          <option value="Custom Website Design and Development">Custom Website Design and Development</option>
          <option value="Website Redesign for Outdated Sites">Website Redesign for Outdated Sites</option>
          <option value="Full SaaS Architecture and Development">Full SaaS Architecture and Development</option>
          <option value="Multi Tenant Real Estate Platforms">Multi Tenant Real Estate Platforms</option>
          <option value="Asset and Inventory Management Applications">Asset and Inventory Management Applications</option>
          <option value="Online Booking Systems">Online Booking Systems</option>
          <option value="Local SEO Setup">Local SEO Setup</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-iron mb-1.5">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-dust bg-white px-4 py-3 text-sm text-iron placeholder-silver focus:border-bondi focus:ring-2 focus:ring-bondi/20 outline-none transition-all resize-none"
          placeholder="Describe your project, goals, and any specific requirements..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-bondi px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bondi-dark focus:ring-2 focus:ring-bondi/20 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
