'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const handleResumeDownload = (type: 'fullstack' | 'datascience') => {
    // This would link to your actual resume files
    const resumeUrls = {
      fullstack: '/Resume_Full_Stack.pdf',
      datascience: '/Resume_DS.pdf'
    }
    
    const link = document.createElement('a')
    link.href = resumeUrls[type]
    link.download = `Aman_Kashyap_${type === 'fullstack' ? 'FullStack' : 'DataScience'}_Resume.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/amankas864', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/aman-kashyap-3a4bb7237', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/aman_kashyap_a.k_', label: 'Instagram' },
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
                className="text-4xl lg:text-6xl font-bold text-white"
              >
                Hello, I'm{' '}
                <span className="gradient-text">Aman Kashyap</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl text-dark-300 font-medium"
              >
                Full-Stack Developer & Data Scientist
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-dark-400 max-w-lg"
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
              <button className="btn-primary group">
                Got a project?
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleResumeDownload('fullstack')}
                  className="btn-secondary group"
                >
                  <Download className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Full-Stack Resume
                </button>
                
                <button
                  onClick={() => handleResumeDownload('datascience')}
                  className="btn-secondary group"
                >
                  <Download className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Data Science Resume
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
              <span className="text-dark-400">Follow me:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full p-2">
                <div className="w-full h-full bg-dark-900 rounded-full overflow-hidden">
                  {/* Profile Image */}
                  <Image
                    src="/profile.png"
                    alt="Aman Kashyap - Full-Stack Developer & Data Scientist"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-6 h-6 bg-primary-500 rounded-full"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-4 h-4 bg-primary-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
