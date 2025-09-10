'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowRight, Code, Brain } from 'lucide-react'
import Image from 'next/image'

const ProjectsOverview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fullStackProjects = [
    {
      title: 'Dionysus - Github Repository Tool',
      description: 'Advanced GitHub repository management and analysis tool with comprehensive features for developers and teams.',
      image: '/dionysus.png',
      tech: ['React', 'Node.js', 'GitHub API', 'JavaScript', 'Express'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amankas864/dionysus',
      category: 'Full-Stack'
    },
    {
      title: 'Brainstack - Education Platform',
      description: 'Comprehensive online education platform designed to enhance learning experiences with interactive features.',
      image: '/brainstack.png',
      tech: ['React', 'Next.js', 'MongoDB', 'Firebase', 'JavaScript'],
      liveUrl: 'https://www.brainstackeducation.in',
      githubUrl: '#',
      category: 'Full-Stack'
    },
    {
      title: 'R-Cart',
      description: 'Modern e-commerce shopping cart application with user-friendly interface and seamless shopping experience.',
      image: '/r-cart.png',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Clerk'],
      liveUrl: 'https://r-cart-black.vercel.app/',
      githubUrl: 'https://github.com/amankas864/R-Cart',
      category: 'Full-Stack'
    }
  ]

  const dataScienceProjects = [
    {
      title: 'Sentiment Analysis Using BERT',
      description: 'Advanced sentiment analysis model leveraging BERT transformers for accurate text classification and emotion detection.',
      image: '/api/placeholder/400/250',
      tech: ['Python', 'BERT', 'Transformers', 'NLP', 'TensorFlow'],
      liveUrl: 'https://colab.research.google.com/drive/12oWbIpJTpC2oPwydRht-mHAzfa_7ol9c',
      githubUrl: '#',
      category: 'Data Science'
    },
    {
      title: 'Fuzzy Energy System',
      description: 'Intelligent energy management system using fuzzy logic for optimized energy distribution and consumption analysis.',
      image: '/api/placeholder/400/250',
      tech: ['Python', 'Fuzzy Logic', 'Energy Systems', 'Optimization', 'NumPy'],
      liveUrl: 'https://github.com/surajverma1923/FUZZY-ENERGY-SYSTEM',
      githubUrl: 'https://github.com/surajverma1923/FUZZY-ENERGY-SYSTEM',
      category: 'Data Science'
    },
    {
      title: 'Gameplay using NEAT',
      description: 'Advanced Deep learning project showcasing ai playing game using NEAT algorithm. A Reinforcement Learning algo.',
      image: '/api/placeholder/400/250',
      tech: ['Python', 'Scikit-learn', 'Pygame', 'NumPy', 'NEAT'],
      liveUrl: 'https://github.com/amankas864/neat-dl-py',
      githubUrl: 'https://github.com/amankas864/neat-dl-py',
      category: 'Deep Learning'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="section-padding">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Showcasing my work in both Full-Stack Development and Data Science
          </motion.p>
        </motion.div>

        {/* Full-Stack Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <Code className="text-white" size={20} />
            </div>
            <h3 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Full-Stack Development</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullStackProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors duration-300"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {project.liveUrl !== '#' ? <ExternalLink size={18} /> : <Github size={18} />}
                      </a>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold group-hover:text-primary-500 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h4>

                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Science Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <Brain className="text-white" size={20} />
            </div>
            <h3 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Data Science & ML</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataScienceProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors duration-300"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {project.liveUrl !== '#' ? <ExternalLink size={18} /> : <Github size={18} />}
                      </a>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold group-hover:text-primary-500 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h4>

                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <a
            href="https://github.com/amankas864"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group inline-flex items-center"
          >
            View All Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsOverview
