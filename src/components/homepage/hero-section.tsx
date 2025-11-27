'use client'

import { useMemo } from 'react'
import { ArrowRight, Play, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products } from '@/data/vehicle-product-data'
import Link from 'next/link'

export default function HeroBanner() {
  const featured = useMemo(() => products.slice(0, 3), [])

  return (
    <section className="w-full">
      {/* Bento Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-[180px] lg:auto-rows-[200px]">
        
        {/* Main Hero - Large Card */}
        <div className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/10 via-transparent to-primary/5 p-8 lg:p-10 flex flex-col justify-between">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              New Arrivals
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-lg">
              The private reserve for iconic machines
            </h1>
            
            <p className="text-white/50 mt-4 max-w-md text-base lg:text-lg">
              Museum-grade vehicles with turn-key ownership programs worldwide.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-3 mt-6">
            <Link href="/product">
              <Button className="rounded-full bg-white text-[#020308] hover:bg-white/90 px-6 py-5 font-medium gap-2">
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="ghost" className="rounded-full text-white/70 hover:text-white hover:bg-white/10 px-5 py-5 gap-2">
              <Play className="w-4 h-4" />
              Watch Film
            </Button>
          </div>
        </div>

        {/* Featured Vehicle Card */}
        <Link 
          href={`/product/${featured[0].id}`}
          className="relative rounded-3xl overflow-hidden group cursor-pointer"
        >
          <img
            src={featured[0].image}
            alt={featured[0].name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="text-xs text-secondary font-medium">Featured</span>
            <h3 className="text-white font-medium mt-1 line-clamp-1">{featured[0].name}</h3>
            <p className="text-white/60 text-sm">₹{(featured[0].price / 100000).toFixed(1)}L</p>
          </div>
        </Link>

        {/* Stats Card */}
        <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-white font-semibold">210+ Points</p>
              <p className="text-white/50 text-xs">Forensic Inspection</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-white font-semibold">&lt; 36 Hours</p>
              <p className="text-white/50 text-xs">Global Preview</p>
            </div>
          </div>
        </div>

        {/* Second Vehicle */}
        <Link 
          href={`/product/${featured[1].id}`}
          className="relative rounded-3xl overflow-hidden group cursor-pointer"
        >
          <img
            src={featured[1].image}
            alt={featured[1].name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-white font-medium line-clamp-1">{featured[1].name}</h3>
            <p className="text-white/60 text-sm">₹{(featured[1].price / 100000).toFixed(1)}L</p>
          </div>
        </Link>

        {/* Third Vehicle */}
        <Link 
          href={`/product/${featured[2].id}`}
          className="relative rounded-3xl overflow-hidden group cursor-pointer"
        >
          <img
            src={featured[2].image}
            alt={featured[2].name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-white font-medium line-clamp-1">{featured[2].name}</h3>
            <p className="text-white/60 text-sm">₹{(featured[2].price / 100000).toFixed(1)}L</p>
          </div>
        </Link>
      </div>
    </section>
  )
}
