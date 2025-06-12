import type { Variants } from 'motion/react'

/**
 * Container animation variants controlling stagger and delay of child animations.
 */
export const animationContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
}

/**
 * Individual item animation variants for fade-in and upward movement.
 */
export const animationItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

/**
 * Animation variant for revealing a single entry with a fade + upward motion.
 */
export const entryReveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
}

/**
 * Animation variant for fading in a group of elements with staggered children.
 */
export const fadeGroup = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
}
