"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type Image = {
  url: string
}

export default function ProductGallery({ images }: { images: Image[] }) {
  if (!images || images.length === 0) return null

  const [active, setActive] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  /* ===============================
     DISABLE SCROLL IN FULLSCREEN
  =============================== */
  useEffect(() => {
    document.body.style.overflow = fullscreen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [fullscreen])

  /* ===============================
     MOBILE SLIDE DETECT
  =============================== */
  const onScroll = () => {
    if (!sliderRef.current) return
    const index = Math.round(
      sliderRef.current.scrollLeft / sliderRef.current.clientWidth
    )
    setActive(index)
  }

  /* ===============================
     FULLSCREEN NAV
  =============================== */
  const prev = () =>
    setActive((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () =>
    setActive((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="w-full">

      {/* ================= MOBILE EDGE-TO-EDGE SLIDER ================= */}
      <div className="md:hidden -mx-4 mt-[-1px]">
        <div
          ref={sliderRef}
          onScroll={onScroll}
          className="
            flex overflow-x-auto snap-x snap-mandatory
            scrollbar-hide
          "
        >
          {images.map((img, index) => (
            <button
              key={img.url}
              onClick={() => {
                setActive(index)
                setFullscreen(true)
              }}
              className="min-w-full aspect-square snap-center"
            >
              <img
                src={img.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* 🔘 DOTS */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 py-3">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition ${
                  active === i
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= DESKTOP MAIN IMAGE ================= */}
      <div
        className="hidden md:block w-full aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in"
        onClick={() => setFullscreen(true)}
      >
        <img
          src={images[active].url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ================= DESKTOP THUMBNAILS ================= */}
      {images.length > 1 && (
        <div className="hidden md:grid grid-cols-2 gap-4 mt-4">
          {images.slice(1).map((img, index) => (
            <button
              key={img.url}
              onClick={() => setActive(index + 1)}
              className="aspect-square rounded-lg overflow-hidden border hover:border-black"
            >
              <img
                src={img.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* ================= FULLSCREEN VIEW ================= */}
      {fullscreen && (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 p-2"
          >
            <X size={28} />
          </button>

          {/* LEFT */}
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-4 p-2"
            >
              <ChevronLeft size={36} />
            </button>
          )}

          {/* IMAGE */}
          <img
            src={images[active].url}
            alt=""
            className="max-w-full max-h-full object-contain"
          />

          {/* RIGHT */}
          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-4 p-2"
            >
              <ChevronRight size={36} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}