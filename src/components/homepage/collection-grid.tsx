'use client'

import { products } from '@/data/vehicle-product-data'
import { Button } from '@/components/ui/button'
import { Heart, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function CollectionGrid() {
  const displayProducts = products.slice(0, 6)
  const featured = displayProducts[0]
  const rest = displayProducts.slice(1, 5)

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-white">Featured Collection</h2>
          <p className="text-white/50 mt-1">Curated selections from our vault</p>
        </div>
        <Link href="/product">
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5 gap-2">
            View All
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {/* Featured Large Card - spans 2 cols and 2 rows */}
        <Link
          href={`/product/${featured.id}`}
          className="group md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]"
        >
          <img
            src={featured.image}
            alt={featured.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Wishlist */}
          <button 
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white/80 hover:text-white hover:bg-white/20 transition-all"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <Heart className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium mb-3">
              Featured
            </span>
            <h3 className="text-xl font-semibold text-white mb-1">{featured.name}</h3>
            <p className="text-white/60 text-sm mb-3">{featured.subtitle}</p>
            <div className="flex items-center gap-3">
              <span className="text-white font-semibold text-lg">
                ₹{(featured.price / 100000).toFixed(1)}L
              </span>
              <span className="text-white/40 text-sm line-through">
                ₹{(featured.originalPrice / 100000).toFixed(1)}L
              </span>
              <span className="text-secondary text-sm">{featured.discount}</span>
            </div>
          </div>
        </Link>

        {/* Regular Cards */}
        {rest.map((product, index) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] ${
              index === 1 ? 'lg:col-span-2' : ''
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            
            {/* Wishlist */}
            <button 
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            >
              <Heart className="w-4 h-4" />
            </button>

            {/* Rating */}
            <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs">
              <span className="text-secondary">★</span>
              <span>{product.rating}</span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-medium text-white text-sm line-clamp-1 mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">₹{(product.price / 100000).toFixed(1)}L</span>
                <span className="text-xs text-secondary">{product.discount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[
          { value: '210+', label: 'Point Inspection' },
          { value: '24mo', label: 'Vault Coverage' },
          { value: '< 36h', label: 'Preview Time' },
          { value: '12', label: 'Global Studios' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center py-4 px-3 rounded-2xl bg-white/[0.03] border border-white/5"
          >
            <p className="text-xl font-semibold text-white">{stat.value}</p>
            <p className="text-xs text-white/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
