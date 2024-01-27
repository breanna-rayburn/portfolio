'use client'

import Image from 'next/image'
import { Variants, motion } from 'framer-motion'

export default function AnimatedChevron({ href }: { href: string }) {
  const chevronAnimation: Variants = {
    initial: {
      opacity: 0,
      y: `-1em`,
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
    <motion.a
      href={href}
      className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center"
      variants={chevronAnimation}
    >
      <Image
        className=""
        src="/imgs/icons/chevronDown.svg"
        alt="Jump To"
        height={50}
        width={50}
      />
    </motion.a>
  )
}
