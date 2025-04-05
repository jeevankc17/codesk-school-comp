"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#0070f3] text-white px-4 py-3 text-center text-sm font-medium">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-1.5">
        <span>✨</span>
        <span>Keep learning and keep growing with codesklab</span>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 rounded-lg p-1 hover:bg-blue-600"
          aria-label="Dismiss banner"
        >
          <X />
        </button>
      </div>
    </div>
  );
}
