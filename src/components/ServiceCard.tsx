import Link from "next/link";
import { iconMap, ArrowRightIcon } from "./Icons";
import type { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon];

  return (
    <div className="group rounded-2xl border border-dust bg-white p-6 sm:p-8 transition-all hover:shadow-lg hover:border-bondi/20 hover:-translate-y-1">
      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-bondi/10 p-3 text-bondi">
        {IconComponent && <IconComponent className="w-7 h-7" />}
      </div>
      <h3 className="text-lg font-bold text-iron font-[family-name:var(--font-heading)]">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-blue">
        {service.shortDescription}
      </p>
      {!compact && (
        <Link
          href={`/services#${service.id}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-bondi hover:text-bondi-dark transition-colors"
        >
          Learn more
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
