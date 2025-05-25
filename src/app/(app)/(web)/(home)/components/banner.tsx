'use client'

import { motion } from 'motion/react'

import { AuroraBackground } from '@/components/aurora-background'
import { Button } from '@/components/ui/button'
import { animationContainer, animationItem } from '@/constants/animation'
import { MoveUpRightIcon } from 'lucide-react'
import Link from 'next/link'

export function Banner() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationContainer}
    >
      <div className="relative mx-auto my-16 flex h-full max-h-96 max-w-container flex-col items-center justify-between px-4 lg:my-24">
        <AuroraBackground className="w-full space-y-6 overflow-hidden rounded-3xl py-16 lg:py-24">
          <header className="z-10 space-y-3">
            <motion.h2
              variants={animationItem}
              className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-center font-bold font-sans text-3xl text-transparent leading-tight tracking-tight md:text-5xl lg:text-6xl dark:from-neutral-600 dark:to-white"
            >
              No Rules. Just Pixels.
            </motion.h2>

            <motion.p
              variants={animationItem}
              className="mx-auto mb-4 max-w-2xl text-center text-neutral-700 text-sm md:text-lg dark:text-neutral-400"
            >
              sketch.ig is my little corner of the internet to tinker, design,
              and deconstruct UI ideas with no pressure. Every component here is
              a what-if, a maybe, or a someday.
            </motion.p>
          </header>

          <motion.footer variants={animationItem} className="z-10">
            <Button
              type="button"
              variant={'secondary'}
              className="h-10 text-secondary-foreground"
              asChild
            >
              <Link href={'#'}>
                Start Exploring
                <MoveUpRightIcon className="size-4" />
              </Link>
            </Button>
          </motion.footer>
        </AuroraBackground>
      </div>
    </motion.div>
  )
}
