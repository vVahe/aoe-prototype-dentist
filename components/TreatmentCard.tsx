'use client'

import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TREATMENTS } from '@/lib/constants'

// Custom tooth icon as SVG since lucide doesn't have a tooth icon
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C9 2 7 4 7 7c0 2-1 3-2 5s-1 5 1 7c1.5 1.5 3 1 4-1l1-3c.5-1.5 1.5-1.5 2 0l1 3c1 2 2.5 2.5 4 1 2-2 2-5 1-7s-2-3-2-5c0-3-2-5-5-5z" />
    </svg>
  )
}

function ImplantIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M10 8v2" />
      <path d="M14 8v2" />
      <path d="M8 12h8l-1 10H9L8 12z" />
      <path d="M10 14h4" />
      <path d="M10 17h4" />
    </svg>
  )
}

const iconMap = {
  Tooth: ToothIcon,
  Implant: ImplantIcon,
  Sparkles,
}

interface TreatmentFAQItem {
  q: string
  a: string
}

interface TreatmentItemProps {
  treatment: {
    id: string
    icon: string
    title: string
    description: string
    faq: TreatmentFAQItem[]
  }
}

function TreatmentItem({ treatment }: TreatmentItemProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const Icon = iconMap[treatment.icon as keyof typeof iconMap]

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border-l-4 border-l-primary bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground md:text-2xl">
            {treatment.title}
          </h3>
        </div>
        <p className="leading-relaxed text-muted-foreground">
          {treatment.description}
        </p>
      </div>

      {/* Mini FAQ */}
      <div className="mt-auto border-t border-border">
        {treatment.faq.map((item, index) => (
          <div key={index} className="border-b border-border last:border-b-0">
            <button
              onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              className="flex w-full items-center justify-between px-6 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
              aria-expanded={expandedFAQ === index}
            >
              <span>{item.q}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 text-muted-foreground transition-transform duration-200',
                  expandedFAQ === index && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-200',
                expandedFAQ === index ? 'max-h-40' : 'max-h-0'
              )}
            >
              <p className="px-6 pb-3 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export function TreatmentCards() {
  return (
    <section id="behandelingen" className="bg-background py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Onze Behandelingen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Van preventieve zorg tot cosmetische behandelingen - wij bieden
            complete tandheelkundige zorg voor het hele gezin.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TREATMENTS.map((treatment) => (
            <TreatmentItem key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  )
}
