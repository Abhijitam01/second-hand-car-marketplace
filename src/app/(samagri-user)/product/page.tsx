'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/vehicle-product-data';
import { Heart, Search, SlidersHorizontal, Grid, List, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'SUV', 'Sedan', 'Coupe', 'Electric', 'Luxury', 'Performance', 'Supercar'];
const brands = ['All Brands', 'Porsche', 'Mercedes-Benz', 'BMW', 'Audi', 'Lamborghini', 'Ferrari', 'Bentley', 'Range Rover'];
const priceRanges = ['Any Price', 'Under ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', 'Above ₹2Cr'];

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
      {/* Hero Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80"
            alt="Cars background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020308] via-[#020308]/80 to-[#020308]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Explore Our Collection
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Discover {products.length}+ premium vehicles from world-renowned brands
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search by name, model, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 pl-12 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Brand Filter */}
              <div className="relative">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="appearance-none bg-white/5 border border-white/10 rounded-xl py-3 px-4 pr-10 text-white focus:outline-none focus:border-blue-500 cursor-pointer min-w-[180px]"
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand} className="bg-gray-900">{brand}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>

              {/* Price Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-white/5 border border-white/10 rounded-xl py-3 px-4 pr-10 text-white focus:outline-none focus:border-blue-500 cursor-pointer min-w-[150px]"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range} className="bg-gray-900">{range}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {/* Category Pills & View Toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/50 text-sm">{filteredProducts.length} vehicles</span>
            <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-white/50'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-white/50'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={`group block ${viewMode === 'list' ? 'flex gap-6' : ''}`}
            >
              <article className={`rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 ${viewMode === 'list' ? 'flex flex-1' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-72 flex-shrink-0' : 'aspect-[4/3]'}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Wishlist */}
                  <button 
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  {/* Badge */}
                  {product.discount && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                      {product.discount}
                    </span>
                  )}

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs">
                    <span className="text-yellow-400">★</span>
                    <span>{product.rating}</span>
                    <span className="text-white/50">({product.ratingCount})</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-5 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
                  <h3 className="font-semibold text-white text-lg mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-1">
                    {product.subtitle}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-white">
                        ₹{(product.price / 10000000).toFixed(2)} Cr
                      </span>
                      {product.originalPrice && (
                        <span className="text-white/40 text-sm line-through ml-2">
                          ₹{(product.originalPrice / 10000000).toFixed(2)} Cr
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  {product.size && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {product.size.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
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
          <div className="text-center py-20">
            <p className="text-white/50 text-lg">No vehicles found matching your criteria.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
