'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowRight, Code, Brain } from 'lucide-react'

const ProjectsOverview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fullStackProjects = [
    {
      title: 'Dionysus - Github Repository Tool',
      description: 'Advanced GitHub repository management and analysis tool with comprehensive features for developers and teams.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Node.js', 'GitHub API', 'JavaScript', 'Express'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amankas864/dionysus',
      category: 'Full-Stack'
    },
    {
      title: 'Brainstack - Education Platform',
      description: 'Comprehensive online education platform designed to enhance learning experiences with interactive features.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
      liveUrl: 'https://www.brainstackeducation.in',
      githubUrl: '#',
      category: 'Full-Stack'
    },
    {
      title: 'R-Cart',
      description: 'Modern e-commerce shopping cart application with user-friendly interface and seamless shopping experience.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'JavaScript', 'CSS', 'HTML', 'Local Storage'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amankas864/R-Cart',
      category: 'Full-Stack'
    }
  ]

  const dataScienceProjects = [
    {
      title: 'Dionysus - Github Repository Tool',
      description: 'Data-driven GitHub repository analysis tool with machine learning capabilities for repository insights and metrics.',
      image: '/api/placeholder/400/250',
      tech: ['Python', 'Machine Learning', 'GitHub API', 'Data Analysis', 'Pandas'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amankas864/dionysus',
      category: 'Data Science'
    },
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
      liveUrl: '#',
      githubUrl: 'https://github.com/surajverma1923/FUZZY-ENERGY-SYSTEM',
      category: 'Data Science'
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
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-400 max-w-2xl mx-auto"
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
            <h3 className="text-3xl font-bold text-white">Full-Stack Development</h3>
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
                  <div className="w-full h-48 bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                    <span className="text-primary-400 font-medium">Project Preview</span>
                  </div>
                  <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-dark-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-800 text-dark-300 text-xs rounded-full border border-dark-700"
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
            <h3 className="text-3xl font-bold text-white">Data Science & ML</h3>
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
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                    <span className="text-primary-400 font-medium">Project Preview</span>
                  </div>
                  <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-dark-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-800 text-dark-300 text-xs rounded-full border border-dark-700"
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
