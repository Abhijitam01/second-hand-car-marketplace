'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/vehicle-product-data';
import { Heart, Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'Electric', 'SUV', 'Sedan', 'Luxury', 'Performance'];

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || 
        product.size?.some(s => s.toLowerCase().includes(activeCategory.toLowerCase()));
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#020308]">
      {/* Header */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-2">Collection</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">Explore Our Vault</h1>
            <p className="text-white/50 mt-2 max-w-xl">
              Each vehicle is 210+ point inspected and comes with Vault coverage.
            </p>
          </div>
          
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-white/10 rounded-xl bg-white/5 py-3 px-4 pl-11 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/20"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-white text-[#020308] font-medium'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <p className="text-white/50 text-sm">{filteredProducts.length} vehicles</p>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-white/70 text-sm hover:bg-white/10">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block"
            >
              <article className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] transition-all duration-300 hover:from-white/8 hover:to-white/[0.04]">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Wishlist */}
                  <button 
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  {/* Rating & Discount */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs">
                      <span className="text-secondary">★</span>
                      <span>{product.rating}</span>
                    </div>
                    {product.discount && (
                      <span className="px-2 py-1 rounded-full bg-secondary/20 text-secondary text-xs">
                        {product.discount}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-medium text-white text-sm line-clamp-1 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-white/40 text-xs line-clamp-1 mb-3">
                    {product.subtitle}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">
                        ₹{(product.price / 100000).toFixed(1)}L
                      </span>
                      {product.originalPrice && (
                        <span className="text-white/30 text-sm line-through">
                          ₹{(product.originalPrice / 100000).toFixed(1)}L
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  {product.size && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {product.size.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/50">No vehicles found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}
