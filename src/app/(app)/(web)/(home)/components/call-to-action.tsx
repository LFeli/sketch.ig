'use client'

import Link from 'next/link'

import { DraftingCompassIcon, MoveUpRightIcon } from 'lucide-react'
import { motion } from 'motion/react'

import { BackgroundLines } from '@/components/background-lines'
import { FlipWords } from '@/components/flip-words'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { animationContainer, animationItem } from '@/constants/animation'

/**
 * A list of phrase pairs to be animated in sequence.
 */
const flipWords = [
  'Learn & Apply',
  'Think & Code',
  'Design & Iterate',
  'Break & Build',
  'Write & Refactor',
]

/**
 * Inline style object for a radial background gradient.
 */
const gradientStyle = {
  background: 'radial-gradient(50% 68% at 50% 100%, #171717, #ababab00)',
}

export function CallToAction() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationContainer}
    >
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <BackgroundLines
          svgOptions={{ duration: 5 }}
          className="flex w-full flex-col items-center justify-center space-y-4 px-4"
        >
          {/* logo icon */}
          <Badge
            variant={'default'}
            className="z-10 size-16 rounded-xl [&>svg]:size-8"
            asChild
          >
            <motion.span variants={animationItem}>
              <DraftingCompassIcon />
            </motion.span>
          </Badge>

          <motion.h1
            variants={animationItem}
            className="relative z-10 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-center font-bold font-sans text-4xl text-transparent leading-tight tracking-tight md:text-5xl lg:text-7xl dark:from-neutral-600 dark:to-white"
          >
            My Space to <br />
            <FlipWords words={flipWords} duration={3000} />
          </motion.h1>

          <motion.p
            variants={animationItem}
            className="z-10 mx-auto max-w-xl text-center text-neutral-700 text-sm md:text-lg dark:text-neutral-400"
          >
            From tiny components to full flows—this is where I explore ideas
            without limits. Sketch.ig is messy, iterative, and just for me (but
            feel free to look around).
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            variants={animationItem}
            className="z-10 flex items-center gap-2.5 pt-2"
          >
            <Button
              type="button"
              variant={'secondary'}
              className="h-10"
              asChild
            >
              <Link href={'#'}>What is this?</Link>
            </Button>

            <Button
              type="button"
              variant={'default'}
              className="h-10 text-secondary-foreground"
              asChild
            >
              <Link href={'#'}>
                Start Exploring
                <MoveUpRightIcon className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </BackgroundLines>

        {/* Decorative background element with a radial gradient. */}
        <div
          className="-translate-x-1/2 absolute bottom-0 left-1/2 z-auto h-[307px] w-full max-w-[1800px] flex-none overflow-hidden"
          style={gradientStyle}
        />
      </section>
    </motion.div>
  )
}
