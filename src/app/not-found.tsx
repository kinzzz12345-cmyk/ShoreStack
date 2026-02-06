import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-bondi mb-3">
        404
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-iron font-[family-name:var(--font-heading)]">
        Page Not Found
      </h1>
      <p className="mt-3 text-slate-blue max-w-md">
        The page you are looking for does not exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-bondi px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-bondi-dark"
      >
        Back to Home
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </section>
  );
}
