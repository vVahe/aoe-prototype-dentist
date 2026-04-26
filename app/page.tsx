import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { TreatmentCards } from '@/components/TreatmentCard'
import { CTASection } from '@/components/CTASection'
import { AuthorityBio } from '@/components/AuthorityBio'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { BookingModalProvider } from '@/components/BookingModal'
import { MobileCTABar } from '@/components/MobileCTABar'

export default function Home() {
  return (
    <BookingModalProvider>
      <div className="flex min-h-screen flex-col bg-background pb-16 md:pb-0">
        {/* Desktop Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Trust Signals */}
          <TrustBar />

          {/* Treatments */}
          <TreatmentCards />

          {/* CTA After Treatments */}
          <CTASection variant="compact" />

          {/* Doctor Bio & Testimonials */}
          <AuthorityBio />

          {/* CTA Before FAQ */}
          <CTASection />

          {/* FAQ */}
          <FAQ />

          {/* Final CTA */}
          <CTASection variant="compact" className="bg-background" />
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Sticky CTA Bar */}
        <MobileCTABar />
      </div>
    </BookingModalProvider>
  )
}
