import type { PortfolioItem } from "@/lib/data";
import { ArrowRightIcon } from "./Icons";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const inner = (
    <div className="group relative overflow-hidden rounded-2xl border border-dust bg-white transition-all hover:shadow-lg hover:border-bondi/20">
      {/* Thumbnail area */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-dust to-silver/60 flex items-center justify-center">
        {item.isPlaceholder ? (
          <div className="text-center px-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 text-slate-blue mb-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
            </div>
            <p className="text-xs font-medium text-slate-blue">Coming Soon</p>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-bondi/20 to-slate-blue/30 flex items-center justify-center">
            <span className="px-4 py-2 rounded-lg bg-white/90 text-sm font-semibold text-iron shadow-sm group-hover:bg-bondi group-hover:text-white transition-colors">
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
