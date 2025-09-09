'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering - Data Science',
      institution: 'SRM IST-Kattankulathur',
      period: '2021 - 2025',
      location: 'Chennai, Tamil Nadu',
      gpa: '8.69 CGPA',
      description: 'Currently pursuing B.Tech in Computer Science and Engineering with Data Science specialization. Interested in placement opportunities. Maintained consistent academic performance with 0 arrears throughout the course.',
      achievements: ['Overall CGPA: 8.69', 'Sem 1: 9.0 CGPA', 'Sem 2: 9.05 CGPA', 'Sem 3: 9.09 CGPA', 'Sem 4: 8.5 CGPA', 'Sem 5: 8.32 CGPA', 'Sem 6: 8.52 CGPA', 'Sem 7: 8.0 CGPA', 'Sem 8: 9.0 CGPA'],
      link: '#'
    },
    {
      degree: 'Class XII (Higher Secondary)',
      institution: 'Nirmal Hr. Sec. School',
      period: 'Jun 2019 - Mar 2020',
      location: 'Jagdalpur, Chhattisgarh',
      gpa: '77.6%',
      description: 'Completed Class XII with MPC (Mathematics, Physics, Chemistry) specialization under CBSE board.',
      achievements: ['CBSE Board', 'MPC Stream', 'Passed Out: 2020'],
      link: '#'
    },
    {
      degree: 'Class X (Secondary)',
      institution: 'Nirmal Hr. Sec. School',
      period: 'Jun 2017 - Apr 2018',
      location: 'Jagdalpur, Chhattisgarh',
      gpa: '77%',
      description: 'Completed Class X under CBSE board with strong foundation in core subjects.',
      achievements: ['CBSE Board', 'Passed Out: 2018'],
      link: '#'
    }
  ]

  const certifications = [
    {
      name: 'IBI Certificate',
      issuer: 'InfoBharatIntern',
      date: '2024',
      link: '#'
    },
    {
      name: '100xDevs Certificate',
      issuer: '100xDevs',
      date: '2024',
      link: '#'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      link: '#'
    },
    {
      name: 'GKE Certificate',
      issuer: 'Google Cloud',
      date: '2024',
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="education" className="section-padding bg-gray-50">
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
            Education & Certifications
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            My academic background and professional certifications
          </motion.p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white" size={20} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Academic Background</h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}`}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <GraduationCap className="text-primary-500" size={16} />
                        <span className="text-primary-500 font-medium">{edu.institution}</span>
                      </div>
                    </div>
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-primary-500 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award size={14} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <Award className="text-white" size={20} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Professional Certifications</h3>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-primary-500 font-medium text-sm">{cert.issuer}</p>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-primary-500 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Issued: {cert.date}</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-1 rounded-full w-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16"
        >
          <a
            href="/certificates"
            className="btn-secondary group inline-flex items-center"
          >
            View All Certificates
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
