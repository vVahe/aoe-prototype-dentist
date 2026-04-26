// Practice Information
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
      'Diploma ACTA (Academic Centre for Dentistry Amsterdam)',
      'BIG-registratie nr. 12345678',
      'Invisalign Certified Provider',
      '14+ jaren klinische ervaring',
    ],
    bio: 'Dr. Nadia Oosterbeek combineert haar passie voor tandheelkunde met een persoonlijke benadering. Met meer dan 14 jaar ervaring begrijpt zij dat elk bezoek aan de tandarts een vertrouwensrelatie vereist. Zij maakt gebruik van de nieuwste technieken en apparatuur om u de beste zorg te bieden, terwijl uw comfort altijd voorop staat.',
  },
}

// Treatment Cards
export const TREATMENTS = [
  {
    id: 'checkup',
    icon: 'Tooth',
    title: 'Controle & Schoonmaak',
    description:
      'Professionele tandreiniging en grondig onderzoek voor optimale tandgezondheid. Wij detecteren problemen vroeg en houden uw gebit in topconditie.',
    faq: [
      { q: 'Hoe lang duurt het?', a: 'Ongeveer 45 minuten inclusief onderzoek en reiniging.' },
      { q: 'Is het pijnloos?', a: 'Ja, de behandeling is volledig pijnvrij.' },
    ],
  },
  {
    id: 'implants',
    icon: 'Implant',
    title: 'Implantaten & Prothetiek',
    description:
      'Hoogwaardige tandimplantaten voor een blijvend resultaat. Wij bieden complete oplossingen van consultatie tot nazorg voor ontbrekende tanden.',
    faq: [
      { q: 'Hoe lang gaat een implantaat mee?', a: 'Met goede verzorging 20 jaar of langer.' },
      { q: 'Doet de behandeling pijn?', a: 'De ingreep gebeurt onder verdoving, u voelt niets.' },
    ],
  },
  {
    id: 'cosmetic',
    icon: 'Sparkles',
    title: 'Esthetische Tandheelkunde',
    description:
      'Van tandbleking tot facings: wij helpen u aan de perfecte glimlach. Moderne technieken voor natuurlijk ogende resultaten.',
    faq: [
      { q: 'Hoe lang duurt tandbleking?', a: 'Eén sessie van ongeveer 60 minuten.' },
      { q: 'Is het schadelijk voor mijn tanden?', a: 'Nee, wij gebruiken veilige, professionele methodes.' },
    ],
  },
]

// Trust Signals
export const TRUST_SIGNALS = [
  {
    id: 'rating',
    value: '4.9/5',
    label: '127 reviews op Google',
    icon: 'Star',
  },
  {
    id: 'experience',
    value: '14 jaar',
    label: 'Klinische ervaring',
    icon: 'Award',
  },
  {
    id: 'credentials',
    value: 'BIG',
    label: 'Geregistreerd & erkend',
    icon: 'Shield',
  },
  {
    id: 'guarantee',
    value: '€25',
    label: 'Eerste consult',
    icon: 'Heart',
  },
]

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jan de Vries',
    text: 'Professioneel en vriendelijk. Dr. Oosterbeek neemt echt de tijd voor je en legt alles duidelijk uit.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Maria Hendriks',
    text: 'Eindelijk een tandarts waar ik me comfortabel voel! Geen haast, geen stress, gewoon goede zorg.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Peter Kowalski',
    text: 'Snelle, pijnloze bleking met een fantastisch resultaat. Zeer tevreden en zeker aanbevolen!',
    stars: 5,
  },
]

// FAQ Questions
export const FAQ_QUESTIONS = [
  {
    id: 1,
    question: 'Hoe lang duurt mijn eerste afspraak?',
    answer:
      'Uw eerste afspraak duurt ongeveer 45 minuten. Dit omvat een uitgebreide intake, mondonderzoek, eventuele röntgenfoto\'s en een toelichting op het behandelplan.',
  },
  {
    id: 2,
    question: 'Is tandheelkunde pijnloos?',
    answer:
      'Moderne anesthesie maakt de meeste procedures volledig pijnvrij. U kunt druk of trillingen voelen, maar geen pijn. Wij nemen altijd de tijd om u comfortabel te maken.',
  },
  {
    id: 3,
    question: 'Welke zorgverzekeringen accepteert u?',
    answer:
      'Wij accepteren alle standaard Nederlandse zorgverzekeringen. Voor specifieke behandelingen raden wij aan vooraf uw dekking te controleren. Wij helpen u graag met de administratie.',
  },
  {
    id: 4,
    question: 'Hoeveel kost een tandreiniging?',
    answer:
      'Een standaard tandreiniging wordt meestal vergoed door uw basisverzekering. Eventuele eigen bijdrage hangt af van uw polis. Wij informeren u altijd vooraf over de kosten.',
  },
  {
    id: 5,
    question: 'Hoe lang houdt mijn vulling of behandeling?',
    answer:
      'Dit verschilt per behandeling. Composietvullingen gaan gemiddeld 7-10 jaar mee, terwijl implantaten met goede verzorging 20 jaar of langer kunnen meegaan.',
  },
  {
    id: 6,
    question: 'Kan ik tandvlees- of tandsteenproblemen voorkomen?',
    answer:
      'Ja, door twee keer per dag te poetsen, dagelijks te flossen, 1-2 keer per jaar professionele reiniging en een gezond dieet kunt u veel problemen voorkomen.',
  },
  {
    id: 7,
    question: 'Wat als ik tandvrees heb?',
    answer:
      'Wij begrijpen tandvrees volledig. Wij nemen extra tijd, bieden ontspanningstechnieken en indien nodig sedatie-opties. Uw comfort staat voorop.',
  },
  {
    id: 8,
    question: 'Hoe moet ik mijn tanden verzorgen na een ingreep?',
    answer:
      'U ontvangt altijd specifieke nazorginstructies. Over het algemeen: vermijd hard voedsel de eerste 48 uur, spoel met zoutwater en neem voorgeschreven medicatie indien van toepassing.',
  },
]

// Navigation Links
export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#behandelingen', label: 'Behandelingen' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

// Treatment Types for Booking
export const TREATMENT_TYPES = [
  'Controle & Schoonmaak',
  'Tandreiniging',
  'Vulling',
  'Implantaat consultatie',
  'Tandbleking',
  'Esthetische behandeling',
  'Spoedgeval',
  'Anders',
]

// Available Appointment Slots (mocked)
export const AVAILABLE_SLOTS = [
  { date: '2026-04-28', times: ['09:00', '10:30', '14:00', '15:30'] },
  { date: '2026-04-29', times: ['08:30', '11:00', '13:30', '16:00'] },
  { date: '2026-04-30', times: ['09:30', '11:30', '14:30'] },
  { date: '2026-05-01', times: ['08:00', '10:00', '13:00', '15:00'] },
  { date: '2026-05-02', times: ['09:00', '11:00', '14:00'] },
]

// Footer Links
export const FOOTER_TREATMENTS = [
  'Controle & Schoonmaak',
  'Implantaten',
  'Esthetische tandheelkunde',
  'Tandbleking',
]

export const FOOTER_INFO_LINKS = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Algemene Voorwaarden' },
  { href: '#', label: 'Annuleringsbeleid' },
  { href: '#contact', label: 'Contact' },
]
