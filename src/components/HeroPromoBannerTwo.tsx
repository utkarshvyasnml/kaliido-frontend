import Image from "next/image"

export default function HeroPromoBannerTwo() {
  return (
    <section className="px-4 md:px-8 py-6 md:py-10">
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">

        {/* ================= DESKTOP IMAGE ================= */}
        <div className="hidden md:block relative w-full aspect-[16/5]">
          <Image
            src="/banners/promo-2.webp"
            alt="Kaliido Promo Desktop"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ================= MOBILE IMAGE ================= */}
        <div className="block md:hidden relative w-full aspect-[4/3]">
          <Image
            src="/banners/mobilepromo-2.jpeg"
            alt="Kaliido Promo Mobile"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Optional soft overlay */}
        <div className="absolute inset-0 bg-black/5" />

      </div>
    </section>
  )
}