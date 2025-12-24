export default function TrustHighlights() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-5 md:py-8">
      <div
        className="
          max-w-6xl mx-auto px-3
          grid grid-cols-3
          gap-2 md:gap-6
          text-center
        "
      >
        {/* ITEM 1 */}
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl mb-1 animate-blink">📦</div>
          <p className="font-semibold text-[10px] md:text-base leading-tight">
            EASY RETURNS
          </p>
          <p className="text-[9px] md:text-sm text-gray-500">
            COD Available
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl mb-1 animate-blink-fast">💖</div>
          <p className="font-semibold text-[10px] md:text-base leading-tight">
            12L+ CUSTOMERS
          </p>
          <p className="text-[9px] md:text-sm text-gray-500">
            4.8 Google Rating
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl mb-1 animate-blink">📱</div>
          <p className="font-semibold text-[10px] md:text-base leading-tight">
            SUPPORT
          </p>
          <p className="text-[9px] md:text-sm text-gray-500">
            10:30am–5:30pm
          </p>
        </div>
      </div>
    </section>
  )
}