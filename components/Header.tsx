'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Safe theme access
  let theme = 'light'
  let toggleTheme = () => {}
  
  try {
    const themeContext = useTheme()
    theme = themeContext.theme
    toggleTheme = themeContext.toggleTheme
  } catch (error) {
    // Theme context not available during SSR
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // External page link
      window.location.href = href
    } else {
      // Section link on same page
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-custom border-b' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
        borderBottomColor: scrolled ? 'var(--border-light)' : 'transparent'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Image
              src="/AK signature.png"
              alt="AK Signature"
              width={160}
              height={50}
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="transition-colors duration-300 font-medium"
                style={{ 
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle - Only render when mounted */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-secondary)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = 'var(--bg-hover)';
                  target.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = 'var(--bg-card)';
                  target.style.color = 'var(--text-secondary)';
                }}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 transition-colors duration-300"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
          >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderTopColor: 'var(--border-light)'
              }}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 transition-all duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = 'var(--accent-primary)';
                      target.style.backgroundColor = 'var(--bg-hover)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = 'var(--text-secondary)';
                      target.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
