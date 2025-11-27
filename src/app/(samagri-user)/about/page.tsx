'use client'

import { Award, Car, Heart, Shield, Users, Clock, MapPin, Phone, Mail, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const stats = [
  { value: '500+', label: 'Premium Vehicles', icon: Car },
  { value: '10K+', label: 'Happy Customers', icon: Users },
  { value: '50+', label: 'Luxury Brands', icon: Award },
  { value: '99%', label: 'Satisfaction Rate', icon: Heart },
]

const values = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Every vehicle in our collection undergoes a rigorous 210-point inspection. We believe in complete transparency - no hidden fees, no surprises.',
  },
  {
    icon: Award,
    title: 'Excellence in Quality',
    description: 'We curate only the finest pre-owned luxury vehicles. Each car is meticulously vetted to ensure it meets our exceptional standards.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. From browsing to delivery, we provide a seamless, white-glove experience tailored to your needs.',
  },
  {
    icon: Clock,
    title: 'Timeless Experience',
    description: 'We don\'t just sell cars; we deliver an experience. Our concierge service ensures every interaction feels premium and personalized.',
  },
]

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Automotive enthusiast with 15+ years in luxury car industry',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in streamlining customer experiences and logistics',
  },
  {
    name: 'Vikram Singh',
    role: 'Chief Curator',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Passionate about finding the perfect vehicle for every client',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury car"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 dark:bg-white/[0.06] border border-border/50 dark:border-white/[0.08] mb-6">
              <Sparkles className="w-4 h-4 text-primary dark:text-[#7fe8d7]" />
              <span className="text-sm text-muted-foreground">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Redefining Luxury <br />
              <span className="text-primary dark:text-[#7fe8d7]">Pre-Owned Vehicles</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Velaire House is India's premier destination for curated pre-owned luxury vehicles. 
              We bring together exceptional automobiles and discerning buyers through an unmatched 
              experience of trust, quality, and sophistication.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-muted/30 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 dark:bg-[#7fe8d7]/10 mb-4">
                    <IconComponent className="w-6 h-6 text-primary dark:text-[#7fe8d7]" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction and decision at Velaire House
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 dark:hover:border-[#7fe8d7]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-[#7fe8d7]/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary dark:text-[#7fe8d7]" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals dedicated to delivering excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
                <p className="text-primary dark:text-[#7fe8d7] text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2000&q=80"
                alt="Luxury car"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 py-16 px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Find Your Dream Car?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Explore our curated collection of premium pre-owned vehicles
              </p>
              <Link href="/product">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 gap-2">
                  Browse Collection
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

