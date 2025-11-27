'use client'

import { products } from '@/data/vehicle-product-data'
import { Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CollectionGrid() {
  const displayProducts = products.slice(0, 6)
  const featured = displayProducts[0]
  const rest = displayProducts.slice(1, 5)

  return (
    <section className="w-full py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white">Featured Collection</h2>
          <p className="text-white/50 mt-2">Handpicked luxury vehicles from our vault</p>
        </div>
        <Link 
          href="/product"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Featured Large Card */}
        <Link
          href={`/product/${featured.id}`}
          className="group md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px]"
        >
          <img
            src={featured.image}
            alt={featured.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          {/* Wishlist Button */}
          <button 
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <Heart className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
            Featured
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400">★</span>
              <span className="text-white/80 text-sm">{featured.rating} ({featured.ratingCount} reviews)</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{featured.name}</h3>
            <p className="text-white/60 mb-4">{featured.subtitle}</p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-white">
                ₹{(featured.price / 10000000).toFixed(2)} Cr
              </span>
              <span className="text-white/40 line-through">
                ₹{(featured.originalPrice / 10000000).toFixed(2)} Cr
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
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
            className={`group relative rounded-2xl overflow-hidden min-h-[240px] ${
              index === 1 ? 'lg:col-span-2' : ''
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Wishlist */}
            <button 
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            >
              <Heart className="w-4 h-4" />
            </button>

            {/* Rating */}
            <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs">
              <span className="text-yellow-400">★</span>
              <span>{product.rating}</span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-semibold text-white text-sm md:text-base line-clamp-1 mb-1">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">₹{(product.price / 10000000).toFixed(2)} Cr</span>
                <span className="text-xs text-green-400">{product.discount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          { value: '500+', label: 'Premium Cars', icon: '🚗' },
          { value: '50+', label: 'Luxury Brands', icon: '⭐' },
          { value: '10K+', label: 'Happy Customers', icon: '😊' },
          { value: '24/7', label: 'Support', icon: '📞' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center py-6 px-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <span className="text-2xl mb-2 block">{stat.icon}</span>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-white/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
