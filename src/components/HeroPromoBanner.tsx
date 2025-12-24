import Image from "next/image"
import Link from "next/link"

export default function HeroPromoBanner() {
  return (
    <section className="px-4 md:px-8 py-6 md:py-10">
      <Link
        href="/shop-all"
        className="
          block relative
          w-full
          rounded-2xl
          overflow-hidden
          group
        "
      >
        {/* DESKTOP */}
        <div className="hidden md:block aspect-[16/6]">
          <Image
            src="/banners/promo-banner.png"
            alt="Kaliido Promo Banner"
            fill
            priority
            className="
              object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />
        </div>

        {/* MOBILE (almost square ad) */}
        <div className="block md:hidden aspect-square">
          <Image
            src="/banners/promo-banner.png"
            alt="Kaliido Promo Banner"
            fill
            priority
            className="
              object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />
        </div>

        {/* SOFT LUXURY OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />

        {/* OPTIONAL BADGE */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
          <span
            className="
              inline-block
              bg-white/90
              text-black
              text-xs md:text-sm
              font-semibold
              px-4 py-1.5
              rounded-full
              shadow
            "
          >
            Limited Time Offer
          </span>
        </div>
      </Link>
    </section>
  )
}