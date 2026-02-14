import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-[16px] text-center">
      <p className="text-[14px] font-semibold uppercase tracking-wider text-accent mb-[8px]">
        404
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-primary">
        Page Not Found
      </h1>
      <p className="mt-[8px] text-text-light">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-[28px] inline-flex items-center gap-2 rounded-lg bg-accent px-[28px] py-[12px] text-[15px] font-semibold text-white transition-shadow duration-[120ms] hover:shadow-lg hover:shadow-accent/20"
      >
        Back to Home
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </section>
  );
}
