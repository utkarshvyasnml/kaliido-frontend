"use client"

import { dummyReviews } from "@/data/dummyReviews"

export default function ReviewsSection() {
  const data = dummyReviews // 👈 future me API se replace hoga

  return (
    <section className="bg-[#fff7f9] py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#ff2e74] mb-6">
          What our customers say
        </h2>

        {/* GOOGLE SUMMARY */}
        <div className="bg-[#fdecef] rounded-xl px-5 py-4 flex items-center gap-4 mb-8">
          <span className="text-xl font-bold">Google</span>
          <span className="text-lg font-semibold">
            {data.rating}
          </span>
          <span className="text-yellow-400">
            ★★★★★
          </span>
          <span className="text-sm text-gray-500">
            {data.totalReviews.toLocaleString()} reviews
          </span>
        </div>

        {/* REVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 shadow-sm"
            >
              <div className="font-semibold text-sm">{r.name}</div>
              <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
              <p className="text-sm text-gray-600">{r.text}</p>
              <p className="text-xs text-gray-400 mt-2">{r.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}