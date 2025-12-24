"use client"

import { ButtonHTMLAttributes } from "react"

type PrimaryButtonProps = {
  children: React.ReactNode
  full?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function PrimaryButton({
  children,
  full = false,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`
        ${full ? "w-full" : "inline-flex"}
        items-center justify-center
        whitespace-nowrap          /* ✅ never wrap text */
        px-6 md:px-12              /* ✅ mobile compact, desktop wide */
        py-2.5
        rounded-full
        text-white
        text-[13px] md:text-[14px]
        font-semibold
        bg-[#ff2e74]
        hover:bg-[#e01b5d]
        active:scale-95
        transition-all duration-200
        shadow-[0_2px_0_#b61f52]   /* 3D bottom shadow */
        hover:shadow-[0_3px_0_#b61f52]
        ${className}
      `}
    >
      {children}
    </button>
  )
}