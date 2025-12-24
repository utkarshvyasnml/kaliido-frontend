"use client";

import { useMemo, useState, useEffect } from "react";
import FilterSidebar from "./FilterSidebar";
import SortDropdown from "./SortDropdown";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "newest"
  | "oldest";

type Props = {
  products: Product[];
};

const PAGE_SIZE = 12;

export default function ShopLayout({ products }: Props) {
  /* ================= STATE ================= */
  const [price, setPrice] = useState<[number, number]>([0, 2000]);
  const [sort, setSort] = useState<SortOption>("featured");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  /* MOBILE FILTER */
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  /* ================= PRICE HANDLER ================= */
  const handlePriceChange = (min: number, max: number) => {
    setPrice([min, max]);
  };

  /* ================= FILTER + SORT ================= */
  const filteredAndSorted = useMemo(() => {
    let list = products.filter(
      (p) => p.price >= price[0] && p.price <= price[1]
    );

    switch (sort) {
      case "price-low":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list = [...list].sort((a, b) => b.id - a.id);
        break;
      case "oldest":
        list = [...list].sort((a, b) => a.id - b.id);
        break;
      default:
        break;
    }

    return list;
  }, [products, price, sort]);

  /* ================= INFINITE SCROLL ================= */
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        setVisibleCount((prev) =>
          Math.min(prev + PAGE_SIZE, filteredAndSorted.length)
        );
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [filteredAndSorted.length]);

  return (
    <section className="px-4 md:px-6 py-8">
      {/* ================= TOP BAR ================= */}
      <div className="flex items-center justify-between mb-6">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* MOBILE FILTER BUTTON */}
          <button
            className="lg:hidden flex items-center gap-2"
            onClick={() => setMobileFilterOpen(true)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
            <span className="text-[13px] text-gray-600">Filters</span>
          </button>

          {/* DESKTOP LABEL */}
          <span className="hidden lg:inline text-[15px] font-semibold text-black">
            SHOP
          </span>
        </div>

        {/* SORT */}
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex gap-6">
        {/* DESKTOP FILTER SIDEBAR */}
        <div className="hidden lg:block shrink-0 sticky top-40">
          <FilterSidebar value={price} onChange={handlePriceChange} />
        </div>

        {/* PRODUCTS GRID */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-x-[4px]
            gap-y-[10px]
            flex-1
          "
        >
          {filteredAndSorted
            .slice(0, visibleCount)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

      {/* ================= LOADING ================= */}
      {visibleCount < filteredAndSorted.length && (
        <div className="text-center py-10 text-sm text-gray-400">
          Loading more products…
        </div>
      )}

      {/* ================= MOBILE FILTER DRAWER ================= */}
      {mobileFilterOpen && (
        <div className="lg:hidden">
          {/* BACKDROP */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileFilterOpen(false)}
          />

          {/* DRAWER */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl p-5">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Filter</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            {/* PRICE FILTER */}
            <FilterSidebar
              value={price}
              onChange={(min, max) => {
                handlePriceChange(min, max);
              }}
            />

            {/* APPLY */}
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="
                mt-6 w-full py-3 rounded-full
                bg-[#ff2e74] text-white font-semibold
              "
            >
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </section>
  );
}