'use client'

import { motion } from 'framer-motion'

export default function StaggerWrapper({ children }: { children: any }) {
  const wrapperAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 1 } },
  }
  return (
    <motion.div
      whileInView="visible"
      viewport={{ once: true }}
      initial="initial"
      animate="animate"
      variants={wrapperAnimation}
    >
      {children}
    </motion.div>
  )
}
