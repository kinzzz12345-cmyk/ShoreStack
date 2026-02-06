import Image from "next/image";
import type { PortfolioItem } from "@/lib/data";
import { ArrowRightIcon } from "./Icons";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const inner = (
    <div className="group relative overflow-hidden rounded-2xl border border-dust bg-white transition-all hover:shadow-lg hover:border-bondi/20">
      {/* Thumbnail area with background image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {item.isPlaceholder ? (
          <div className="absolute inset-0 flex items-end justify-start p-4">
            <span className="px-3 py-1.5 rounded-lg bg-white/90 text-xs font-semibold text-slate-blue shadow-sm backdrop-blur-sm">
              Coming Soon
            </span>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-5 py-2.5 rounded-lg bg-bondi text-sm font-semibold text-white shadow-lg">
              View Project <ArrowRightIcon className="w-4 h-4 inline ml-1" />
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-bondi">
          {item.category}
        </span>
        <h3 className="mt-1 text-base font-bold text-iron font-[family-name:var(--font-heading)]">
          {item.title}
        </h3>
        <p className="mt-1 text-xs text-slate-blue leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );

  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return inner;
}
