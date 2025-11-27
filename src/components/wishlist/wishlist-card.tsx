'use client'

import { HeartIcon, Star } from 'lucide-react'
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

export const WishlistCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative bg-muted rounded-lg">
      <div className="bg-card rounded-lg p-3 hover:shadow-lg transition-all duration-300 relative border border-border">
        {/* Discount Tag */}
        <div className="absolute top-2 left-2 bg-green-600 text-white text-[10px] font-semibold px-2 py-1 rounded-tr-md rounded-bl-md z-10">
          {product.discount}
        </div>

        {/* Image */}
        <div className="relative w-full h-64 mb-3 rounded-md overflow-hidden flex items-center justify-center bg-gradient-to-b from-muted to-accent">
          <img src={product.image} alt={product.name} className="h-full object-contain" />
        </div>

        {/* Rating */}
        <div className="text-xs text-foreground font-semibold flex items-center gap-1 mb-1 relative">
          <Star className="h-4 w-4 text-green-600 fill-green-600" />
          {product.rating} | {product.ratingCount}
          <div className="absolute right-2 bg-rose-100 dark:bg-rose-500/20 p-1.5 rounded-full shadow-sm">
            <HeartIcon className="text-rose-600 dark:text-rose-400 h-5 w-5 fill-rose-600 dark:fill-rose-400" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm text-foreground">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{product.subtitle}</p>

        {/* Price */}
        <div className="text-sm font-semibold text-foreground">
          ₹{product.price.toLocaleString()}{' '}
          <span className="line-through text-xs text-muted-foreground ml-2">₹{product.originalPrice.toLocaleString()}</span>
        </div>

        {/* Sizes */}
        {product.size && (
          <div className="flex flex-wrap gap-2 mt-2">
            {product.size.map((size, i) => (
              <span key={i} className="px-2 py-0.5 border border-border rounded text-xs text-muted-foreground hover:border-primary/50 transition-colors">
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default WishlistCard
