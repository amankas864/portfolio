'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Brain, Globe, Server, BarChart3 } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fullStackTech = [
    { name: 'Next.js', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Recoil', icon: '⚛️' },
    { name: 'Kafka', icon: '📡' },
    { name: 'Git', icon: '📝' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Ansible', icon: '🔧' },
    { name: 'Terraform', icon: '🏗️' },
  ]

  const dataScienceTech = [
    { name: 'Python', icon: '🐍' },
    { name: 'C', icon: '⚙️' },
    { name: 'C++', icon: '⚡' },
    { name: 'R', icon: '📊' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Data Science', icon: '📈' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Seaborn', icon: '📊' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Django', icon: '🎯' },
    { name: 'NLTK', icon: '📝' },
    { name: 'Arch Linux', icon: '🐧', isSpecial: true },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (


    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Combining modern web technologies with advanced data science techniques
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Full-Stack Development Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Full-Stack Development</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {fullStackTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-lg p-3 sm:p-4 text-center transition-all duration-300 group"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-medium)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                  }}
                >
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{tech.icon}</div>
                  <span 
                    className="text-xs sm:text-sm font-medium transition-colors duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Science Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Data Science & ML</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {dataScienceTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`rounded-lg p-3 sm:p-4 text-center transition-all duration-300 group ${
                    tech.isSpecial ? 'p-4 sm:p-6' : ''
                  }`}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-medium)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                  }}
                >
                  <div className={`mb-1 sm:mb-2 ${tech.isSpecial ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'}`}>
                    {tech.icon}
                  </div>
                  <span 
                    className="text-xs sm:text-sm font-medium transition-colors duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Skills
