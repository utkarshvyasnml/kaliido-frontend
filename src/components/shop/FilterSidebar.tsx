"use client";

import { useState, useEffect } from "react";

type Props = {
  value: [number, number];
  onChange: (min: number, max: number) => void;
};

const MIN = 0;
const MAX = 2000;

export default function FilterSidebar({ value, onChange }: Props) {
  const [min, setMin] = useState(value[0]);
  const [max, setMax] = useState(value[1]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (min > max) return;
    onChange(min, max);
  }, [min, max, onChange]);

  return (
    <aside
      className="
        w-full md:w-[280px]
        md:shrink-0
        md:sticky md:top-44
        self-start
        flex justify-center md:block
      "
    >
      {/* PRICE BOX */}
      <div className="w-[280px] border-2 border-[#ff2e74] rounded-2xl p-5 bg-white relative">
        {/* Header */}
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h4 className="font-semibold text-black">Price</h4>

          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
            {open ? "-" : "+"}
          </div>
        </div>

        {open && (
          <>
            {/* SLIDER */}
            <div className="relative mt-6">
              {/* Track */}
              <div className="h-[4px] bg-gray-200 rounded-full" />

              {/* Active Range */}
              <div
                className="absolute top-0 h-[4px] bg-[#ff2e74] rounded-full"
                style={{
                  left: `${(min / MAX) * 100}%`,
                  width: `${((max - min) / MAX) * 100}%`,
                }}
              />

              {/* MIN */}
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={min}
                onChange={(e) =>
                  setMin(Math.min(Number(e.target.value), max - 1))
                }
                className="price-range price-range--min"
              />

              {/* MAX */}
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={max}
                onChange={(e) =>
                  setMax(Math.max(Number(e.target.value), min + 1))
                }
                className="price-range price-range--max"
              />
            </div>

            {/* INPUTS */}
            <div className="flex items-center gap-4 mt-6 justify-center">
              <div className="flex items-center gap-1 border rounded-xl px-3 py-2 w-[120px]">
                <span className="text-gray-500 text-sm">₹</span>
                <input
                  type="number"
                  value={min}
                  onChange={(e) =>
                    setMin(Math.min(Number(e.target.value) || 0, max - 1))
                  }
                  className="w-full outline-none text-sm"
                />
              </div>

              <span className="text-gray-400 text-sm">to</span>

              <div className="flex items-center gap-1 border rounded-xl px-3 py-2 w-[120px]">
                <span className="text-gray-500 text-sm">₹</span>
                <input
                  type="number"
                  value={max}
                  onChange={(e) =>
                    setMax(Math.max(Number(e.target.value) || 0, min + 1))
                  }
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}