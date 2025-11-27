"use client";

import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

interface ProductCard {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  originalPrice: number;
  discountedPrice: number;
  tag?: {
    text: string;
    type: "trending" | "bestSeller" | "limited";
  };
}

// Sample trending products
const trendingProducts: ProductCard[] = [
  {
    id: 1,
    title: "2024 Lucid Air Sapphire",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviews: 1200,
    originalPrice: 5200000,
    discountedPrice: 4980000,
    tag: { text: "Trending", type: "trending" },
  },
  {
    id: 2,
    title: "2024 Porsche Cayenne Turbo GT",
    image: "https://images.unsplash.com/photo-1471479913433-1f86dd9c9580?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviews: 850,
    originalPrice: 3800000,
    discountedPrice: 3550000,
    tag: { text: "Best Seller", type: "bestSeller" },
  },
  {
    id: 3,
    title: "2023 Range Rover SV Bespoke",
    image: "https://images.unsplash.com/photo-1518552781628-df835fcf7729?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    reviews: 650,
    originalPrice: 4500000,
    discountedPrice: 4300000,
    tag: { text: "Limited", type: "limited" },
  },
];

const tagStyles = {
  trending: "bg-rose-500",
  bestSeller: "bg-emerald-400",
  limited: "bg-amber-500",
};

export default function TrendingProductSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className=" px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-8xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((item, index) => {
            const discountPercent = Math.round(
              ((item.originalPrice - item.discountedPrice) / item.originalPrice) * 100
            );

            return (
              <motion.div
                key={item.id}
                className="relative rounded-3xl overflow-hidden bg-[#090c15] border border-white/10 hover:shadow-xl hover:shadow-primary/20 transition"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-[4/3]">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  {item.tag && (
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white ${tagStyles[item.tag.type]}`}
                    >
                      {item.tag.text}
                    </span>
                  )}
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-tertiary fill-tertiary" />
                    <span className="text-sm text-white">{item.rating}</span>
                    <span className="text-white/50 text-sm">
                      ({item.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="text-md text-left font-semibold mb-4 line-clamp-2 text-white">
                    {item.title}
                  </h3>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-primary">
                        ₹{item.discountedPrice}
                      </span>
                      <span className="text-white/40 line-through text-sm">
                        ₹{item.originalPrice}
                      </span>
                    </div>
                    <span className="text-secondary text-left text-sm font-medium">
                      {discountPercent}% OFF
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
}

