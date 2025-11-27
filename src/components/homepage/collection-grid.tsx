'use client'

import { products } from '@/data/vehicle-product-data'
import { Heart, ArrowRight, Star, Car, Award, Users, Headphones, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CollectionGrid() {
  const displayProducts = products.slice(0, 6)
  const featured = displayProducts[0]
  const rest = displayProducts.slice(1, 5)
  const [wishlist, setWishlist] = useState<Set<number>>(new Set())

  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setWishlist(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const stats = [
    { value: '500+', label: 'Premium Cars', icon: Car, gradient: 'from-blue-400 to-indigo-600', glow: 'rgba(99,102,241,0.3)' },
    { value: '50+', label: 'Luxury Brands', icon: Award, gradient: 'from-amber-400 to-orange-600', glow: 'rgba(251,146,60,0.3)' },
    { value: '10K+', label: 'Happy Customers', icon: Users, gradient: 'from-emerald-400 to-teal-600', glow: 'rgba(20,184,166,0.3)' },
    { value: '24/7', label: 'Support', icon: Headphones, gradient: 'from-rose-400 to-pink-600', glow: 'rgba(244,63,94,0.3)' },
  ]

  return (
    <section className="w-full py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 dark:bg-white/[0.06] border border-border/50 dark:border-white/[0.08] mb-3">
            <Sparkles className="w-4 h-4 text-primary dark:text-[#7fe8d7]" />
            <span className="text-sm text-muted-foreground tracking-wide">Curated Selection</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Collection</h2>
          <p className="text-muted-foreground/70 mt-2">Handpicked luxury vehicles from our vault</p>
        </div>
        <Link 
          href="/product"
          className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-muted/50 dark:bg-white/[0.06] border border-border/50 dark:border-white/[0.08] text-muted-foreground hover:text-foreground hover:bg-muted dark:hover:bg-white/10 hover:border-border dark:hover:border-white/15 transition-all duration-300"
        >
          <span className="text-sm font-medium">View All</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Featured Large Card */}
        <Link
          href={`/product/${featured.id}`}
          className="group md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px] border border-border/30 dark:border-white/[0.06]"
        >
          <img
            src={featured.image}
            alt={featured.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          
          {/* Wishlist Button */}
          <button 
            className={`absolute top-5 right-5 p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 
              ${wishlist.has(featured.id) 
                ? 'bg-rose-500/20 border-rose-400/30 shadow-[0_0_25px_rgba(244,63,94,0.3)]' 
                : 'bg-white/[0.08] border-white/[0.12] hover:bg-white/15 hover:border-white/25'
              } 
              opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}
            onClick={(e) => toggleWishlist(featured.id, e)}
          >
            <Heart className={`w-5 h-5 transition-all duration-300 ${wishlist.has(featured.id) ? 'text-rose-400 fill-rose-400' : 'text-white/80'}`} />
          </button>

          {/* Badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/90 to-primary/70 dark:from-[#7fe8d7]/90 dark:to-teal-500/90 backdrop-blur-sm text-primary-foreground dark:text-white text-sm font-semibold shadow-lg border border-primary/30 dark:border-[#7fe8d7]/30">
            <Sparkles className="w-4 h-4" />
            Featured
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-xl border border-white/[0.08]">
                <div className="w-4 h-4 rounded-md bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Star className="h-2.5 w-2.5 text-white fill-white" />
                </div>
                <span className="text-white/90 text-sm font-medium">{featured.rating}</span>
                <span className="text-white/50 text-sm">({featured.ratingCount})</span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{featured.name}</h3>
            <p className="text-white/50 mb-5">{featured.subtitle}</p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-primary dark:text-[#f4d7b3]">
                ₹{(featured.price / 10000000).toFixed(2)} Cr
              </span>
              <span className="text-white/30 line-through">
                ₹{(featured.originalPrice / 10000000).toFixed(2)} Cr
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                <Sparkles className="w-3 h-3" />
                {featured.discount}
              </span>
            </div>
          </div>
        </Link>

        {/* Regular Cards */}
        {rest.map((product, index) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className={`group relative rounded-2xl overflow-hidden min-h-[240px] border border-border/30 dark:border-white/[0.06] ${
              index === 1 ? 'lg:col-span-2' : ''
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            
            {/* Wishlist */}
            <button 
              className={`absolute top-3 right-3 p-2.5 rounded-xl backdrop-blur-xl border transition-all duration-300 
                ${wishlist.has(product.id) 
                  ? 'bg-rose-500/20 border-rose-400/30 shadow-[0_0_20px_rgba(244,63,94,0.3)]' 
                  : 'bg-white/[0.08] border-white/[0.12] hover:bg-white/15'
                } 
                opacity-0 group-hover:opacity-100`}
              onClick={(e) => toggleWishlist(product.id, e)}
            >
              <Heart className={`w-4 h-4 transition-all ${wishlist.has(product.id) ? 'text-rose-400 fill-rose-400' : 'text-white/80'}`} />
            </button>

            {/* Rating */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/40 backdrop-blur-xl border border-white/[0.08] text-xs">
              <div className="w-4 h-4 rounded-md bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Star className="h-2.5 w-2.5 text-white fill-white" />
              </div>
              <span className="text-white/90 font-medium">{product.rating}</span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-semibold text-white text-sm md:text-base line-clamp-1 mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-primary dark:text-[#f4d7b3]">₹{(product.price / 10000000).toFixed(2)} Cr</span>
                <span className="text-xs text-emerald-400 font-medium px-2 py-1 rounded-md bg-emerald-500/10">{product.discount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {stats.map((stat) => {
          const IconComponent = stat.icon
          return (
            <div
              key={stat.label}
              className="group text-center py-7 px-4 rounded-2xl bg-muted/50 dark:bg-gradient-to-b dark:from-white/[0.06] dark:to-white/[0.02] border border-border/50 dark:border-white/[0.08] hover:border-border dark:hover:border-white/15 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative inline-block mb-4">
                <div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  style={{ boxShadow: `0 8px 25px ${stat.glow}` }}
                >
                  <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity`} />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground/70 mt-1">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
