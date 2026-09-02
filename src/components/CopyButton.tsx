"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          },
          () => {},
        );
      }}
      className="slab tactile px-3 py-1 text-sm font-medium text-arcane hover:border-arcane"
      aria-label={`Copy code ${value}`}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
