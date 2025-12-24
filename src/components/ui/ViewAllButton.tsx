"use client"

import Link from "next/link"

type ViewAllButtonProps = {
  href: string
}

export default function ViewAllButton({ href }: ViewAllButtonProps) {
  return (
    <Link
      href={href}
      className="
        text-[#ff2e74]
        text-sm md:text-base
        font-semibold
        relative
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-full
        after:bg-[#ff2e74]
        after:scale-x-0 hover:after:scale-x-100
        after:origin-left
        after:transition-transform
        cursor-pointer
        whitespace-nowrap
      "
    >
      View all
    </Link>
  )
}