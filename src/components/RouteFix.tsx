"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteFix() {
  const pathname = usePathname();

  useEffect(() => {
    // 🔥 FORCE BROWSER TO RE-CALCULATE CLICKS
    // This fixes dead links issue in App Router
    document.body.style.pointerEvents = "none";

    const id = requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });

    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}