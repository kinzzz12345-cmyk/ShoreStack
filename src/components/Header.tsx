"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "./Icons";

const navLinks = [
  { href: "/#problems", label: "Problems" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/examples", label: "Examples" },
  { href: "/start", label: "Start" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />
      <header className="fixed top-[3px] left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px]">
          <div className="flex h-14 items-center justify-between">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-primary font-[family-name:var(--font-heading)]"
              onClick={() => setMobileOpen(false)}
            >
              ShoreStack
            </Link>

            <nav className="hidden md:flex items-center gap-[28px]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-[120ms] hover:text-accent ${
                    pathname === link.href ? "text-accent" : "text-text-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-primary"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="flex flex-col px-[16px] py-[8px] gap-[4px]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-[16px] py-[12px] text-[15px] font-medium transition-colors duration-[120ms] hover:bg-bg ${
                    pathname === link.href ? "text-accent bg-bg" : "text-text-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
