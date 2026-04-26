import Image from 'next/image'
import { Star, CheckCircle, Quote } from 'lucide-react'
import { PRACTICE_INFO, TESTIMONIALS } from '@/lib/constants'

export function AuthorityBio() {
  return (
    <section id="over-ons" className="bg-background py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Doctor Image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/doctor.jpg"
                alt={`${PRACTICE_INFO.doctor.name}, tandarts in Utrecht`}
                width={600}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>

          {/* Bio Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Over {PRACTICE_INFO.doctor.name}
            </h2>

            {/* Credentials */}
            <ul className="mb-6 space-y-2">
              {PRACTICE_INFO.doctor.credentials.map((credential, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>

            {/* Bio Paragraph */}
            <p className="leading-relaxed text-muted-foreground">
              {PRACTICE_INFO.doctor.bio}
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 md:mt-24">
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Wat onze patienten zeggen
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.id}
                className="relative rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Quote Icon */}
                <Quote className="absolute right-4 top-4 h-8 w-8 text-accent/20" />

                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="mb-4 leading-relaxed text-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Name */}
                <cite className="not-italic text-sm font-medium text-muted-foreground">
                  - {testimonial.name}
                </cite>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
