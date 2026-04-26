import { Phone, Mail, MapPin } from 'lucide-react'
import { PRACTICE_INFO, FOOTER_TREATMENTS, FOOTER_INFO_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PRACTICE_INFO.phone}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4" />
                  <span>{PRACTICE_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PRACTICE_INFO.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  <span>{PRACTICE_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{PRACTICE_INFO.address}</span>
              </li>
              <li className="pt-2 text-sm opacity-90">
                <p>Ma - Vr: 08:00 - 17:00</p>
                <p>Za: 09:00 - 13:00</p>
                <p>Zo: Gesloten</p>
              </li>
            </ul>
          </div>

          {/* Treatments Column */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Behandelingen</h3>
            <ul className="space-y-2">
              {FOOTER_TREATMENTS.map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#behandelingen"
                    className="transition-colors hover:text-accent"
                  >
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Informatie</h3>
            <ul className="space-y-2">
              {FOOTER_INFO_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm opacity-90">
              &copy; {new Date().getFullYear()} {PRACTICE_INFO.name}. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm opacity-90 transition-colors hover:text-accent hover:opacity-100"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm opacity-90 transition-colors hover:text-accent hover:opacity-100"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm opacity-90 transition-colors hover:text-accent hover:opacity-100"
                aria-label="Google Reviews"
              >
                Google Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
