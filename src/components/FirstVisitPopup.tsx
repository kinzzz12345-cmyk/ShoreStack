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
      // localStorage unavailable (private browsing, etc.)
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
    /* Backdrop */
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-iron/60 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-lg rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          closing ? "scale-95 opacity-0" : "scale-100 opacity-100 animate-popup"
        }`}
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-silver hover:text-iron hover:bg-dust/50 transition-colors"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Top accent bar */}
        <div className="h-1.5 rounded-t-2xl bg-gradient-to-r from-bondi to-bondi-dark" />

        <div className="px-6 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-iron font-[family-name:var(--font-heading)] leading-snug pr-8">
            Is your business stuck because the tech isn&apos;t keeping up?
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-blue">
            ShoreStack helps you fix the problems that slow you down and block your growth.
          </p>

          {/* Bullet list */}
          <div className="mt-5">
            <p className="text-sm font-semibold text-iron mb-3">
              I step in when you need:
            </p>
            <ul className="space-y-2.5">
              {[
                "A smoother, more reliable website",
                "Tools that actually work together",
                "Less manual work and more automation",
                "A clearer experience for your customers",
                "A way to launch ideas without tech headaches",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-bondi" />
                  <span className="text-sm text-slate-blue">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing message */}
          <div className="mt-6 rounded-xl bg-dust/30 p-4">
            <p className="text-sm font-medium text-iron leading-relaxed">
              Ready to move forward?
              <br />
              Let&apos;s fix the problem and get your business running the way it should.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              onClick={dismiss}
              className="flex-1 inline-flex items-center justify-center rounded-lg bg-bondi px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-bondi-dark"
            >
              Fix My Problem
            </Link>
            <Link
              href="/services"
              onClick={dismiss}
              className="flex-1 inline-flex items-center justify-center rounded-lg border border-dust bg-white px-6 py-3 text-sm font-semibold text-iron transition-colors hover:bg-dust/50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
