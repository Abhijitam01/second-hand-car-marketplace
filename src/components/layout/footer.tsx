"use client";
import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card dark:bg-[#020309]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-lg font-semibold text-foreground">Velaire</span>
              <span className="text-lg font-light text-muted-foreground ml-1">House</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              The private reserve for limited-series icons.
            </p>
            <div className="flex gap-3 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaInstagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaTwitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Collection */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Collection</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/product" className="hover:text-foreground transition-colors">All Vehicles</Link></li>
              <li><Link href="/product?type=electric" className="hover:text-foreground transition-colors">Electric</Link></li>
              <li><Link href="/product?type=luxury" className="hover:text-foreground transition-colors">Luxury</Link></li>
              <li><Link href="/product?type=performance" className="hover:text-foreground transition-colors">Performance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-foreground transition-colors">Terms</Link></li>
              <li><Link href="/refund-policy" className="hover:text-foreground transition-colors">Refunds</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {currentYear} Velaire House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
