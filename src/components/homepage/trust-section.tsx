'use client'

import { Shield, Truck, RefreshCw, Headphones, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const trustPoints = [
  {
    icon: Shield,
    title: 'Vault Certified',
    description: '210-point forensic inspection on every vehicle',
    color: 'from-secondary/20 to-secondary/5',
    iconBg: 'bg-secondary/20',
    iconColor: 'text-secondary',
  },
  {
    icon: Truck,
    title: 'Global Delivery',
    description: 'White-glove delivery to your doorstep worldwide',
    color: 'from-primary/20 to-primary/5',
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
  },
  {
    icon: RefreshCw,
    title: '7-Day Exchange',
    description: 'No-questions-asked return within 7 days',
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Headphones,
    title: 'Concierge',
    description: 'Dedicated advisor for your entire journey',
    color: 'from-violet-500/20 to-violet-500/5',
    iconBg: 'bg-violet-500/20',
    iconColor: 'text-violet-400',
  },
]

export default function TrustSection() {
  return (
    <section className="w-full">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trustPoints.map((point, index) => (
          <div
            key={point.title}
            className={`group relative rounded-3xl bg-gradient-to-br ${point.color} p-6 transition-all duration-300 hover:scale-[1.02] ${
              index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl ${point.iconBg} flex items-center justify-center mb-4`}>
              <point.icon className={`w-5 h-5 ${point.iconColor}`} />
            </div>
            <h3 className="font-semibold text-white text-lg mb-2">{point.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="mt-6 rounded-3xl bg-gradient-to-r from-white/5 via-white/[0.02] to-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Ready to find your next icon?</h3>
          <p className="text-white/50 mt-1">Join our members-only waitlist for exclusive access.</p>
        </div>
        <Link 
          href="/product"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#020308] font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
        >
          Browse Collection
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
