'use client'

import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/components/BookingModal'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  variant?: 'default' | 'compact'
  className?: string
}

export function CTASection({ variant = 'default', className }: CTASectionProps) {
  const { openModal } = useBookingModal()

  if (variant === 'compact') {
    return (
      <div className={cn('flex justify-center py-8 md:py-12', className)}>
        <Button
          onClick={openModal}
          size="lg"
          className="bg-accent px-8 text-lg text-accent-foreground transition-all hover:bg-accent/90 hover:scale-105"
        >
          Maak een afspraak
        </Button>
      </div>
    )
  }

  return (
    <section
      className={cn(
        'bg-card py-12 md:py-16',
        className
      )}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Klaar voor een gezond gebit?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Neem vandaag nog contact met ons op en ontdek hoe wij u kunnen helpen
          met uw tandheelkundige zorg.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={openModal}
            size="lg"
            className="w-full bg-accent px-8 text-lg text-accent-foreground transition-all hover:bg-accent/90 hover:scale-105 sm:w-auto"
          >
            Maak een afspraak
          </Button>
          <a
            href="tel:+31-30-000-0000"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            of bel +31-30-000-0000
          </a>
        </div>
      </div>
    </section>
  )
}
