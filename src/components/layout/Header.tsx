'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  url: string
  newTab?: boolean | null
}

interface HeaderProps {
  siteName?: string
  items?: NavItem[]
  ctaButton?: { label?: string | null; url?: string | null; style?: string | null } | null
}

export function Header({ siteName = 'Builder', items = [], ctaButton }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="text-display-xs font-display gradient-text">
          {siteName}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target={item.newTab ? '_blank' : undefined}
              className="text-body-sm text-neutral-400 hover:text-white transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {ctaButton?.label && ctaButton?.url && (
            <a href={ctaButton.url} className="btn-primary text-body-sm py-2.5 px-6">
              {ctaButton.label}
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="container-wide py-6 flex flex-col gap-4">
              {items.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  onClick={() => setMobileOpen(false)}
                  className="text-body-lg text-neutral-300 hover:text-white transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              {ctaButton?.label && ctaButton?.url && (
                <a href={ctaButton.url} className="btn-primary text-center mt-2">
                  {ctaButton.label}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
