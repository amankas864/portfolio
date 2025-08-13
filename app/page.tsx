'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import ProjectsOverview from '@/components/ProjectsOverview'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <Skills />
        <ProjectsOverview />
        <About />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  )
}
