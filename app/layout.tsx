import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import './globals.css'
import { FAQ_QUESTIONS } from '@/lib/constants'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tandarts in Utrecht | Tandartspraktijk De Witte Brug',
  description:
    'Professionele tandheelkunde in Utrecht. Dr. Nadia Oosterbeek biedt moderne tandcare met persoonlijke aandacht. Bel +31-30-000-0000 voor een afspraak.',
  keywords: 'tandarts Utrecht, tandheelkunde, implantaten, tandreiniging, controle, esthetische tandheelkunde',
  authors: [{ name: 'Tandartspraktijk De Witte Brug' }],
  openGraph: {
    title: 'Tandarts in Utrecht | Tandartspraktijk De Witte Brug',
    description: 'Professionele tandheelkunde met persoonlijke zorg in Utrecht.',
    type: 'website',
    locale: 'nl_NL',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Tandartspraktijk De Witte Brug - Moderne tandheelkunde in Utrecht',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1B4F72',
}

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Tandartspraktijk De Witte Brug',
      description: 'Professionele tandheelkunde met persoonlijke zorg in Utrecht',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kanaalstraat 45',
        addressLocality: 'Utrecht',
        postalCode: '3531 CJ',
        addressCountry: 'NL',
      },
      telephone: '+31-30-000-0000',
      email: 'info@dewitterbrug.nl',
      medicalSpecialty: 'Dentistry',
      openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-13:00'],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Tandartspraktijk De Witte Brug',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_QUESTIONS.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="bg-background">
      <head>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
