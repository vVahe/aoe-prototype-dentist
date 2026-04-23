'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/components/BookingModal'

export function Hero() {
  const { openModal } = useBookingModal()

  return (
    <section id="home" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Text Content */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Tandarts in Utrecht
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground md:mx-0 md:text-xl">
              Professionele tandheelkunde met persoonlijke zorg. Wij combineren
              moderne technieken met een warm welkom voor uw optimale
              mondgezondheid.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
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

          {/* Hero Image */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl md:max-w-none">
              <Image
                src="/images/hero.jpg"
                alt="Tandartskliniek in Utrecht met moderne faciliteiten"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
