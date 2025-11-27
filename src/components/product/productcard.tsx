'use client'

import { Star, Heart } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export interface IProduct {
  id: number
  name: string
  subtitle: string
  price: number
  originalPrice: number
  discount: string
  rating: number
  ratingCount: string
  image: string
  size?: string[]
}

interface ProductCardProps {
  product: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`
    }
    return `₹${(price / 100000).toFixed(2)} L`
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* Wishlist Button */}
          <button 
            className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <Heart className="w-4 h-4" />
          </button>

          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-3 left-3 rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
              {product.discount}
            </div>
          )}

          {/* Rating */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-white">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span>{product.rating}</span>
            <span className="text-white/60">({product.ratingCount})</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
          <p className="text-sm text-white/60 line-clamp-1">{product.subtitle}</p>
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{formatPrice(product.price)}</span>
            <span className="text-white/40 line-through text-sm">{formatPrice(product.originalPrice)}</span>
          </div>

          {product.size && (
            <div className="flex flex-wrap gap-2">
              {product.size.map((size, i) => (
                <span key={i} className="text-xs rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/60">
                  {size}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
