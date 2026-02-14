"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { XIcon } from "./Icons";

const STORAGE_KEY = "shorestack_visited";

export default function FirstVisitPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    } catch {
      // localStorage unavailable
    }
  }, []);

  function dismiss() {
    setClosing(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore
    }
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" onClick={dismiss} />

      <div
        className={`relative w-full max-w-lg rounded-xl bg-white shadow-2xl transition-all duration-300 ${
          closing ? "scale-95 opacity-0" : "scale-100 opacity-100 animate-popup"
        }`}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-text-light hover:text-primary hover:bg-bg/50 transition-colors"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="h-1 rounded-t-xl bg-accent" />

        <div className="px-6 pt-5 pb-7 sm:px-8 sm:pt-6 sm:pb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-primary font-[family-name:var(--font-heading)] leading-snug pr-8">
            Is your business stuck because the tech is not keeping up?
          </h2>

          <p className="mt-3 text-[14px] leading-relaxed text-text-light">
            ShoreStack helps small businesses fix the everyday problems that waste your time and cost you money. We keep it affordable and simple.
          </p>

          <div className="mt-4">
            <p className="text-[14px] font-semibold text-primary mb-2">
              We step in when you need:
            </p>
            <ul className="space-y-2">
              {[
                "A smoother, more reliable way to manage bookings",
                "Tools that actually work together instead of fighting each other",
                "Less manual work and more automation for daily tasks",
                "A clearer experience for your customers",
                "An affordable way to fix tech problems without breaking the bank",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[14px] text-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-lg bg-bg p-4">
            <p className="text-[14px] font-medium text-primary leading-relaxed">
              We work within your budget. No surprise costs. No long contracts. Just practical solutions that save you time and money.
            </p>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/start"
              onClick={dismiss}
              className="flex-1 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Talk to Us
            </Link>
            <Link
              href="/solutions"
              onClick={dismiss}
              className="flex-1 inline-flex items-center justify-center rounded-lg border border-border bg-white px-6 py-3 text-[14px] font-semibold text-primary transition-colors hover:bg-bg"
            >
              See Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
