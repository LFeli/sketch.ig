'use client'

import { motion } from 'motion/react'

import { BackgroundBeams } from '@/components/beams-background'
import { Badge } from '@/components/ui/badge'
import { animationContainer, animationItem } from '@/constants/animation'
import { InfinityIcon } from 'lucide-react'

export function Faq() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationContainer}
    >
      <section className="relative flex min-h-screen flex-col items-center justify-between space-y-4 overflow-hidden px-4 py-16 lg:py-24">
        <header className="z-10 flex flex-col items-center justify-center space-y-6">
          {/* tag badge */}
          <Badge
            variant={'secondary'}
            className="gap-2 rounded-full px-3 py-1.25 font-mono"
            asChild
          >
            <motion.span variants={animationItem}>
              The Thinking Space
              <InfinityIcon />
            </motion.span>
          </Badge>

          <motion.h2
            variants={animationItem}
            className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-center font-bold font-sans text-3xl text-transparent leading-tight tracking-tight md:text-5xl lg:text-6xl dark:from-neutral-600 dark:to-white"
          >
            Thoughts Behind the Clicks
          </motion.h2>

          <motion.p
            variants={animationItem}
            className="mx-auto max-w-xl text-center text-neutral-700 text-sm md:text-lg dark:text-neutral-400"
          >
            Some projects are planned. Others just happen. Here's what fuels the
            chaos behind each sketch and interaction.
          </motion.p>
        </header>

        <BackgroundBeams />
      </section>
    </motion.div>
  )
}
