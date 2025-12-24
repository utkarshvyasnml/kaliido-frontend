export default function FooterLogoStrip() {
  return (
    <section
      className="
        w-full
        bg-[#f5dbe2]
        py-6 md:py-3   /* 👈 vertical space reduced */
        flex items-center justify-center
      "
    >
      <img
        src="/images/footer-logo.png"
        alt="Kaliido"
        className="
          h-24 md:h-28     /* 👈 logo size increased */
          object-contain
        "
      />
    </section>
  )
}