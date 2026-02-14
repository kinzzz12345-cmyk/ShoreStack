"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChatBubbleIcon } from "./Icons";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Hide on the start page since the user is already there
  if (pathname === "/start") return null;
  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 md:hidden">
      <Link
        href="/start"
        className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[14px] font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl active:scale-95"
      >
        <ChatBubbleIcon className="w-4 h-4" />
        Talk to Us
      </Link>
    </div>
  );
}
