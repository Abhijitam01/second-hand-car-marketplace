'use client'

import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products } from '@/data/vehicle-product-data'
import Link from 'next/link'

export default function HeroBanner() {
  const featuredVehicle = useMemo(() => products[0], [])

  return (
    <section className="relative w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-primary/5 rounded-3xl" />
      
      <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-16 px-6 lg:px-10 rounded-3xl border border-white/8 bg-white/2">
        {/* Left: Content */}
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">
            New arrivals
          </p>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            The private reserve for limited-series icons
          </h1>
          
          <p className="text-white/60 text-base lg:text-lg max-w-lg">
            Velaire House sources museum-grade vehicles and delivers turn-key ownership programs worldwide.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/product">
              <Button className="rounded-full bg-white text-[#020308] hover:bg-white/90 px-6 py-5 font-medium">
                Explore Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Featured Vehicle */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-[4/3] relative">
              <img
                src={featuredVehicle.image}
                alt={featuredVehicle.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Vehicle info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Featured</p>
                <h3 className="text-lg font-semibold text-white mb-1">{featuredVehicle.name}</h3>
                <p className="text-sm text-white/70">{featuredVehicle.subtitle}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-white font-semibold">
                    ₹{(featuredVehicle.price / 100000).toFixed(1)}L
                  </span>
                  <span className="text-xs text-secondary px-2 py-0.5 rounded-full bg-secondary/10">
                    {featuredVehicle.discount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
