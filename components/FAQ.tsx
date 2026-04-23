'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ_QUESTIONS } from '@/lib/constants'

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Veelgestelde Vragen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Antwoorden op de meest gestelde vragen over onze praktijk en
            behandelingen.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_QUESTIONS.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`faq-${faq.id}`}
              className="mb-3 overflow-hidden rounded-lg border-0 bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:no-underline [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
