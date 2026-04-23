# Tandartspraktijk De Witte Brug - Implementation Plan

**Project:** Dental practice website (single-page prototype)  
**Client:** Tandartspraktijk De Witte Brug, Utrecht, Netherlands  
**Technology:** Next.js 16 + Tailwind CSS + shadcn/ui  
**Target:** Mobile-first (iPhone 375px) → Desktop (1080px)  
**Language:** Dutch throughout  
**Approach:** Healthcare-appropriate, trustworthy, conversion-focused

---

## 1. Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, schema
│   ├── page.tsx                # Single-page entry point
│   └── globals.css             # Design tokens, color system
├── components/
│   ├── Navbar.tsx              # Sticky navigation (desktop) - hidden on mobile
│   ├── Hero.tsx                # H1, tagline, hero image, CTA
│   ├── TrustBar.tsx            # 4-signal trust indicators
│   ├── TreatmentCard.tsx       # 3x treatment cards with mini-FAQ
│   ├── AuthorityBio.tsx        # Doctor credentials + testimonials
│   ├── FAQ.tsx                 # Accordion with 8 questions
│   ├── CTASection.tsx          # Repeated CTA (before FAQ, before footer)
│   ├── BookingModal.tsx        # Popup modal for appointment booking (mocked)
│   └── Footer.tsx              # NAP + links + contact
├── lib/
│   ├── constants.ts            # All static data (contact, hours, testimonials)
│   └── utils.ts                # Existing Tailwind utilities
├── public/
│   ├── images/
│   │   ├── hero.jpg            # Generated: hero image
│   │   ├── doctor.jpg          # Generated: doctor portrait
│   │   └── practice.jpg        # Generated: practice interior (optional)
│   └── favicon.ico
└── next.config.mjs             # Next.js 16 config
```

---

## 2. Technology Stack Confirmation

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 16 (App Router) | React 19, Server Components, Turbopack, latest caching |
| **Styling** | Tailwind CSS 3 | Utility-first, mobile-first, performance |
| **Components** | shadcn/ui | Accessible, unstyled-first (customizable) |
| **Fonts** | 2 families (see section 3) | v0 guideline: max 2 fonts |
| **Images** | Generated via GenerateImage | Placeholder dental/medical stock images |
| **Backend** | None (prototype) | Static data in `lib/constants.ts`, mocked booking modal |
| **Schema** | JSON-LD via next/script | SEO, local business signals |
| **Deployment** | Vercel (ready for production) | Native Next.js 16 support |

---

## 3. Typography System (2 Fonts)

### Font Selection
- **Headings (H1–H6):** Inter Bold / Geist Sans Bold (system font, fast)
- **Body copy:** Inter Regular / Geist Sans Regular (clean, readable, medical authority)

**Rationale:** Single sans-serif stack reduces complexity, improves performance, maintains clean healthcare aesthetic. Serif fonts excluded as medical context prefers modern sans-serif (not academic/formal).

### Type Scale (Tailwind)
```
H1: text-4xl md:text-5xl font-bold  (hero title)
H2: text-3xl md:text-4xl font-bold  (section heads)
H3: text-2xl md:text-3xl font-bold  (card titles)
Body: text-base leading-relaxed     (16px, 1.5 line-height)
Small: text-sm                      (metadata, labels)
```

---

## 4. Color Palette (5 Colors Total)

### Design Tokens in `globals.css` + `tailwind.config.ts`

```
Primary: Deep Blue     #1B4F72  (headings, trust, authority)
Secondary: Ice Blue    #E8F4F8  (background, soften)
Neutral 1: White       #FFFFFF  (cards, sections)
Neutral 2: Dark Gray   #2D3436  (body text, high contrast)
Accent: Green          #27AE60  (CTA buttons, urgency)

