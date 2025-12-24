"use client"

import Link from "next/link"
import FooterButterfly from "@/components/FooterButterfly"

export default function Footer() {
  return (
    <footer className="bg-[#fff1f4] mt-0">

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* ===== MOBILE GRID ===== */}
        <div className="grid gap-10 md:hidden">

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm leading-6">
              <strong>Business Name:</strong><br />
              ESTFAZ FASHION PRIVATE LIMITED<br /><br />

              <strong>Brand:</strong> ESTAILO FASHION<br /><br />

              Plot No. 676, Pace City II,<br />
              Sector 37, Gurugram,<br />
              Haryana 122004<br /><br />

              <strong>Phone:</strong> 9350840880<br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@estailofashion.com"
                className="underline"
              >
                support@estailofashion.com
              </a><br /><br />

              GSTIN: 06DUWPK0643E1ZI
            </p>
          </div>

          {/* EXPLORE + POLICIES SIDE BY SIDE (MOBILE FIX ✅) */}
          <div className="grid grid-cols-2 gap-8">

            {/* EXPLORE */}
            <div>
              <h4 className="font-semibold text-[#ff2e74] mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/shop-all">Shop All</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/about">Estailo Story</Link></li>
                <li><Link href="/core-values">Core Values</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
              </ul>
            </div>

            {/* POLICIES */}
            <div>
              <h4 className="font-semibold text-[#ff2e74] mb-4">
                Policies & Help
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/shipping-policy">Shipping Policy</Link></li>
                <li><Link href="/return-exchange">Return / Exchange</Link></li>
                <li><Link href="/delete-account">Delete Account</Link></li>
                <li><Link href="/return-products">Return Products</Link></li>
              </ul>
            </div>

          </div>

          {/* BUTTERFLY */}
          <div className="flex justify-center pt-6">
            <FooterButterfly />
          </div>

        </div>

        {/* ===== DESKTOP GRID (UNCHANGED ✅) ===== */}
        <div className="hidden md:grid grid-cols-4 gap-10 items-start">

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm leading-6">
              <strong>Business Name:</strong><br />
              ESTFAZ FASHION PRIVATE LIMITED<br /><br />

              <strong>Brand:</strong> ESTAILO FASHION<br /><br />

              Plot No. 676, Pace City II,<br />
              Sector 37, Gurugram,<br />
              Haryana 122004<br /><br />

              <strong>Phone:</strong> 9350840880<br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@estailofashion.com"
                className="underline"
              >
                support@estailofashion.com
              </a><br /><br />

              GSTIN: 06DUWPK0643E1ZI
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="font-semibold text-[#ff2e74] mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop-all">Shop All</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/about">Estailo Story</Link></li>
              <li><Link href="/core-values">Core Values</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <h4 className="font-semibold text-[#ff2e74] mb-4">
              Policies & Help
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/shipping-policy">Shipping Policy</Link></li>
              <li><Link href="/return-exchange">Return / Exchange</Link></li>
              <li><Link href="/delete-account">Delete Account</Link></li>
              <li><Link href="/return-products">Return Products</Link></li>
            </ul>
          </div>

          {/* BUTTERFLY */}
          <div className="flex justify-center items-center">
            <FooterButterfly />
          </div>

        </div>

      </div>
    </footer>
  )
}