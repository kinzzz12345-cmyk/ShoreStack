import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { EnvelopeIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free consultation or homepage preview. Reach out to discuss your project and learn how ShoreStack can help your business grow.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-white via-dust/30 to-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Contact"
            title="Let's Start a Conversation"
            description="Whether you need a new website, a custom platform, or help modernizing an existing system, reach out for a free consultation. No pressure, no obligations."
          />
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-iron font-[family-name:var(--font-heading)] mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Free preview offer */}
              <div className="rounded-2xl bg-bondi p-6 sm:p-8 text-white">
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)]">
                  Get a Free Homepage Preview
                </h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  Not sure if a redesign is worth it? Send me your current website URL
                  and I will create a free homepage preview showing what your site could
                  look like with a modern design. No commitment required.
                </p>
              </div>

              {/* Contact info */}
              <div className="rounded-2xl border border-dust bg-dust/20 p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-iron mb-4">
                  Direct Contact
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-sm text-slate-blue hover:text-bondi transition-colors"
                    >
                      <div className="flex-shrink-0 rounded-lg bg-white p-2.5">
                        <EnvelopeIcon className="w-5 h-5 text-bondi" />
                      </div>
                      <div>
                        <p className="font-medium text-iron">Email</p>
                        <p className="text-xs">{siteConfig.email}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-3 text-sm text-slate-blue hover:text-bondi transition-colors"
                    >
                      <div className="flex-shrink-0 rounded-lg bg-white p-2.5">
                        <PhoneIcon className="w-5 h-5 text-bondi" />
                      </div>
                      <div>
                        <p className="font-medium text-iron">Phone</p>
                        <p className="text-xs">{siteConfig.phone}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* WhatsApp / SMS placeholder */}
              <div className="rounded-2xl border border-dust bg-white p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-iron mb-4">
                  Quick Message
                </h3>
                <p className="text-sm text-slate-blue mb-4">
                  Prefer texting? WhatsApp and SMS support coming soon.
                </p>
                <div className="flex gap-3">
                  <button
                    disabled
                    className="flex-1 rounded-lg bg-dust/50 px-4 py-2.5 text-xs font-semibold text-slate-blue cursor-not-allowed"
                  >
                    WhatsApp (Soon)
                  </button>
                  <button
                    disabled
                    className="flex-1 rounded-lg bg-dust/50 px-4 py-2.5 text-xs font-semibold text-slate-blue cursor-not-allowed"
                  >
                    SMS (Soon)
                  </button>
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border border-bondi/20 bg-bondi/5 p-6 sm:p-8 text-center">
                <p className="text-3xl font-bold text-bondi font-[family-name:var(--font-heading)]">
                  24 Hours
                </p>
                <p className="mt-1 text-sm text-slate-blue">
                  Average response time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
