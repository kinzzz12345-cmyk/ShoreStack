import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { EnvelopeIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-iron text-dust">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Shore<span className="text-bondi">Stack</span>
            </Link>
            <p className="mt-4 text-sm text-silver leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-silver hover:text-bondi transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Website Design",
                "SaaS Development",
                "Real Estate Platforms",
                "Booking Systems",
                "Website Redesign",
                "Local SEO",
              ].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-silver hover:text-bondi transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-silver hover:text-bondi transition-colors"
                >
                  <EnvelopeIcon className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-sm text-silver hover:text-bondi transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-bondi px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-bondi-dark"
              >
                Get a Free Preview
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-blue/30 pt-8 text-center">
          <p className="text-sm text-silver">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