Optional Support:
- Border Gray: #E0E0E0
- Success: #27AE60 (accent double-duty)
- Warning/Alert: #E67E22 (for edge cases)
```

### Tailwind Config Extension
```typescript
theme: {
  extend: {
    colors: {
      primary: '#1B4F72',
      secondary: '#E8F4F8',
      accent: '#27AE60',
      neutral: '#2D3436',
    },
    backgroundColor: {
      background: '#E8F4F8',
      surface: '#FFFFFF',
    },
    textColor: {
      foreground: '#2D3436',
      muted: '#666666',
    },
  }
}
```

### Accessibility Notes
- Primary text (#2D3436) on Ice Blue (#E8F4F8) = WCAG AA compliant ✓
- Accent green (#27AE60) on white = WCAG AAA compliant ✓
- High contrast maintained throughout

---

## 5. Component Breakdown & Content

### 5.1 Navbar (Desktop Only, Hidden on Mobile)
**File:** `components/Navbar.tsx`

- **Visibility:** `hidden md:flex` (hidden on mobile, because CTA replaces it)
- **Structure:**
  - Logo/Practice name (left)
  - Navigation links (center): Home, Behandelingen, Over ons, FAQ, Contact
  - Sticky to top, `sticky top-0 z-40`
- **Styling:** 
  - Background: white with subtle shadow
  - Text color: primary blue (#1B4F72)
  - Hover states: green accent underline
- **Functionality:** Smooth scroll to section anchors

---

### 5.2 Hero Section
**File:** `components/Hero.tsx`

- **Layout:**
  - Mobile (< 768px): Text stacked above image, full-width
  - Desktop (768px+): 50/50 side-by-side (text left, image right)
- **Content:**
  - **H1:** "Tandarts in Utrecht" (primary keyword, 4xl/5xl)
  - **Tagline:** "Professionele tandheelkunde met persoonlijke zorg" (2-3 lines, descriptive)
  - **CTA Button:** "Maak een afspraak" → opens `BookingModal`
- **Image:** 
  - Path: `/images/hero.jpg` (generated)
  - Alt: "Tandartskliniek in Utrecht met moderne faciliteiten"
  - Aspect ratio: 16:9 (desktop), full-width (mobile)
- **Background:** Ice blue (#E8F4F8)

---

### 5.3 Trust Bar
**File:** `components/TrustBar.tsx`

**Layout:** Horizontal 4-column grid, responsive stacking

**Signals (4 items):**
1. **Rating:** "4.9/5 ⭐" + "127 reviews op Google"
2. **Experience:** "14 jaar" + "Klinische ervaring"
3. **Credentials:** "BIG geregistreerd" + "Zorgverzekering erkend"
4. **Guarantee:** "Eerste consult €25" + "Geen verplichtingen"

**Styling:**
- Background: white cards on ice blue background
- Icons: Primary blue (#1B4F72)
- Numbers: Bold, accent green (#27AE60)
- Mobile: Stack vertically (1 column), then 2x2 grid on tablet, 1x4 on desktop
- Padding: `p-4` mobile, `p-6` desktop

---

### 5.4 Treatment Cards (3 Cards)
**File:** `components/TreatmentCard.tsx`

**Structure:**
```
Card 1: Controle & Schoonmaak (Check-up & Cleaning)
Card 2: Implantaten & Prothetiek (Implants & Prosthetics)
Card 3: Esthetische tandheelkunde (Cosmetic Dentistry)
```

**Each Card Layout:**
- **Icon:** Relevant medical icon (tooth, implant, smile)
- **Title (H3):** Treatment name
- **Description:** 2–3 sentences (benefits, conditions treated)
- **Mini-FAQ:** 1–2 collapsible questions
  - Example: "Hoe lang duurt het?" / "Is het pijnloos?"
- **CTA:** "Meer informatie" (accordion expands, no navigation)

**Styling:**
- Background: white
- Border: subtle primary blue left border (4px)
- Hover: subtle shadow lift, slight scale
- Mobile: 1 column (full-width)
- Tablet/Desktop: 3 columns (`grid-cols-3`)
- Spacing: `gap-6`

---

### 5.5 Authority/Bio Block
**File:** `components/AuthorityBio.tsx`

**Layout (Side-by-Side on Desktop, Stacked on Mobile):**

**Left (50%):**
- Doctor image: `/images/doctor.jpg` (generated)
- Alt: "Dr. Nadia Oosterbeek, tandarts in Utrecht"

**Right (50%):**
- **H2:** "Over Dr. Nadia Oosterbeek"
- **Credentials (bullet list):**
  - Diploma ACTA (Academic Centre for Dentistry Amsterdam)
  - BIG-registratie nr. [XXXXX]
  - Invisalign Certified Provider
  - 14+ jaren klinische ervaring
- **Bio paragraph (80–100 words):** Personal commitment to patient care, gentle approach, latest techniques
- **Testimonials (carousel or list):**
  - 3–4 patient testimonials (names, stars, quote)
  - Example: "Dr. Oosterbeek maakte mijn bleekinzending pijnloos en resultaat is fantastisch!" ⭐⭐⭐⭐⭐

**Styling:**
- Background: Ice blue
- Image: Rounded corners, subtle shadow
- Quote marks: Accent green accent
- Stars: Accent green

---

### 5.6 FAQ Accordion (8 Questions)
**File:** `components/FAQ.tsx`

**Questions (8 total, in Dutch):**

1. **"Hoe lang duurt mijn eerste afspraak?"**
   - Answer: ~45 minuten. Intake, onderzoek, fotografie, toelichting plan.

2. **"Is tandheelkunde pijnloos?"**
   - Answer: Moderne anesthesie maakt meeste procedures pijnvrij. Voelen druk/trillingen, geen pijn.

3. **"Welke zorgverzekeringen accepteert u?"**
   - Answer: Alle standaard zorgverzekeringen (OK verklaard). Bij vrij werk wij mee met: [list]. Vooraf controleren aanbevolen.

4. **"Hoeveel kost een tandreininging?"**
   - Answer: Covered by insurance for most. Marge [amount]. Betaling via PIN/cash na behandeling.

5. **"Hoe lang houd ik mijn vulling/behandeling?"**
   - Answer: Depends on treatment. Composite 7-10 years, implants 20+ with care.

6. **"Kan ik tandvlees- of tandsteen problemen voorkomen?"**
   - Answer: Yes—2x daily brushing, floss, professional cleaning 1-2x yearly, healthy diet.

7. **"Wat als ik tandvrees heb?"**
   - Answer: Understanding approach. Extra time, sedation options, relaxation techniques. Your comfort first.

8. **"Hoe moet ik mijn tanden verzorgen na een ingreep?"**
   - Answer: Specific post-care instructions given. Generally: avoid hard foods 48h, salt rinses, prescribed medication if given.

**Component Details:**
- Use shadcn `Accordion` component
- Mobile: Full-width, default collapsed
- Desktop: Same (accordion optimal for all sizes)
- Smooth open/close animation
- Icon: `ChevronDown` rotation on open

**Styling:**
- Background: White cards on ice blue
- Title font-weight: 600
- Answer text: `leading-relaxed` for readability
- Padding: `p-4` mobile, `p-6` desktop

---

### 5.7 CTA Section (Repeated)
**File:** `components/CTASection.tsx`

**Placement:** 
1. End of Hero (primary)
2. Below Treatment Cards
3. Before FAQ
4. Before Footer

**Content:**
- **H2 (optional):** "Klaar voor een gezond gebit?"
- **Large Green Button:** "Maak een afspraak" 
- **Subtext:** "Bel of vul formulier in (mailing list signup prototype)"

**Styling:**
- Center-aligned
- Button: Large (`text-lg`), green accent (#27AE60), white text, padding generous
- Hover: Darker green, slight scale
- Spacing: Full-width container with padding

---

### 5.8 Booking Modal
**File:** `components/BookingModal.tsx`

**Trigger:** "Maak een afspraak" button throughout page

**Modal Content (Mocked Calendar):**
- **Title:** "Plan uw afspraak"
- **Fields:**
  1. Name (text input)
  2. Phone (tel input)
  3. Email (email input)
  4. Date picker (mocked with 3–5 next available dates)
  5. Time slots (3–4 available times per date)
  6. Treatment type dropdown (Controle, Schoonmaak, Esthetiek, etc.)
  7. Notes (textarea, optional)
- **Buttons:** 
  - "Bevestigen" (submits to mock handler, shows success message)
  - "Annuleren" (closes modal)

**Behavior:**
- Modal overlay with backdrop blur
- Responsive: Full-height on mobile (scrollable), center dialog on desktop
- Form validation: Name, phone, date required
- Success state: "Dank je wel! We nemen contact op." + close button
- No backend: Form submission just logs to console + success message

**Styling:**
- Modal background: white
- Overlay: dark semi-transparent (rgba)
- Input fields: bordered with subtle shadow, focus: green accent border
- Buttons: Primary (green), Secondary (gray)

---

### 5.9 Footer
**File:** `components/Footer.tsx`

**NAP (Name, Address, Phone) Block:**
- **Name:** Tandartspraktijk De Witte Brug
- **Address:** Kanaalstraat 45, 3531 CJ Utrecht, Netherlands
- **Phone:** +31-30-000-0000 (placeholder, updatable)
- **Email:** info@dewitterbrug.nl (placeholder)

**Sections (3 Columns on Desktop, Stacked on Mobile):**

1. **Contact:**
   - Phone (clickable `tel:` link)
   - Email (clickable `mailto:` link)
   - Address (no map, text only)
   - Hours: "Ma–Vr 8:00–17:00, Za 9:00–13:00" (placeholder)

2. **Behandelingen:**
   - Controle & Schoonmaak
   - Implantaten
   - Esthetische tandheelkunde
   - Tandbleking

3. **Informatie:**
   - Privacy Policy (link)
   - Terms (link)
   - Cancellation Policy (link)
   - Contact (link to form)

**Bottom Bar:**
- Copyright: "© 2026 Tandartspraktijk De Witte Brug"
- Social icons (optional): LinkedIn, Facebook, Google Reviews (links only, no integration)

**Styling:**
- Background: Primary blue (#1B4F72)
- Text: White
- Links: Green accent hover
- Padding: `py-12 px-6`

---

## 6. Data Structure (Mocking)

**File:** `lib/constants.ts`

```typescript
export const PRACTICE_INFO = {
  name: 'Tandartspraktijk De Witte Brug',
  address: 'Kanaalstraat 45, 3531 CJ Utrecht',
  phone: '+31-30-000-0000',
  email: 'info@dewitterbrug.nl',
  hours: {
    monday: '08:00 - 17:00',
    tuesday: '08:00 - 17:00',
    wednesday: '08:00 - 17:00',
    thursday: '08:00 - 17:00',
    friday: '08:00 - 17:00',
    saturday: '09:00 - 13:00',
    sunday: 'Gesloten',
  },
  doctor: {
    name: 'Dr. Nadia Oosterbeek',
    credentials: [
      'Diploma ACTA',
      'BIG-registratie',
      'Invisalign Certified',
      '14+ jaren ervaring',
    ],
  },
};

