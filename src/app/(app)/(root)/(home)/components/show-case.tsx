'use client'

import Link from 'next/link'

import { LightbulbIcon, MoveUpRightIcon } from 'lucide-react'
import { motion } from 'motion/react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { animationContainer, animationItem } from '@/constants/animation'

import { ShowCaseBento } from './show-case-bento'

export function Showcase() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationContainer}
    >
      <section className="relative flex min-h-screen flex-col items-center justify-between gap-y-6 space-y-4 overflow-hidden px-4 py-16 lg:py-24">
        <header className="flex flex-col items-center justify-center space-y-6">
          {/* tag badge */}
          <Badge
            variant={'secondary'}
            className="gap-2 rounded-full px-3 py-1.25 font-mono"
            asChild
          >
            <motion.span variants={animationItem}>
              The Playground Effect
              <LightbulbIcon />
            </motion.span>
          </Badge>

          <motion.h2
            variants={animationItem}
            className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-center font-bold font-sans text-3xl text-transparent leading-tight tracking-tight md:text-5xl lg:text-6xl dark:from-neutral-600 dark:to-white"
          >
            Ideas Start Here
          </motion.h2>

          <motion.p
            variants={animationItem}
            className="mx-auto max-w-xl text-center text-neutral-700 text-sm md:text-lg dark:text-neutral-400"
          >
            “Not every experiment becomes a component. But every component
            started as an experiment.” This could be accompanied by a short
            quote or even a rotating carousel of micro-ideas.
          </motion.p>
        </header>

        <ShowCaseBento />

        <motion.footer variants={animationItem}>
          <Button
            type="button"
            variant={'default'}
            className="h-10 bg-chart-1 text-secondary-foreground hover:bg-chart-1/80"
            asChild
          >
            <Link href={'https://github.com/LFeli'}>
              See more in my Github
              <MoveUpRightIcon className="size-4" />
            </Link>
          </Button>
        </motion.footer>
      </section>
    </motion.div>
  )
}
