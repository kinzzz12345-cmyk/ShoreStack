"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoreStackLogo, MenuIcon, XIcon, SunIcon, MoonIcon } from "./Icons";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/examples", label: "Examples" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("shorestack_theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("shorestack_theme", next ? "dark" : "light");
  }

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
        <div className="mx-auto max-w-5xl px-4 sm:px-7">
          <div className="flex h-14 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-accent"
              onClick={() => setMobileOpen(false)}
            >
              <ShoreStackLogo className="w-8 h-8" />
              <span className="text-xl font-semibold tracking-tight text-primary font-[family-name:var(--font-heading)]">
                ShoreStack
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[15px] font-medium transition-colors duration-[120ms] hover:text-accent ${
                      pathname === link.href || (link.href.startsWith("/#") && pathname === "/")
                        ? "text-accent"
                        : "text-text-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-text-light hover:text-primary hover:bg-bg transition-colors"
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {dark ? <SunIcon className="w-[18px] h-[18px]" /> : <MoonIcon className="w-[18px] h-[18px]" />}
              </button>

              <Link
                href="/start"
                className="inline-flex items-center rounded-lg bg-accent px-5 py-2 text-[14px] font-semibold text-white transition-all duration-[120ms] hover:bg-accent-dark hover:shadow-md"
              >
                Talk to Us
              </Link>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-text-light hover:text-primary transition-colors"
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {dark ? <SunIcon className="w-[18px] h-[18px]" /> : <MoonIcon className="w-[18px] h-[18px]" />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-primary"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="flex flex-col px-4 py-2 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-[15px] font-medium transition-colors duration-[120ms] hover:bg-bg ${
                    pathname === link.href ? "text-accent bg-bg" : "text-text-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/start"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-accent px-4 py-3 text-[15px] font-semibold text-white text-center mt-1 hover:bg-accent-dark transition-colors"
              >
                Talk to Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
