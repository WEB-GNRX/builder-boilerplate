'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* ── Animated background ── */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-4">
        {/* Giant 404 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block mb-4 select-none"
        >
          <span
            className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white/10 via-white/5 to-transparent leading-none"
            style={{ fontSize: 'clamp(8rem, 25vw, 20rem)' }}
          >
            404
          </span>
          {/* Glow layer */}
          <span
            className="absolute inset-0 font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-400/20 to-secondary-400/20 blur-2xl leading-none"
            style={{ fontSize: 'clamp(8rem, 25vw, 20rem)' }}
            aria-hidden
          >
            404
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-display-md font-display text-white mb-4"
        >
          Page not found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-body-lg text-neutral-500 max-w-md mx-auto mb-10"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mb-10"
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full
                       bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium
                       text-body-md shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40
                       hover:-translate-y-0.5 transition-all duration-300"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full
                       border border-white/10 text-neutral-400 font-medium text-body-md
                       hover:border-white/25 hover:text-white hover:bg-white/5
                       transition-all duration-300"
          >
            Contact us
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