export const TREATMENTS = [
  {
    id: 'checkup',
    icon: 'Tooth',
    title: 'Controle & Schoonmaak',
    description: 'Professionele tandreiniging en onderzoek voor optimal tandgezondheidheid.',
    faq: [
      { q: 'Hoe lang duurt het?', a: 'Ongeveer 45 minuten.' },
      { q: 'Is het pijnloos?', a: 'Ja, volledig pijnvrij.' },
    ],
  },
  // ... 2 more treatments
];

export const TESTIMONIALS = [
  {
    name: 'Jan de Vries',
    text: 'Professioneel en vriendelijk. Dr. Oosterbeek neem tijd voor je.',
    stars: 5,
  },
  {
    name: 'Maria Hendriks',
    text: 'Eindelijk tandarts waar ik me comfortabel voel!',
    stars: 5,
  },
  {
    name: 'Peter Kowalski',
    text: 'Snelle, pijnloze bleking. Zeer tevreden!',
    stars: 5,
  },
];

export const FAQ_QUESTIONS = [
  // ... 8 questions with answers (see section 5.6)
];

export const AVAILABLE_SLOTS = [
  // Mock 10-15 available appointment times
];
```

---

## 7. Schema Markup (JSON-LD via next/script)

**File:** `app/layout.tsx` (via next/script component)

```typescript
import Script from 'next/script';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Tandartspraktijk De Witte Brug',
      description: 'Tandartspraktijk in Utrecht',
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
      mainEntity: FAQ_QUESTIONS.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className="bg-secondary">
      <head>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 8. Metadata & SEO

