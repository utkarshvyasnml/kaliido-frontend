"use client";

import { useEffect, useRef, useState } from "react";

type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "newest"
  | "oldest";

type Props = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function SortDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const labelMap: Record<SortOption, string> = {
    featured: "Featured",
    "price-low": "Price, low to high",
    "price-high": "Price, high to low",
    newest: "Date, new to old",
    oldest: "Date, old to new",
  };

  return (
    <div className="relative" ref={ref}>
      {/* BUTTON */}
      <button
        onClick={() => setOpen((s) => !s)}
        className="border rounded-full px-6 py-2 text-sm flex items-center gap-2 bg-white"
      >
        {labelMap[value]}
        <span className={`transition ${open ? "rotate-180" : ""}`}>+</span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border z-50 overflow-hidden">
          {(
            Object.keys(labelMap) as SortOption[]
          ).map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-pink-50 ${
                value === option ? "font-semibold text-[#ff2e74]" : ""
              }`}
            >
              {labelMap[option]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}