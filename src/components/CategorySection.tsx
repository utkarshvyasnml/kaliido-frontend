"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Earrings",
    image: "/categories/earrings.jpg",
    href: "/earrings",
  },
  {
    title: "Rings",
    image: "/categories/rings.jpg",
    href: "/rings",
  },
  {
    title: "Necklaces",
    image: "/categories/necklaces.webp",
    href: "/necklaces",
  },
  {
    title: "Bracelets",
    image: "/categories/bracelets.webp",
    href: "/bracelets",
  },
];

export default function CategorySection() {
  return (
    <section
      className="
        w-full
        pt-6 md:pt-10
        pb-10 md:pb-14
        animate-pageEnter
      "
    >
      <div className="max-w-7xl mx-auto pl-4 pr-0 md:px-4">

        {/* HEADING */}
        <h2
          className="
            text-center
            text-xl md:text-3xl
            font-semibold
            mb-5 md:mb-8
          "
        >
          What Would You Like To Shop Today ?
        </h2>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:grid grid-cols-4 gap-10">
          {categories.map((cat, index) => (
            <Link key={cat.title} href={cat.href}>
              <div
                className="
                  group cursor-pointer
                  animate-fadeUp
                "
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {/* IMAGE */}
                <div
                  className="
                    relative aspect-square
                    rounded-[26px]
                    border-2 border-pink-500
                    overflow-hidden
                    transition-all duration-500
                    group-hover:shadow-xl
                  "
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* TITLE */}
                <p className="text-center mt-3 font-medium">
                  {cat.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <div
            className="
              flex gap-4
              overflow-x-auto
              no-scrollbar
              scroll-smooth
              pb-2
              pr-4
            "
          >
            {categories.map((cat, index) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="min-w-[28%]"
              >
                <div
                  className="animate-fadeUp"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative aspect-square
                      rounded-[22px]
                      border-2 border-pink-500
                      overflow-hidden
                      shadow-sm
                    "
                  >
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* TITLE */}
                  <p className="text-center mt-2 text-sm font-medium">
                    {cat.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
