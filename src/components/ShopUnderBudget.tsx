import Link from "next/link"
import Butterfly from "@/components/Butterfly"
import PrimaryButton from "@/components/ui/PrimaryButton"

const budgets = [
  { label: "Under ₹99", price: 99 },
  { label: "Under ₹199", price: 199 },
  { label: "Under ₹299", price: 299 },
  { label: "Under ₹499", price: 499 },
]

export default function ShopUnderBudget() {
  return (
    <section className="bg-[#fff7fa] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Shop Under Budget
        </h2>

        {/* GRID */}
        <div className="
          grid
          grid-cols-2        /* 📱 mobile: 2 x 2 */
          md:grid-cols-4     /* 🖥 desktop: 4 */
          gap-4 md:gap-6
        ">
          {budgets.map((item) => (
            <Link
              key={item.price}
              href={`/shop-all?maxPrice=${item.price}`}
              className="group"
            >
              <div
                className="
                    relative
   relative
  aspect-square
  rounded-3xl
  bg-[radial-gradient(circle_at_top,#ffe8f1,#fff5f9)]
  shadow-[0_10px_28px_rgba(255,46,116,0.15)]
  flex flex-col
  items-center
  justify-center
  text-center
  overflow-visible
  transition
  hover:scale-[1.03]
"
              >
                {/* 🦋 Butterflies */}
                <Butterfly size={22} className="top-3 right-3 opacity-80" />
                <Butterfly size={18} className="bottom-3 left-3 opacity-60" />

                {/* TEXT */}
                <span className="text-xs tracking-widest text-gray-400">
                  UNDER
                </span>

                <span className="text-2xl md:text-3xl font-bold my-2">
                  ₹{item.price}
                </span>

                <span className="text-xs text-gray-400 mb-4">
                  STORE
                </span>

                {/* BUTTON */}
                <PrimaryButton>
                  SHOP NOW
                </PrimaryButton>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}