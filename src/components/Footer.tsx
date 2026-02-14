import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { ShoreStackLogo, EnvelopeIcon, PhoneIcon, MapPinIcon } from "./Icons";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Examples", href: "/examples" },
  { label: "About", href: "/about" },
  { label: "Talk to Us", href: "/start" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-7 py-10">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white">
              <ShoreStackLogo className="w-7 h-7" />
              <span className="text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                ShoreStack
              </span>
            </Link>
            <p className="mt-2 text-[14px] leading-relaxed text-white/60">
              {siteConfig.tagline}
            </p>
            <div className="mt-4 flex items-center gap-2 text-[13px] text-white/50">
              <MapPinIcon className="w-3.5 h-3.5 shrink-0" />
              <span>Small local business in Maryland</span>
            </div>
            <p className="mt-1 text-[13px] text-white/50 pl-[22px]">
              Made in USA
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-white mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-white/60 hover:text-white transition-colors duration-[120ms]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors duration-[120ms]"
                >
                  <EnvelopeIcon className="w-4 h-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors duration-[120ms]"
                >
                  <PhoneIcon className="w-4 h-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-white mb-4">
              Why Us
            </h3>
            <ul className="space-y-2 text-[14px] text-white/60">
              <li>Low cost, budget-based pricing</li>
              <li>Save your time and money</li>
              <li>No contracts or lock-ins</li>
              <li>You own everything we build</li>
              <li>24-hour response time</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[12px] text-white/40">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span>{siteConfig.workingHours}</span>
              <span>{siteConfig.timezone}</span>
              <span>Response: {siteConfig.avgResponseTime}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
