'use client'

import { AnimatePresence, motion } from 'motion/react'
import React from 'react'

import { cn } from '@/lib/utils'

interface FlipWordsProps {
  words: string[]
  duration?: number
  className?: string
}

export function FlipWords({
  words,
  duration = 3000,
  className,
}: FlipWordsProps) {
  const [currentWord, setCurrentWord] = React.useState<string>(words[0])
  const [isAnimating, setIsAnimating] = React.useState<boolean>(false)

  /**
   * Advances to the next word in the list and triggers the animation state.
   */
  const startAnimation = React.useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0]

    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])

  /**
   * Starts a looping interval to trigger word animation if not already animating.
   * Cleans up the interval on component unmount or dependency change.
   */
  React.useEffect(() => {
    if (!isAnimating) {
      const interval = setInterval(() => {
        startAnimation()
      }, duration)

      return () => clearInterval(interval)
    }
  }, [isAnimating, duration, startAnimation])

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <motion.div
        key={currentWord}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: 30,
          filter: 'blur(8px)',
          scale: 1,
          position: 'absolute',
          width: '100%',
        }}
        className={cn(
          'relative z-10 inline-block px-2 text-left text-neutral-900 dark:text-neutral-100',
          className
        )}
      >
        {/**
         * Splits the current phrase into words and animates each word sequentially.
         * Each word's characters are then individually animated in a staggered fashion.
         */}
        {currentWord.split(' ').map((word, index) => (
          <motion.span
            key={word + index}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: index * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {/*
             * Animates each character of the word with a staggered entrance effect.
             */}
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={word + charIndex}
                initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: index * 0.3 + charIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}

            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
