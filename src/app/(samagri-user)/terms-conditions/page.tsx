'use client'

import { FileText, CheckCircle, AlertTriangle, Scale, ShoppingCart, Ban, RefreshCw, Gavel } from 'lucide-react'

const sections = [
  {
    icon: CheckCircle,
    title: 'Acceptance of Terms',
    content: `By accessing or using the Velaire House website and services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms, you may not access or use our services.

These terms apply to all visitors, users, and others who access or use our services. We reserve the right to update or modify these terms at any time without prior notice.`,
  },
  {
    icon: ShoppingCart,
    title: 'Vehicle Purchases',
    content: `All vehicle listings on Velaire House are subject to availability. Prices displayed are indicative and may vary based on final inspection and documentation.

• Vehicle prices do not include registration, insurance, or other statutory charges unless explicitly stated
• A booking amount is required to reserve a vehicle
• Full payment must be completed before vehicle delivery
• All vehicles undergo a 210-point inspection before sale
• Vehicle specifications, features, and conditions are described to the best of our knowledge
• Minor variations in color, accessories, or features may occur`,
  },
  {
    icon: Ban,
    title: 'Prohibited Activities',
    content: `You agree not to engage in any of the following prohibited activities:

• Using the service for any illegal purpose or in violation of any laws
• Providing false or misleading information
• Attempting to interfere with or disrupt the service
• Impersonating another person or entity
• Collecting or storing personal data about other users
• Using automated scripts to collect information
• Attempting to circumvent security measures
• Transmitting viruses or other malicious code`,
  },
  {
    icon: Scale,
    title: 'Intellectual Property',
    content: `The Velaire House name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Velaire House or its affiliates.

• You may not use these marks without prior written permission
• All content on the website is protected by copyright
• Unauthorized use may result in legal action
• You may not reproduce, distribute, or create derivative works without permission`,
  },
  {
    icon: RefreshCw,
    title: 'Returns and Exchanges',
    content: `Velaire House offers a 7-day exchange guarantee on all vehicle purchases, subject to the following conditions:

• The vehicle must be returned in the same condition as delivered
• Maximum of 500 km can be driven during the exchange period
• Original documentation must be intact
• Exchange is subject to availability of comparable vehicles
• Return/exchange requests must be submitted in writing
• Refunds are processed within 14 business days after vehicle inspection`,
  },
  {
    icon: AlertTriangle,
    title: 'Limitation of Liability',
    content: `To the fullest extent permitted by law, Velaire House shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including:

• Loss of profits, data, or other intangible losses
• Damages resulting from unauthorized access to your account
• Any bugs, viruses, or other harmful code transmitted through the service
• Any interruption or cessation of the service
• Vehicle performance after sale
• Third-party actions or services`,
  },
  {
    icon: Gavel,
    title: 'Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.

• Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, India
• We encourage users to contact us directly for resolution of any disputes
• Arbitration may be required before court proceedings
• Class action lawsuits are waived to the extent permitted by law`,
  },
]

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 border-b border-border/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 dark:bg-[#7fe8d7]/10 mb-6">
            <FileText className="w-8 h-8 text-primary dark:text-[#7fe8d7]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div key={section.title} className="relative">
                  {index !== sections.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-border/50 hidden sm:block" />
                  )}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 dark:bg-[#7fe8d7]/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary dark:text-[#7fe8d7]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-semibold text-foreground mb-4">{section.title}</h2>
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-muted-foreground whitespace-pre-line">{section.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-6 rounded-2xl bg-muted/30 border border-border/50 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Have Questions?</h3>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms & Conditions, please contact us.
            </p>
            <p className="text-sm text-muted-foreground">
              Email: legal@velairehouse.com | Phone: +91 22 1234 5678
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

