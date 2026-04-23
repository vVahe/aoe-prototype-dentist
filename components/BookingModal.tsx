'use client'

import { useState, createContext, useContext } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AVAILABLE_SLOTS, TREATMENT_TYPES } from '@/lib/constants'
import { CheckCircle } from 'lucide-react'

// Context for managing modal state globally
interface BookingModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const BookingModalContext = createContext<BookingModalContextType | null>(null)

export function useBookingModal() {
  const context = useContext(BookingModalContext)
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider')
  }
  return context
}

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingModalContext.Provider>
  )
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    treatment: '',
    notes: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const availableTimes = formData.date
    ? AVAILABLE_SLOTS.find((slot) => slot.date === formData.date)?.times || []
    : []

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('nl-NL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Naam is verplicht'
    if (!formData.phone.trim()) newErrors.phone = 'Telefoonnummer is verplicht'
    if (!formData.date) newErrors.date = 'Datum is verplicht'
    if (!formData.time) newErrors.time = 'Tijd is verplicht'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Mock submission - just log to console
      console.log('Booking submitted:', formData)
      setStep('success')
    }
  }

  const handleClose = () => {
    onClose()
    // Reset form after animation
    setTimeout(() => {
      setStep('form')
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        treatment: '',
        notes: '',
      })
      setErrors({})
    }, 300)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        {step === 'form' ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-foreground">
                Plan uw afspraak
              </DialogTitle>
              <DialogDescription>
                Vul het formulier in en wij nemen contact met u op ter bevestiging.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Naam <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Uw volledige naam"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Telefoonnummer <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+31 6 12345678"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={errors.phone ? 'border-destructive' : ''}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mailadres</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="uw@email.nl"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <Label htmlFor="date">
                  Datum <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.date}
                  onValueChange={(value) =>
                    setFormData({ ...formData, date: value, time: '' })
                  }
                >
                  <SelectTrigger
                    id="date"
                    className={errors.date ? 'border-destructive' : ''}
                  >
                    <SelectValue placeholder="Kies een datum" />
                  </SelectTrigger>
                  <SelectContent>
                    {AVAILABLE_SLOTS.map((slot) => (
                      <SelectItem key={slot.date} value={slot.date}>
                        {formatDate(slot.date)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.date && (
                  <p className="text-xs text-destructive">{errors.date}</p>
                )}
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <Label htmlFor="time">
                  Tijd <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.time}
                  onValueChange={(value) =>
                    setFormData({ ...formData, time: value })
                  }
                  disabled={!formData.date}
                >
                  <SelectTrigger
                    id="time"
                    className={errors.time ? 'border-destructive' : ''}
                  >
                    <SelectValue
                      placeholder={
                        formData.date
                          ? 'Kies een tijdstip'
                          : 'Selecteer eerst een datum'
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && (
                  <p className="text-xs text-destructive">{errors.time}</p>
                )}
              </div>

              {/* Treatment Type */}
              <div className="space-y-2">
                <Label htmlFor="treatment">Type behandeling</Label>
                <Select
                  value={formData.treatment}
                  onValueChange={(value) =>
                    setFormData({ ...formData, treatment: value })
                  }
                >
                  <SelectTrigger id="treatment">
                    <SelectValue placeholder="Selecteer een behandeling" />
                  </SelectTrigger>
                  <SelectContent>
                    {TREATMENT_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Opmerkingen (optioneel)</Label>
                <Textarea
                  id="notes"
                  placeholder="Eventuele bijzonderheden of vragen..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  rows={3}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
                <Button type="button" variant="outline" onClick={handleClose}>
                  Annuleren
                </Button>
                <Button
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Bevestigen
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              Dank u wel!
            </h2>
            <p className="mb-6 text-muted-foreground">
              Wij hebben uw aanvraag ontvangen en nemen zo snel mogelijk contact
              met u op ter bevestiging.
            </p>
            <Button
              onClick={handleClose}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Sluiten
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
