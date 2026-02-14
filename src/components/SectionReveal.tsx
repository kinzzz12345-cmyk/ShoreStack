"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionReveal({ children, className = "", id }: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`section-reveal ${className}`}>
      {children}
    </section>
  );
}