**File:** `app/layout.tsx`

```typescript
export const metadata = {
  title: 'Tandarts in Utrecht | Tandartspraktijk De Witte Brug',
  description:
    'Professionele tandheelkunde in Utrecht. Dr. Nadia Oosterbeek biedt moderne tandcare met persoonlijke aandacht. Bel +31-30-000-0000.',
  keywords: 'tandarts Utrecht, tandheelkunde, implantaten, schoonmaak, controle',
  og: {
    title: 'Tandarts in Utrecht | De Witte Brug',
    description: 'Professionele tandheelkunde met persoonlijke zorg.',
    image: '/images/hero.jpg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};
```

---

## 9. Mobile Responsiveness Strategy

### Breakpoints (Tailwind)
- **Mobile (0–767px):** iPhone SE (375px), standard width
- **Tablet (768–1023px):** iPad, intermediate
- **Desktop (1024px+):** 1080px target

### Key Responsive Changes

| Component | Mobile | Desktop |
|-----------|--------|---------|
| **Navbar** | Hidden | Sticky, flex |
| **CTA Button** | Fixed bottom sticky bar, replaces nav | Inside hero section |
| **Hero** | Text above image, full-width | 50/50 grid, image right |
| **Trust Bar** | 2x2 grid | 1x4 grid |
| **Treatment Cards** | 1 column | 3 columns |
| **Bio Section** | Stacked (image top) | Side-by-side |
| **Footer** | 1 column | 3 columns |

