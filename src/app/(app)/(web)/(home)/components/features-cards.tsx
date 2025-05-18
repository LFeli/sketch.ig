'use client'

import {
  BrainCircuitIcon,
  BrickWallIcon,
  BrushIcon,
  type LucideIcon,
  PackageIcon,
  StickyNoteIcon,
  TestTubeDiagonalIcon,
  Wand2Icon,
} from 'lucide-react'
import { motion } from 'motion/react'

import { Badge } from '@/components/ui/badge'

import { animationItem } from '@/constants/animation'
import { cn } from '@/lib/utils'

interface Card {
  title: string
  description: string
  icon?: LucideIcon
}

const cards: Card[] = [
  {
    title: 'UI Experiments',
    description:
      "Testing new interactions, layouts and visuals so you don't have to worry about finishing.",
    icon: TestTubeDiagonalIcon,
  },

  {
    title: 'Reusable Logic',
    description:
      'Prototyping and refine hooks, patterns, and state machines for real-world use.',
    icon: BrainCircuitIcon,
  },

  {
    title: 'Design Systems',
    description:
      'Playing with themes, tokens, and typographic rhythm in isolation.',
    icon: BrushIcon,
  },

  {
    title: 'Component Blocks',
    description:
      'From buttons complex items — building a components for using in my projects.',
    icon: PackageIcon,
  },
  {
    title: 'Notes and Snippets',
    description:
      'Notes, ideas or even a short post on how I solved a certain problem in my daily life.',
    icon: StickyNoteIcon,
  },
  {
    title: "It's My Playground",
    description:
      'No rules, no deadlines. Just a space to build, break, and learn for something.',
    icon: Wand2Icon,
  },
]

export function FeaturesCards() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <motion.article
          key={index}
          variants={animationItem}
          className={cn(
            'group/feature relative flex flex-col border-b py-12 lg:border-r lg:border-b-0 dark:border-neutral-800',
            {
              'lg:border-l dark:border-neutral-800': index === 0 || index === 3,
              'lg:border-b dark:border-neutral-800': index < 3,
            }
          )}
        >
          {index < 3 && (
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
          )}
          {index >= 3 && (
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
          )}

          <div className="space-y-4 px-10">
            {card.icon && (
              <Badge className="z-10 size-10 rounded-xl [&>svg]:size-6">
                <card.icon />
              </Badge>
            )}

            <div className="relative z-10 mb-2 font-bold text-lg">
              <div className="-left-10 absolute inset-y-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />

              <span className="inline-block font-mono text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
                {card.title}
              </span>
            </div>

            <p className="relative z-10 max-w-xs text-neutral-600 text-xs leading-relaxed dark:text-neutral-300">
              {card.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
