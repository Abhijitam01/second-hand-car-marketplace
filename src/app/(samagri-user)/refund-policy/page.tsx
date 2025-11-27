'use client'

import { RefreshCw, Clock, CheckCircle, XCircle, CreditCard, AlertCircle, HelpCircle, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const refundSteps = [
  {
    step: 1,
    title: 'Submit Request',
    description: 'Contact our support team within 7 days of vehicle delivery to initiate a return or exchange request.',
  },
  {
    step: 2,
    title: 'Vehicle Inspection',
    description: 'Our team will schedule an inspection within 48 hours to assess the vehicle condition.',
  },
  {
    step: 3,
    title: 'Approval',
    description: 'Once approved, we will arrange for vehicle pickup at your convenience.',
  },
  {
    step: 4,
    title: 'Refund Processing',
    description: 'Refund will be processed within 14 business days after vehicle collection.',
  },
]

const eligibleReasons = [
  'Major undisclosed mechanical issues discovered within 7 days',
  'Significant discrepancy from listed specifications',
  'Hidden accident history not disclosed at the time of sale',
  'Odometer tampering discovered',
  'Legal encumbrances on the vehicle',
]

const nonEligibleReasons = [
  'Minor cosmetic wear consistent with vehicle age',
  'Buyer\'s remorse or change of preference',
  'Damage caused after delivery',
  'More than 500 km driven during the return period',
  'Request made after 7-day return window',
  'Missing or damaged original documentation',
]

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 border-b border-border/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 dark:bg-[#7fe8d7]/10 mb-6">
            <RefreshCw className="w-8 h-8 text-primary dark:text-[#7fe8d7]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Refund Policy</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We stand behind every vehicle we sell. Learn about our 7-day return guarantee and refund process.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* 7-Day Guarantee Banner */}
          <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 dark:from-[#7fe8d7]/10 dark:to-[#7fe8d7]/5 border border-primary/20 dark:border-[#7fe8d7]/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 dark:bg-[#7fe8d7]/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary dark:text-[#7fe8d7]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">7-Day / 500 km Exchange Guarantee</h2>
                <p className="text-muted-foreground">
                  Every vehicle purchased from Velaire House comes with our 7-day exchange guarantee. 
                  If you're not completely satisfied, you can return or exchange your vehicle within 
                  7 days of delivery, subject to a maximum of 500 km driven.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Process Steps */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Refund Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {refundSteps.map((item) => (
                <Card key={item.step} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute top-4 right-4 text-4xl font-bold text-muted-foreground/20">
                      {item.step}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-[#7fe8d7]/10 flex items-center justify-center mb-4">
                      <span className="text-lg font-bold text-primary dark:text-[#7fe8d7]">{item.step}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Eligible */}
            <Card className="border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Eligible for Refund</h3>
                </div>
                <ul className="space-y-3">
                  {eligibleReasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Not Eligible */}
            <Card className="border-red-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Not Eligible for Refund</h3>
                </div>
                <ul className="space-y-3">
                  {nonEligibleReasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Refund Methods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Refund Methods</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-[#7fe8d7]/10 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-primary dark:text-[#7fe8d7]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Payment Method Based Refund</h3>
                    <p className="text-muted-foreground mb-4">
                      Refunds will be processed to the original payment method used during purchase:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Bank Transfer:</strong> Refund within 7-10 business days</li>
                      <li>• <strong>Credit/Debit Card:</strong> Refund within 5-7 business days</li>
                      <li>• <strong>EMI/Finance:</strong> Loan cancellation processed with lending partner</li>
                      <li>• <strong>Cheque:</strong> Refund cheque issued within 14 business days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Notes */}
          <div className="mb-12 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Notes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Booking amounts are non-refundable if you cancel before delivery</li>
                  <li>• Documentation charges (up to ₹25,000) may be deducted from refunds</li>
                  <li>• Insurance premium refunds are subject to the insurer's policy</li>
                  <li>• Exchange vehicles must be of equal or higher value</li>
                  <li>• Only one exchange is permitted per purchase</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <Card className="bg-muted/30">
            <CardContent className="p-8 text-center">
              <HelpCircle className="w-12 h-12 text-primary dark:text-[#7fe8d7] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Need Help with a Refund?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our customer support team is available to assist you with any refund-related queries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="outline" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Support
                  </Button>
                </Link>
                <Button className="gap-2">
                  Request Refund
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

