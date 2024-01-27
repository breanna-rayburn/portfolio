'use client'

import { Variants, motion } from 'framer-motion'

export default function AnimatedText({ text }: { text: string }) {
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
    <motion.p variants={characterAnimation} className="text-4xl">
      {text}
    </motion.p>
  )
}
