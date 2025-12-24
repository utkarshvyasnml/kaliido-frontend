"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const banners = [
  { image: "/banners/banner-1.png", link: "/shop-all" },
  { image: "/banners/banner-1.png", link: "/earrings" },
  { image: "/banners/banner-1.png", link: "/bracelets" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full z-0">
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[80vh]">
        {banners.map((banner, index) => (
          <Link
            key={index}
            href={banner.link}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={banner.image}
              alt="Hero Banner"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </Link>
        ))}
      </div>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
