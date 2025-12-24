"use client";

export default function TopBar() {
  return (
    <div className="w-full bg-secondary overflow-hidden">
      <div
        className="
          whitespace-nowrap
          animate-marquee
          font-body
          font-Medium
          text-[16px]
          leading-[26px]
          text-textDark

          /* Desktop */
          py-2

          /* Mobile – slimmer */
          max-md:py-1
        "
      >
        <span className="mx-8">
          Free Shipping above Rs 499
        </span>
        <span className="mx-8">
          COD Available
        </span>
        <span className="mx-8">
          Free Jewellery Organiser above Rs 1299
        </span>
      </div>
    </div>
  );
}
