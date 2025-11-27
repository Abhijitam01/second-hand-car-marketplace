'use client'

import { Star } from 'lucide-react'
import React from 'react'

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
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-[#090b14]/70 p-4 text-white shadow-[0_15px_45px_rgba(5,6,12,0.65)] transition hover:-translate-y-1 hover:border-secondary/50">
      <div className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
        {product.discount}
      </div>
      <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white/80">
          <Star className="h-4 w-4 text-secondary fill-secondary" />
          {product.rating} ({product.ratingCount})
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-white/70">{product.subtitle}</p>
        <div className="flex items-center gap-2 text-sm text-white/70">
          ₹{(product.price / 100000).toFixed(2)} Lakh
          <span className="text-white/40 line-through text-xs">₹{(product.originalPrice / 100000).toFixed(2)} L</span>
        </div>
        {product.size && (
          <div className="flex flex-wrap gap-2 text-xs text-white/60">
            {product.size.map((size, i) => (
              <span key={i} className="rounded-full border border-white/15 px-3 py-1">
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground hover:bg-secondary/90">
          Reserve
        </button>
        <button className="flex-1 rounded-full border border-white/20 px-4 py-2 text-xs text-white hover:bg-white/10">
          Details
        </button>
      </div>
    </div>
  )
}

export default ProductCard
