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
