"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const features = [
  {
    image: "delivery.png",
    title: "Residency Delivery",
    bgColor: "bg-white/10",
  },
  {
    image: "/clock.png",
    title: "24Hr Capital Desk",
   bgColor: "bg-white/10",
  },
  {
    image: "/refresh_1.png",
    title: "7-Day Exchange",
    bgColor: "bg-white/10",
  },
  {
    image: "/wallet.png",
    title: "Flexible Payments",
   bgColor: "bg-white/10",
  },
  {
    image: "/headphone.png",
    title: "Concierge Studio",
   bgColor: "bg-white/10",
  },
  {
    image: "/offer.png",
    title: "Exclusive Briefings",
    bgColor: "bg-white/10",
  },
]

export default function FeatureHighlights() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-center text-center space-y-2 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          whileHover={{ scale: 1.08 }}
        >
          <div
            className={`w-20 h-20 flex items-center justify-center rounded-full border border-white/10 transition-all duration-300 ${feature.bgColor}`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              width={50}
              height={50}
              className="object-contain rounded-full"
            />
          </div>
          <p className="font-semibold text-white text-sm">
            {feature.title}
          </p>
        </motion.div>
      ))}
    </div>
  )
}