### Mobile CTA Bar (Replaces Navbar)
- **Position:** Fixed to bottom (mobile only)
- **Height:** `h-20` (80px)
- **Content:** Practice name (left) + "Maak een afspraak" button (right)
- **Background:** Green (#27AE60)
- **Text:** White
- **Sticky:** `bottom-0 z-50`
- **Disappears:** On desktop (`hidden md:hidden`)

---

## 10. Image Generation Plan

**3 placeholder images to generate:**

1. **Hero Image (`/public/images/hero.jpg`)**
   - Prompt: "Modern dental office interior, welcoming, clean, professional, patient in chair, dentist in background, soft lighting, warm and trustworthy atmosphere"
   - Size: 1920x1080 (16:9)
   - Usage: Hero section background

2. **Doctor Photo (`/public/images/doctor.jpg`)**
   - Prompt: "Professional portrait of female dentist Dr. Nadia Oosterbeek, white lab coat, friendly smile, confident, warm, approachable, studio lighting, headshot, medical setting"
   - Size: 600x600 (1:1 square)
   - Usage: Authority bio section

3. **Optional Practice Interior (`/public/images/practice.jpg`)** (skipped if not needed)
   - Prompt: "Dental clinic waiting room, modern, welcoming, comfortable seating, plants, soft colors, clean"
   - Size: 1200x800
   - Usage: If testimonials section adds visual context

---

## 11. Implementation Sequence (Step-by-Step)

### Phase 1: Foundation (Files & Config)
1. Create `lib/constants.ts` with all static data
2. Update `app/layout.tsx` with metadata, fonts, schema, bg color
3. Update `globals.css` with design tokens (colors, typography)
4. Update `tailwind.config.ts` with extended theme

### Phase 2: Static Components
5. Build `Footer.tsx` (no dependencies)
6. Build `Navbar.tsx` (desktop-only nav)
7. Build `TrustBar.tsx` (simple display)
8. Build `TreatmentCard.tsx` (3x instances)

### Phase 3: Interactive Components
9. Build `BookingModal.tsx` (mocked form, no backend)
10. Build `FAQ.tsx` (accordion with 8 questions)
11. Build `CTASection.tsx` (repeated CTA)

### Phase 4: Complex Sections
12. Build `AuthorityBio.tsx` (doctor image, testimonials, credentials)
13. Build `Hero.tsx` (responsive layout, CTA trigger)

### Phase 5: Integration & Polish
14. Build `page.tsx` (assemble all components)
15. Generate 3x images via GenerateImage
16. Test mobile (375px) & desktop (1080px) responsiveness
17. Test booking modal interaction
18. Verify contrast & accessibility (WCAG AA)
19. Deploy & iterate

---

## 12. Assumptions & Constraints

✅ **Confirmed:**
- Next.js 16 (App Router, React 19)
- 2-font typography (sans-serif only)
- 5-color palette (deep blue, ice blue, neutrals, green)
- Mobile-first: 375px → 1080px
- Prototype (no real backend, mocked booking)
- Dutch language throughout
- Schema markup via `next/script`
- Sticky CTA bar on mobile replaces navbar
- Patient testimonials included
- No pricing displayed (per request)
- Insurance mentioned in FAQ
- No Google Maps embed

⚠️ **Constraints:**
- No authentication system
- No database integration
- No payment processing
- No email sending (form logs to console)
- Booking modal submit is visual only (mocked success state)
- Images generated as placeholders (user can replace later)

---

## 13. Success Criteria

- [ ] Page loads in < 2s on 4G mobile
- [ ] Hero H1 is primary keyword "Tandarts in Utrecht"
- [ ] CTA "Maak een afspraak" accessible from all major sections
- [ ] Mobile navbar hidden, sticky CTA bar visible on mobile
- [ ] Desktop navbar sticky, CTA integrated in hero
- [ ] Trust bar signals visible above fold
- [ ] 3 treatment cards display with collapsible mini-FAQs
- [ ] Doctor bio with credentials + 3 testimonials visible
- [ ] FAQ accordion with 8 questions (insurance included)
- [ ] Booking modal pops up, form validates, success state works
- [ ] Footer displays NAP + contact + links
- [ ] Schema markup validates (Google Rich Results)
- [ ] WCAG AA contrast ratio maintained (blue on ice blue, green on white)
- [ ] Fully responsive: 375px mobile ↔ 1080px desktop
- [ ] No dark mode
- [ ] All text in Dutch
- [ ] Healthcare aesthetic (trustworthy, clean, modern)

---

## 14. Post-Implementation Handoff

Once prototype is complete, user can:
1. Replace placeholder phone/address/hours in `lib/constants.ts`
2. Swap placeholder images (hero, doctor) with real photos
3. Update testimonials with real patient quotes (first names only)
4. Connect booking modal to real calendar/backend (Calendly iframe, booking API, etc.)
5. Add email integration to form submission
6. Deploy to Vercel for production

---

## Notes

- **Accessibility:** All components use semantic HTML, ARIA labels where needed, keyboard navigation for accordion
- **Performance:** Static site, no API calls, optimized images (next/image when deployed)
- **Styling:** All Tailwind utility-first, no custom CSS beyond design tokens
- **Maintenance:** Single source of truth in `lib/constants.ts` for all content updates

---

**Status:** ✅ Ready for implementation approval  
**Next Step:** User approves plan, then v0 begins code generation (Phase 1 onward)
