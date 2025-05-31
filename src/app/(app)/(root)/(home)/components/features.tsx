'use client'

import { motion } from 'motion/react'

import { Badge } from '@/components/ui/badge'
import { animationContainer, animationItem } from '@/constants/animation'
import { SparklesIcon } from 'lucide-react'
import { FeaturesCards } from './features-cards'

export function Features() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationContainer}
    >
      <section className="relative flex min-h-screen flex-col items-center justify-between space-y-4 overflow-hidden px-4 py-16 lg:py-24">
        <header className="flex flex-col items-center justify-center space-y-6">
          {/* tag badge */}
          <Badge
            variant={'secondary'}
            className="gap-2 rounded-full px-3 py-1.25 font-mono"
            asChild
          >
            <motion.span variants={animationItem}>
              Features
              <SparklesIcon />
            </motion.span>
          </Badge>

          <motion.h2
            variants={animationItem}
            className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-center font-bold font-sans text-3xl text-transparent leading-tight tracking-tight md:text-5xl lg:text-6xl dark:from-neutral-600 dark:to-white"
          >
            A Playground, Not a Product
          </motion.h2>

          <motion.p
            variants={animationItem}
            className="mx-auto max-w-xl text-center text-neutral-700 text-sm md:text-lg dark:text-neutral-400"
          >
            sketch.ig is my personal collection of micro-components, creative
            snippets, and experiments. It's where ideas get broken, rebuilt, and
            reimagined—fast
          </motion.p>
        </header>

        <FeaturesCards />

        <footer className="mx-auto max-w-xl pt-8 text-center font-mono text-neutral-700 text-xs lg:text-sm dark:text-neutral-400">
          This space isn't about perfection — it's about iteration.
        </footer>
      </section>
    </motion.div>
  )
}
