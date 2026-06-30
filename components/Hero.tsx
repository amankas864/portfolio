'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const handleResumeDownload = () => {
  const link = document.createElement('a')
  link.href = '/Resume_AK.pdf'
  link.download = 'Aman_Kashyap_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

  const socialLinks = [
    { icon: Github, href: 'https://github.com/amankas864', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/aman-kashyap-3a4bb7237', label: 'LinkedIn' },
  ]

  return (
    <section id="home" className="section-padding pt-32 lg:pt-40">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Hello, I'm{' '}
                <span className="gradient-text">Aman Kashyap</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                Full-Stack Developer & Data Scientist
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg max-w-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                Passionate about creating innovative web solutions and extracting insights from data. 
                Combining modern web technologies with machine learning to build impactful applications.
              </motion.p>
            </div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex gap-2">
                <button
                  onClick={handleResumeDownload}
                  className="btn-secondary group"
                >
                  <Download className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  My Resumé
                </button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center space-x-6"
            >
              <span style={{ color: 'var(--text-secondary)' }}>Follow me:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Kali Linux Logo with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Kali Linux Logo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 p-6 sm:p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  {/* Kali Linux Logo */}
                  <Image
                    src="/kali.png"
                    alt="Kali Linux Logo"
                    width={200}
                    height={200}
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
                  />
                </div>
              </div>
              
              {/* Floating Coding Icons */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-8 h-8 sm:w-12 sm:h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white text-sm sm:text-xl"
              >
                💻
              </motion.div>
              <motion.div
                animate={{ y: [15, -15, 15], rotate: [360, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-6 h-6 sm:w-10 sm:h-10 bg-secondary-500 rounded-lg flex items-center justify-center text-white text-xs sm:text-lg"
              >
                ⚡
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-6 sm:-left-12 w-6 h-6 sm:w-8 sm:h-8 bg-primary-400 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm"
              >
                🔧
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-6 sm:-right-12 w-6 h-6 sm:w-8 sm:h-8 bg-secondary-400 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm"
              >
                🚀
              </motion.div>
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 sm:-left-16 w-4 h-4 sm:w-6 sm:h-6 bg-primary-300 rounded-full flex items-center justify-center text-white text-xs"
              >
                ⚙️
              </motion.div>
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [360, 180, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 sm:-right-16 w-4 h-4 sm:w-6 sm:h-6 bg-secondary-300 rounded-full flex items-center justify-center text-white text-xs"
              >
                🔗
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
