import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { EnvelopeIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="mx-auto max-w-5xl px-[16px] sm:px-[28px] py-[44px]">
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-white font-[family-name:var(--font-heading)]"
            >
              ShoreStack
            </Link>
            <p className="mt-[8px] text-[15px] leading-relaxed text-white/60">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white mb-[16px]">
              Navigation
            </h3>
            <ul className="space-y-[8px]">
              {[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "Examples", href: "/examples" },
                { label: "About", href: "/about" },
                { label: "Start", href: "/start" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/60 hover:text-white transition-colors duration-[120ms]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white mb-[16px]">
              Contact
            </h3>
            <ul className="space-y-[8px]">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-[15px] text-white/60 hover:text-white transition-colors duration-[120ms]"
                >
                  <EnvelopeIcon className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-[15px] text-white/60 hover:text-white transition-colors duration-[120ms]"
                >
                  <PhoneIcon className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[44px] border-t border-white/10 pt-[28px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[16px] text-[13px] text-white/40">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
            <div className="flex flex-wrap gap-x-[28px] gap-y-[8px]">
              <span>{siteConfig.workingHours}</span>
              <span>{siteConfig.timezone}</span>
              <span>Response: {siteConfig.avgResponseTime}</span>
              <span>Updated: {siteConfig.lastUpdated}</span>
              <span>v{siteConfig.version}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
