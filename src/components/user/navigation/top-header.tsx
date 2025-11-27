'use client'

import React, { useState } from 'react'
import { Search, Heart, ShoppingBag, X, User, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default function TopNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  const navLinks = [
    { label: 'Collection', href: '/product' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="w-full sticky top-0 z-50 border-b border-white/8 bg-[#020308]/95 backdrop-blur-xl">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
        {/* Left: Wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold text-white tracking-wide">Velaire</span>
          <span className="text-xl font-light text-white/60">House</span>
        </Link>

        {/* Center: Search */}
        <div className={`flex-1 max-w-md mx-12 relative transition-all duration-300 ${searchFocused ? 'max-w-lg' : ''}`}>
          <input
            type="text"
            placeholder="Search collection..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full border border-white/10 rounded-full bg-white/5 py-2.5 px-5 pl-11 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 focus:bg-white/8 transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 pl-6 border-l border-white/10">
            <Link href="/wishlist" className="text-white/60 hover:text-white transition-colors">
              <Heart className="w-5 h-5" />
            </Link>
            <Link href="/profile" className="text-white/60 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="relative text-white/60 hover:text-white transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-secondary text-secondary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-lg font-semibold text-white">Velaire</span>
          <span className="text-lg font-light text-white/60">House</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/wishlist" className="text-white/60">
            <Heart className="w-5 h-5" />
          </Link>
          <Link href="/cart" className="relative text-white/60">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
          
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-white/70">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] bg-[#050810] border-white/10">
              <SheetHeader>
                <SheetTitle className="text-white text-left">Menu</SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 px-2 text-white/80 hover:text-white border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/profile"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-2 text-white/80 hover:text-white border-b border-white/5 transition-colors"
                >
                  Profile
                </Link>
              </div>

              <div className="mt-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border border-white/10 rounded-lg bg-white/5 py-2.5 px-4 pl-10 text-sm text-white placeholder:text-white/40 focus:outline-none"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
