'use client'

import { motion } from 'motion/react'

import { LinesBackground } from '@/components/lines-background'
import { animationContainer, animationItem } from '@/constants/animation'

/**
 * Inline style object for a radial background gradient.
 */
const gradientStyle = {
  background: 'radial-gradient(50% 68% at 50% 100%, #171717, #ababab00)',
}

const colors = [
  '#fff1f2',
  '#ffe4e6',
  '#fecdd3',
  '#fda4af',
  '#fb7185',
  '#f43f5e',
  '#e11d48',
  '#be123c',
  '#f5f3ff',
  '#ede9fe',
  '#ddd6fe',
  '#c4b5fd',
  '#a78bfa',
  '#8b5cf6',
  '#7c3aed',
  '#6b21a8',
  '#eff6ff',
  '#dbeafe',
  '#93c5fd',
  '#3b82f6',
]

export function ChangelogCallToAction() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationContainer}
    >
      <section className="relative flex min-h-screen flex-col items-center justify-center space-y-4 overflow-hidden px-4 py-16 lg:py-24">
        <LinesBackground
          svgOptions={{ duration: 5, colors }}
          className="flex w-full flex-col items-center justify-center space-y-4 px-4"
        >
          <motion.h1
            variants={animationItem}
            className="relative z-10 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-center font-bold font-sans text-4xl text-transparent leading-tight tracking-tight md:text-5xl lg:text-7xl dark:from-neutral-600 dark:to-white"
          >
            Tiny Wins, Big Experiments
          </motion.h1>

          <motion.p
            variants={animationItem}
            className="z-10 mx-auto max-w-xl text-center text-neutral-700 text-sm md:text-lg dark:text-neutral-400"
          >
            A running list of what I'm playing with, fixing, or reinventing—an
            open journal of messy changes, tiny wins, and wild ideas inside my
            personal playground.
          </motion.p>
        </LinesBackground>

        {/* Decorative background element with a radial gradient. */}
        <div
          className="-translate-x-1/2 absolute bottom-0 left-1/2 z-auto h-[307px] w-full max-w-[1800px] flex-none overflow-hidden"
          style={gradientStyle}
        />
      </section>
    </motion.div>
  )
}
