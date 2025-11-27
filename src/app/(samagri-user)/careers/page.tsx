'use client'

import { useState } from 'react'
import { Briefcase, MapPin, Clock, ChevronRight, Users, Heart, Zap, Coffee, GraduationCap, Sparkles, Search, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const benefits = [
  { icon: Heart, title: 'Health Coverage', description: 'Comprehensive health insurance for you and your family' },
  { icon: GraduationCap, title: 'Learning Budget', description: '₹50,000 annual budget for courses and certifications' },
  { icon: Coffee, title: 'Flexible Work', description: 'Hybrid work options and flexible hours' },
  { icon: Zap, title: 'Performance Bonus', description: 'Quarterly bonuses based on performance' },
  { icon: Users, title: 'Team Events', description: 'Regular team outings and annual retreats' },
  { icon: Building, title: 'Modern Office', description: 'State-of-the-art workspace with all amenities' },
]

const openPositions = [
  {
    id: 1,
    title: 'Senior Product Manager',
    department: 'Product',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '5-8 years',
    description: 'Lead product strategy and roadmap for our digital platforms. Work closely with engineering and design teams to deliver exceptional user experiences.',
    requirements: [
      '5+ years of product management experience',
      'Experience with automotive or e-commerce platforms',
      'Strong analytical and communication skills',
      'Experience with Agile methodologies',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Mumbai / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Build and maintain our web applications using React, Node.js, and modern technologies. Collaborate with cross-functional teams to deliver high-quality features.',
    requirements: [
      '3+ years of experience with React and Node.js',
      'Experience with TypeScript and modern JavaScript',
      'Knowledge of database systems (PostgreSQL, MongoDB)',
      'Understanding of CI/CD pipelines',
    ],
  },
  {
    id: 3,
    title: 'Vehicle Curator',
    department: 'Operations',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Source and evaluate premium pre-owned vehicles. Ensure quality standards and manage relationships with sellers and dealers.',
    requirements: [
      '4+ years in automotive industry',
      'Deep knowledge of luxury vehicles',
      'Strong negotiation skills',
      'Valid driving license with clean record',
    ],
  },
  {
    id: 4,
    title: 'Customer Experience Lead',
    department: 'Customer Success',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Lead our customer experience team and ensure every customer interaction exceeds expectations. Drive initiatives to improve customer satisfaction.',
    requirements: [
      '3+ years in customer service leadership',
      'Experience in luxury retail or automotive',
      'Strong problem-solving abilities',
      'Excellent communication skills',
    ],
  },
  {
    id: 5,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '4-7 years',
    description: 'Develop and execute marketing strategies to build brand awareness and drive customer acquisition. Manage campaigns across digital and traditional channels.',
    requirements: [
      '4+ years of marketing experience',
      'Experience with luxury brands preferred',
      'Strong understanding of digital marketing',
      'Creative thinking and analytical skills',
    ],
  },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const departments = ['all', ...new Set(openPositions.map(p => p.department))]

  const filteredPositions = openPositions.filter(position => {
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 dark:bg-white/[0.06] border border-border/50 dark:border-white/[0.08] mb-6">
              <Briefcase className="w-4 h-4 text-primary dark:text-[#7fe8d7]" />
              <span className="text-sm text-muted-foreground">Join Our Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Build the Future of
              <span className="text-primary dark:text-[#7fe8d7]"> Automotive Retail</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join a team of passionate individuals who are revolutionizing how people buy and sell luxury vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground">We offer competitive benefits to help you thrive</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon
              return (
                <Card key={benefit.title} className="border-border/50 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-[#7fe8d7]/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary dark:text-[#7fe8d7]" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-muted-foreground">Find your next opportunity</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted/50"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                  className="whitespace-nowrap"
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </Button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredPositions.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Briefcase className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No positions found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </CardContent>
              </Card>
            ) : (
              filteredPositions.map((position) => (
                <Card key={position.id} className="hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{position.title}</h3>
                          <Badge variant="outline" className="text-xs">{position.department}</Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4" />
                            {position.experience}
                          </span>
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="gap-2">
                            View Details
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                          <DialogHeader>
                            <DialogTitle>{position.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6 pt-4">
                            <div className="flex flex-wrap gap-3">
                              <Badge variant="outline">{position.department}</Badge>
                              <Badge variant="outline">{position.location}</Badge>
                              <Badge variant="outline">{position.type}</Badge>
                              <Badge variant="outline">{position.experience}</Badge>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-2">About the Role</h4>
                              <p className="text-sm text-muted-foreground">{position.description}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                              <ul className="space-y-2">
                                {position.requirements.map((req, index) => (
                                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Sparkles className="w-4 h-4 text-primary dark:text-[#7fe8d7] mt-0.5 flex-shrink-0" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <Button className="w-full">Apply Now</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Don't See the Right Role?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll reach out when we have a position that matches your skills.
          </p>
          <Button size="lg" variant="outline">
            Send Your Resume
          </Button>
        </div>
      </section>
    </div>
  )
}

