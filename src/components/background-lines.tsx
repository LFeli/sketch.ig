'use client'

import { linesColors, linesPaths } from '@/constants/background'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface SvgOptions {
  duration?: number
}

interface BackgroundLinesProps {
  children: React.ReactNode
  className?: string
  svgOptions?: SvgOptions
}

/**
 * Animation variants for an SVG path using Framer Motion.
 * Defines stroke dash and opacity transitions for initial and animate states.
 */
const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: '50 800' },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: '20 800',
    opacity: [0, 1, 1, 0],
  },
}

/**
 * Renders an animated SVG with looping path animations using Framer Motion.
 *
 * @param {SvgProps} props - The properties for the SVG component.
 * @param {Object} props.svgOptions - Optional settings for animation duration.
 * @returns {JSX.Element} The animated SVG element.
 */
function Svg({ svgOptions }: { svgOptions?: SvgOptions }) {
  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 h-full w-full"
    >
      {linesPaths.map((path, index) => (
        <motion.path
          key={`path-first-${index}`}
          d={path}
          variants={pathVariants}
          initial="initial"
          animate="animate"
          stroke={linesColors[index]}
          strokeWidth="2.3"
          strokeLinecap="round"
          transition={{
            duration: svgOptions?.duration || 10,
            ease: 'linear',
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
            delay: Math.floor(Math.random() * 10),
            repeatDelay: Math.floor(Math.random() * 10 + 2),
          }}
        />
      ))}
    </motion.svg>
  )
}

export function BackgroundLines({
  children,
  className,
  svgOptions,
}: BackgroundLinesProps) {
  return (
    <div
      className={cn(
        'h-[20rem] w-full bg-white md:h-screen dark:bg-black',
        className
      )}
    >
      <Svg svgOptions={svgOptions} />
      {children}
    </div>
  )
}
