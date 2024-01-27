'use client'

import { Variants, motion } from 'framer-motion'

export default function AnimatedTitle({ text }: { text: string }) {
  const wordAnimation: Variants = {
    initial: {},
    animate: {},
  }

  const characterAnimation: Variants = {
    initial: {
      opacity: 0,
      y: `0.25em`,
    },
    animate: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.h1 aria-label={text} className="text-8xl" variants={wordAnimation}>
      {text.split(/(\s+)/).map((word, i) => {
        {
          return word.trim() ? (
            <motion.span
              key={i}
              aria-hidden="true"
              variants={wordAnimation}
              transition={{
                delayChildren: i * 0.25,
                staggerChildren: 0.05,
              }}
              className="inline-block whitespace-nowrap"
            >
              {word.split('').map((character, i) => {
                return (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    variants={characterAnimation}
                    className="inline-block"
                  >
                    {character}
                  </motion.span>
                )
              })}
            </motion.span>
          ) : (
            <span key={i} className="inline" aria-hidden="true">
              {' '}
            </span>
          )
        }
      })}
    </motion.h1>
  )
}
