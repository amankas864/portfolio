'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Brain, Users, Award, Clock, TrendingUp } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Users, value: '15+', label: 'Projects Completed' },
    { icon: Award, value: '95%~', label: 'Certified Score' },
    { icon: Clock, value: '24/7', label: 'Time Management' },
    { icon: TrendingUp, value: '100%', label: 'Success Rate' },
  ]

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                About Me
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                I'm a passionate developer who bridges the gap between modern web technologies and data science. 
                My journey began with a curiosity for building things that make a difference, leading me to master 
                both full-stack development and machine learning.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                As a <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Full-Stack Developer</span>, I create 
                scalable web applications using React, Node.js, and modern cloud technologies. As a 
                <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}> Data Scientist</span>, I develop 
                machine learning models and extract meaningful insights from complex datasets.
              </motion.p>
            </div>

            {/* Key Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Key Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Code className="text-primary-400" size={16} />
                  </div>
                  <span style={{ color: 'var(--text-secondary)' }}>Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="text-primary-400" size={16} />
                  </div>
                  <span style={{ color: 'var(--text-secondary)' }}>Machine Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Users className="text-primary-400" size={16} />
                  </div>
                  <span style={{ color: 'var(--text-secondary)' }}>Team Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-primary-400" size={16} />
                  </div>
                  <span style={{ color: 'var(--text-secondary)' }}>Problem Solving</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  className="text-center p-6 rounded-xl transition-all duration-300"
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
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-primary-400" size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-6 rounded-xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-accent)',
                boxShadow: '0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-medium)'
              }}
            >
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>What I Do</h4>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Build responsive web applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Develop machine learning models</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Create data-driven solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Optimize performance & scalability</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
