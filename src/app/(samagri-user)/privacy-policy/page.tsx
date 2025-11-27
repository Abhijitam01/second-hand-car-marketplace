'use client'

import { Shield, Lock, Eye, Database, Bell, Users, Mail } from 'lucide-react'

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes:
    
• Personal identification information (name, email address, phone number)
• Payment and billing information
• Vehicle preferences and search history
• Communication preferences
• Any other information you choose to provide`,
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: `We use the information we collect to:
    
• Process transactions and send related information
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and customer service requests
• Communicate about promotions, upcoming events, and news about vehicles
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions
• Personalize and improve your experience`,
  },
  {
    icon: Users,
    title: 'Information Sharing',
    content: `We may share your information in the following situations:
    
• With vendors and service providers who need access to perform services on our behalf
• In response to a legal request if we believe disclosure is required by law
• To protect the rights, property, and safety of Velaire House, our users, or others
• In connection with a merger, acquisition, or sale of assets
• With your consent or at your direction`,
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: `We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. These measures include:
    
• Encryption of sensitive data in transit and at rest
• Regular security assessments and penetration testing
• Access controls and authentication requirements
• Employee training on data protection
• Incident response procedures`,
  },
  {
    icon: Bell,
    title: 'Your Rights and Choices',
    content: `You have several rights regarding your personal information:
    
• Access: You can request a copy of your personal data
• Correction: You can ask us to correct inaccurate information
• Deletion: You can request deletion of your personal data
• Opt-out: You can opt out of marketing communications
• Data Portability: You can request your data in a portable format
    
To exercise these rights, contact us at privacy@velairehouse.com`,
  },
  {
    icon: Mail,
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy or our practices, please contact us at:
    
Velaire House Privacy Team
Email: privacy@velairehouse.com
Phone: +91 22 1234 5678
Address: 123 Luxury Avenue, Worli, Mumbai - 400018, India
    
We will respond to your inquiry within 30 days.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 border-b border-border/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 dark:bg-[#7fe8d7]/10 mb-6">
            <Shield className="w-8 h-8 text-primary dark:text-[#7fe8d7]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Velaire House, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
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
        </div>
      </section>
    </div>
  )
}

