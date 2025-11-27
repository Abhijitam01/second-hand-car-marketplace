'use client'

import { Shield, Truck, RefreshCw, Headphones } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Vault Certified',
    description: '210-point inspection on every vehicle',
  },
  {
    icon: Truck,
    title: 'Global Delivery',
    description: 'Doorstep delivery within 72 hours',
  },
  {
    icon: RefreshCw,
    title: '7-Day Exchange',
    description: 'No-questions-asked return policy',
  },
  {
    icon: Headphones,
    title: 'Concierge Support',
    description: 'Dedicated advisor for your journey',
  },
]

export default function TrustSection() {
  return (
    <section className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-white">Why Velaire House</h2>
        <p className="text-white/50 mt-2">Built for provenance-grade confidence</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPoints.map((point) => (
          <div
            key={point.title}
            className="text-center p-6 rounded-2xl border border-white/8 bg-white/3 transition-colors hover:border-white/12 hover:bg-white/5"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary mb-4">
              <point.icon className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-white text-sm mb-1">{point.title}</h3>
            <p className="text-white/50 text-xs">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

