"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteClickReset() {
  const pathname = usePathname();

  useEffect(() => {
    // 1️⃣ Force body clickable
    document.body.style.pointerEvents = "auto";
    document.body.style.overflow = "auto";

    // 2️⃣ Kill any full-screen invisible blockers
    const killers = document.querySelectorAll(
      '[style*="position: fixed"], [class*="fixed"]'
    );

    killers.forEach((el) => {
      const htmlEl = el as HTMLElement;

      // Only remove if element is invisible overlay
      const rect = htmlEl.getBoundingClientRect();
      const isFullScreen =
        rect.width >= window.innerWidth - 5 &&
        rect.height >= window.innerHeight - 5;

      const isTransparent =
        window.getComputedStyle(htmlEl).opacity === "0";

      if (isFullScreen && isTransparent) {
        htmlEl.style.pointerEvents = "none";
      }
    });
  }, [pathname]);

  return null;
}