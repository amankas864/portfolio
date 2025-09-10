'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: 'Software Development Engineer Intern',
      company: 'Hi-Tech Sensors',
      period: 'April 2025 - June 2025',
      location: 'Remote',
      description: 'Completed 2 months of full-stack training (JavaScript, React, Node.js, MongoDB), then developed and deployed a role-based module that improved processing speed by ~25%. Built responsive React interfaces with Express APIs and streamlined deployment using Docker and Git-based CI/CD.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Docker', 'Git', 'CI/CD', 'RESTful APIs']
    },
    {
      title: 'Data Science Intern',
      company: 'InfoBharatIntern',
      period: 'Jun 2025 - July 2025',
      location: 'Remote',
      description: 'Built machine learning models for customer segmentation and predictive analytics. Achieved 89% accuracy in customer churn prediction using ensemble methods. Developed data preprocessing pipelines and feature engineering techniques. Collaborated with cross-functional teams to implement data-driven solutions.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'Machine Learning', 'Data Analysis']
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
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            My professional journey in technology and data science
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
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
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Briefcase className="text-primary-500" size={16} />
                            <span className="text-primary-500 font-medium">{experience.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Period & Location */}
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
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
                      <p className="text-gray-700 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-primary-500 text-xs rounded-full border border-gray-200"
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
      </div>
    </section>
  )
}

export default Experience
