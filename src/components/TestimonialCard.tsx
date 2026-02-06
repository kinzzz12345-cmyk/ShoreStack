import type { Testimonial } from "@/lib/data";
import { QuoteIcon, StarIcon } from "./Icons";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-dust bg-white p-6 sm:p-8">
      <QuoteIcon className="w-10 h-10 text-bondi mb-4" />
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-bondi" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-blue italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-bondi/10 text-bondi font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-iron">{testimonial.name}</p>
          <p className="text-xs text-slate-blue">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
