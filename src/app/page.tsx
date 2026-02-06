import Link from "next/link";
import Image from "next/image";
import { services, portfolioItems, testimonials, siteConfig } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-dust/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-bondi mb-4">
                Full Stack Engineering &amp; Design
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-iron font-[family-name:var(--font-heading)]">
                Clean Design.
                <br />
                Powerful Systems.
                <br />
                <span className="text-bondi">One Partner.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-blue max-w-2xl">
                20 years of engineering experience building enterprise SaaS platforms,
                modern web applications, and scalable digital systems. From concept to
                launch, I deliver the design and technology your business needs to grow.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-bondi px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bondi-dark"
                >
                  Request a Free Consultation
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-lg border border-iron/20 bg-white px-7 py-3.5 text-sm font-semibold text-iron transition-colors hover:bg-dust/50"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            {/* Hero illustration */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/hero-illustration.svg"
                alt="ShoreStack — websites and applications on desktop and mobile"
                width={560}
                height={470}
                priority
              />
            </div>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-bondi/5 to-transparent" />
      </section>

      {/* ── Mobile First Message ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-blue p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-bondi mb-3">
                  Why Mobile First Matters
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight">
                  Most people now visit websites on their phone.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-dust/90">
                  If a website is not mobile friendly or if it is hard to find services
                  or features, users leave quickly and choose another business. My work
                  focuses on simple structure, fast performance, and easy navigation on
                  mobile first.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Mobile first responsive design",
                  "Fast loading performance",
                  "Simple and clear navigation",
                  "Easy to find services and features",
                  "Built for real users, not just desktop demos",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 rounded-full bg-bondi/20 p-1">
                      <CheckIcon className="w-4 h-4 text-bondi" />
                    </div>
                    <span className="text-sm text-dust/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="bg-dust/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What I Do"
            title="Services Built for Growth"
            description="From custom websites to enterprise SaaS platforms, I deliver solutions that help your business perform better and scale with confidence."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-bondi hover:text-bondi-dark transition-colors"
            >
              View all services
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Recent Work"
            title="Projects That Deliver Results"
            description="A selection of websites and systems built with clean design and reliable technology."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.slice(0, 3).map((item) => (
              <PortfolioCard key={item.title} item={item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-bondi hover:text-bondi-dark transition-colors"
            >
              View full portfolio
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-dust/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Client Feedback"
            title="What Clients Are Saying"
            description="Real results from businesses that invested in better design and stronger systems."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bondi py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Get a free consultation and see how clean design and powerful systems
            can transform your business. No pressure, no obligations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-bondi transition-colors hover:bg-dust"
            >
              Request a Free Consultation
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-lg bg-iron px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-blue"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
