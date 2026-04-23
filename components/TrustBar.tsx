import { Star, Award, Shield, Heart } from 'lucide-react'
import { TRUST_SIGNALS } from '@/lib/constants'

const iconMap = {
  Star,
  Award,
  Shield,
  Heart,
}

export function TrustBar() {
  return (
    <section className="bg-background py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {TRUST_SIGNALS.map((signal) => {
            const Icon = iconMap[signal.icon as keyof typeof iconMap]
            return (
              <div
                key={signal.id}
                className="flex flex-col items-center rounded-lg bg-card p-4 text-center shadow-sm transition-shadow hover:shadow-md md:p-6"
              >
                <Icon className="mb-2 h-6 w-6 text-primary md:h-8 md:w-8" />
                <span className="text-2xl font-bold text-accent md:text-3xl">
                  {signal.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {signal.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
