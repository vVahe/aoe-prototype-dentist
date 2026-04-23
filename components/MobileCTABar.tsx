'use client'

import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/components/BookingModal'
import { PRACTICE_INFO } from '@/lib/constants'

export function MobileCTABar() {
  const { openModal } = useBookingModal()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-4 bg-accent px-4 py-3 shadow-lg md:hidden">
      <span className="truncate text-sm font-medium text-accent-foreground">
        {PRACTICE_INFO.name}
      </span>
      <Button
        onClick={openModal}
        variant="secondary"
        size="sm"
        className="shrink-0 bg-card text-foreground hover:bg-card/90"
      >
        Afspraak maken
      </Button>
    </div>
  )
}
