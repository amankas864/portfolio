'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2023 - Present',
      location: 'Remote',
      description: 'Developed and maintained multiple web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      link: '#'
    },
    {
      title: 'Data Science Intern',
      company: 'AI Research Lab',
      period: 'Jun 2022 - Dec 2022',
      location: 'New York, NY',
      description: 'Built machine learning models for customer segmentation and predictive analytics. Achieved 89% accuracy in customer churn prediction using ensemble methods.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL'],
      link: '#'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: 'Mar 2022 - Aug 2022',
      location: 'San Francisco, CA',
      description: 'Created responsive user interfaces and implemented modern design patterns. Collaborated with UX designers to improve user experience and accessibility.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git'],
      link: '#'
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: 'Jan 2021 - Present',
      location: 'Remote',
      description: 'Delivered custom web solutions for various clients. Specialized in e-commerce platforms, portfolio websites, and business applications.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Vercel'],
      link: '#'
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="experience" className="section-padding">
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
            Work Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-400 max-w-2xl mx-auto"
          >
            My professional journey in technology and data science
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.title}`}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 lg:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 transform lg:-translate-x-1/2 mt-2`}></div>

                {/* Content */}
                <div className={`ml-12 lg:ml-0 lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card group cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Briefcase className="text-primary-400" size={16} />
                            <span className="text-primary-400 font-medium">{experience.company}</span>
                          </div>
                        </div>
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-300"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>

                      {/* Period & Location */}
                      <div className="flex items-center space-x-4 text-sm text-dark-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-dark-300 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-dark-800 text-primary-400 text-xs rounded-full border border-dark-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-6 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">Want to see more details?</h3>
            <p className="text-dark-400 mb-4">Download my detailed resume for comprehensive information</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="btn-primary">
                Download Full-Stack Resume
              </button>
              <button className="btn-secondary">
                Download Data Science Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
