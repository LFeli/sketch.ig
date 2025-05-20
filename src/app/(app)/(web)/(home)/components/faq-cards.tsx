'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Card {
  title: string
  description: string
}

const cards: Card[] = [
  {
    title: 'What is Sketch.ig, really?',
    description:
      'Sketch.ig is my personal playground — a space where I break, build, and explore UI ideas without production pressure.',
  },
  {
    title: 'Why build outside a real product?',
    description:
      'Free from deadlines and constraints, I can iterate faster, test bold ideas, and sharpen my creative muscle.',
  },
  {
    title: 'Is this open source or personal?',
    description:
      "It's personal, but I may open up parts of it. Think of it as a collection of my ongoing experiments and thoughts.",
  },
  {
    title: 'What kind of things live here?',
    description:
      'Micro interactions, design patterns, animation prototypes, custom components, hooks, and experiments that don’t fit anywhere else.',
  },
  {
    title: 'Why the name “Sketch.ig”?',
    description:
      "It hints at quick ideas (sketches), but also pays tribute to imagination. It's not a product — it's a space.",
  },
  {
    title: 'Can I use these components in my own projects?',
    description:
      'Feel free to take inspiration! While not optimized for production, much of the logic and structure is reusable.',
  },
  {
    title: 'Is this part of a bigger project?',
    description:
      'Sometimes experiments here evolve into real features or libraries — but this space stays loose and idea-first.',
  },
]

export function FaqCards() {
  return (
    <div className="z-1 mx-auto mb-0 grid w-full max-w-3xl grid-cols-1 rounded-xl bg-card/50 p-4 px-6 backdrop-blur-sm">
      <Accordion type="single" collapsible>
        {cards.map((card, index) => (
          <AccordionItem key={index} value={String(index)}>
            <AccordionTrigger className="text-neutral-900 dark:text-neutral-100">
              {card.title}
            </AccordionTrigger>

            <AccordionContent className="text-neutral-700 dark:text-neutral-400">
              {card.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
