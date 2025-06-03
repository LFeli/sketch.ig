'use client'

import { motion } from 'motion/react'
import React from 'react'

import { beamsPaths, beamsSvgPath } from '@/constants/background'
import { cn } from '@/lib/utils'

interface BeamsBackgroundProps {
  className?: string
}

/**
 * Renders a full-screen animated SVG background with radial and linear gradients.
 * Uses Framer Motion to animate SVG paths and gradients for a dynamic visual effect.
 */
export const BeamsBackground = React.memo(
  ({ className }: BeamsBackgroundProps) => {
    return (
      <figure
        className={cn(
          'absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]',
          className
        )}
      >
        <svg
          className="pointer-events-none absolute z-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Static base beam */}
          <path
            d={beamsSvgPath[0]}
            stroke="url(#paint0_radial_242_278)"
            strokeOpacity="0.05"
            strokeWidth="0.5"
          />

          {/* Animated beam lines */}
          {beamsPaths.map((path, index) => (
            <motion.path
              key={`path-${index}`}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
            />
          ))}

          <defs>
            {/* Animated gradient definitions for each path */}
            {beamsPaths.map((_, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: '0%',
                  x2: '0%',
                  y1: '0%',
                  y2: '0%',
                }}
                animate={{
                  x1: ['0%', '100%'],
                  x2: ['0%', '95%'],
                  y1: ['0%', '100%'],
                  y2: ['0%', `${93 + Math.random() * 8}%`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  ease: 'easeInOut',
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 10,
                }}
              >
                <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
                <stop offset="15%" stopColor="#00BFFF" />
                <stop offset="50%" stopColor="#1A9FEF" />
                <stop offset="85%" stopColor="#1B83D6" />
                <stop offset="100%" stopColor="#1A6CBF" stopOpacity="0" />
              </motion.linearGradient>
            ))}

            {/* Radial gradient background */}
            <radialGradient
              id="paint0_radial_242_278"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="RrSpaceOnUse"
              gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
            >
              <stop offset="0.0666667" stopColor="#d4d4d4" />
              <stop offset="0.243243" stopColor="#d4d4d4" />
              <stop offset="0.43594" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </figure>
    )
  }
)

BeamsBackground.displayName = 'BeamsBackground'
