interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-wider text-bondi mb-3">
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] leading-tight ${
          light ? "text-white" : "text-iron"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-silver" : "text-slate-blue"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
