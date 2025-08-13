'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/amankas864', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/aman-kashyap-3a4bb7237', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/aman_kashyap_a.k_', label: 'Instagram' },
    { icon: Mail, href: 'mailto:devaman0110@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">Aman Kashyap</span>
            </div>
            <p className="text-dark-400 max-w-xs">
              Full-Stack Developer & Data Scientist passionate about creating innovative solutions 
              and extracting meaningful insights from data.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-dark-800 border border-dark-700 rounded-lg flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-2 text-dark-400">
              <p>Email: devaman0110@gmail.com</p>
              <p>Location: Jagdalpur, Chhattisgarh</p>
              <p>Available for remote/full-time work</p>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-primary-400 mb-2">Resume Downloads</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-sm text-dark-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Full-Stack Developer Resume
                </a>
                <a
                  href="#"
                  className="block text-sm text-dark-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Data Science Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-dark-400 text-sm">
            © 2024 Aman Kashyap. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors duration-300 text-sm"
            >
              Naukri.com Profile
            </a>
            <a
              href="https://leetcode.com/u/amankas864/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors duration-300 text-sm"
            >
              LeetCode Profile
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer
