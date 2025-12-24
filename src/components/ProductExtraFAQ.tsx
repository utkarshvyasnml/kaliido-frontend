"use client"

import { useState } from "react"

const faqs = [
  {
    q: "How should I store artificial jewellery?",
    a: "Store your jewellery in a dry place, preferably in individual pouches to avoid scratches and tarnishing.",
  },
  {
    q: "Can I wear it daily?",
    a: "Yes, our jewellery is anti-tarnish and skin-safe, perfect for daily wear with basic care.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach us via WhatsApp or email between 10:30am–5:30pm.",
  },
]

export default function ProductExtraFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      className="
        w-screen
        relative
        left-1/2 right-1/2
        -ml-[50vw] -mr-[50vw]
        bg-[#fdebef]
        py-16          /* ⬅️ vertical space reduced */
      "
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADING */}
        <h2
          className="
            text-center
            mb-10         /* ⬅️ less gap below heading */
            text-[36px]
            leading-[43px]
            font-light
            text-[#1a1a1a]
          "
          style={{ fontFamily: "Helix-Medium" }}
        >
          Care & Support
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((item, i) => {
            const isOpen = open === i

            return (
              <div
                key={i}
                className="
                  rounded-[24px]                /* ⬅️ slimmer */
                  border-2 border-pink-400
                  bg-[#fdebef]
                  px-6 py-4                     /* ⬅️ less padding */
                  shadow-[0_10px_0_#ffb7d0]
                "
              >
                {/* HEADER */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span
                    className="
                      text-[14px]
                      leading-[22px]
                      font-light
                      text-[#1a1a1a]
                    "
                    style={{ fontFamily: "WorkSans-Medium" }}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`
                      w-8 h-8
                      rounded-full
                      bg-gray-200
                      flex items-center justify-center
                      transition-transform
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    ⌄
                  </span>
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-[22px]
                      text-[#1a1a1a]
                    "
                    style={{ fontFamily: "WorkSans-Medium" }}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}