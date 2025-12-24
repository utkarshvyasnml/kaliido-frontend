"use client"

import { usePathname } from "next/navigation"
import FooterLogoStrip from "@/components/FooterLogoStrip"

export default function HomeOnlyFooterStrip() {
  const pathname = usePathname()

  
  if (pathname !== "/") return null

  return <FooterLogoStrip />
}