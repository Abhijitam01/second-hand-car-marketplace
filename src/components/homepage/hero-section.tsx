'use client'

import { useState } from 'react'
import { Search, ChevronDown, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const brands = [
  'All Brands',
  'Porsche',
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Lamborghini',
  'Ferrari',
  'Bentley',
  'Range Rover',
]

const categories = [
  { id: 'suv', label: 'SUV', icon: '🚙' },
  { id: 'sedan', label: 'Sedan', icon: '🚗' },
  { id: 'coupe', label: 'Coupe', icon: '🏎️' },
  { id: 'electric', label: 'Electric', icon: '⚡' },
  { id: 'luxury', label: 'Luxury', icon: '✨' },
]

export default function HeroBanner() {
  const [selectedBrand, setSelectedBrand] = useState('All Brands')
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false)

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury car interior"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Tagline */}
        <p className="text-white/70 text-sm md:text-base mb-4 tracking-wide">
          Find premium cars for sale near you
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Find Your Perfect Car
        </h1>

        {/* Search Tab */}
        <div className="inline-block mb-8">
          <div className="flex items-center gap-2 px-6 py-2 border-b-2 border-white text-white">
            <Search className="w-4 h-4" />
            <span className="text-sm font-medium">Search Brands</span>
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-card rounded-full p-2 flex items-center max-w-2xl mx-auto shadow-2xl">
          {/* Brand Dropdown */}
          <div className="relative flex-1">
            <button
              onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
              className="w-full flex items-center justify-between px-6 py-3 text-left text-foreground hover:bg-muted rounded-full transition-colors"
            >
              <span className="text-sm md:text-base">{selectedBrand}</span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${brandDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {brandDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-2xl shadow-xl border border-border py-2 z-50 max-h-64 overflow-y-auto">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => {
                      setSelectedBrand(brand)
                      setBrandDropdownOpen(false)
                    }}
                    className={`w-full px-6 py-3 text-left text-sm hover:bg-muted transition-colors ${
                      selectedBrand === brand ? 'bg-accent text-primary' : 'text-foreground'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <Link href="/product">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 font-medium flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </Link>
        </div>

        {/* Category Filters */}
        <div className="mt-12">
          <p className="text-white/60 text-sm mb-4">Or Browse Featured Model</p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/product?category=${cat.id}`}
                className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-all hover:scale-105"
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade - Theme Aware */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
