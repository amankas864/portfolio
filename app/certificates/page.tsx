'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, Award, Calendar, ExternalLink, Download, FileText, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const CertificatesPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certificates = [
    {
      name: 'Aman Kashyap IBI',
      issuer: 'IBI',
      date: '2023',
      credentialId: 'IBI-CERT-001',
      description: 'Professional certification from IBI institute.',
      category: 'Professional',
      filename: 'Aman Kashyap IBI.pdf',
      type: 'pdf'
    },
    {
      name: 'Certificate',
      issuer: 'Professional Institute',
      date: '2023',
      credentialId: 'CERT-002',
      description: 'Professional certification achievement.',
      category: 'Professional',
      filename: 'certificate.png',
      type: 'image'
    },
    {
      name: 'Coursera Machine Learning',
      issuer: 'Coursera',
      date: '2023',
      credentialId: 'UC-7fa4b438-ad16-4662-afe1-cc2672c17907',
      description: 'Machine Learning specialization course completion.',
      category: 'Machine Learning',
      filename: 'UC-7fa4b438-ad16-4662-afe1-cc2672c17907.pdf',
      type: 'pdf'
    },
    {
      name: 'Coursera Data Science',
      issuer: 'Coursera',
      date: '2023',
      credentialId: 'WZENJKQ4PFTM',
      description: 'Data Science course completion certificate.',
      category: 'Data Science',
      filename: 'Coursera WZENJKQ4PFTM.pdf',
      type: 'pdf'
    },
    {
      name: 'Coursera Programming',
      issuer: 'Coursera',
      date: '2023',
      credentialId: 'FRZAVB9RE5RZ',
      description: 'Programming fundamentals course completion.',
      category: 'Programming',
      filename: 'Coursera FRZAVB9RE5RZ.pdf',
      type: 'pdf'
    },
    {
      name: 'Python SoloLearn',
      issuer: 'SoloLearn',
      date: '2023',
      credentialId: 'PYTHON-SL-001',
      description: 'Python programming course completion.',
      category: 'Programming',
      filename: 'Python Solo learn.png',
      type: 'image'
    },
    {
      name: 'Object Oriented Programming',
      issuer: 'Professional Institute',
      date: '2023',
      credentialId: 'OOPS-001',
      description: 'Object Oriented Programming Basic level certification.',
      category: 'Programming',
      filename: 'OOPS Basic level.pdf',
      type: 'pdf'
    },
    {
      name: 'Networking Basics',
      issuer: 'Professional Institute',
      date: '2023',
      credentialId: 'NET-001',
      description: 'Networking fundamentals certification.',
      category: 'Networking',
      filename: 'Networking_Basics_Badge.pdf',
      type: 'pdf'
    },
    {
      name: 'JavaScript SoloLearn',
      issuer: 'SoloLearn',
      date: '2023',
      credentialId: 'JS-SL-001',
      description: 'JavaScript programming course completion.',
      category: 'Programming',
      filename: 'JS Solo learn.png',
      type: 'image'
    },
    {
      name: 'C Programming Professional',
      issuer: 'Professional Institute',
      date: '2023',
      credentialId: 'C-PRO-001',
      description: 'C Programming Professional level certification.',
      category: 'Programming',
      filename: 'C Professional level.pdf',
      type: 'pdf'
    },
    {
      name: 'Coursera Advanced Course',
      issuer: 'Coursera',
      date: '2023',
      credentialId: '2BDRUZU6223K',
      description: 'Advanced course completion certificate.',
      category: 'Advanced',
      filename: 'Coursera 2BDRUZU6223K.pdf',
      type: 'pdf'
    },
    {
      name: 'C++ SoloLearn',
      issuer: 'SoloLearn',
      date: '2023',
      credentialId: 'CPP-SL-001',
      description: 'C++ programming course completion.',
      category: 'Programming',
      filename: 'C++ Solo learn.png',
      type: 'image'
    },
    {
      name: 'AWS Machine Learning Foundations',
      issuer: 'AWS Academy',
      date: '2023',
      credentialId: 'AWS-ML-001',
      description: 'AWS Academy Machine Learning Foundations certification.',
      category: 'Cloud Computing',
      filename: 'AWS_Academy_Machine_Learning_Foundations_Badge.pdf',
      type: 'pdf'
    },
    {
      name: 'Android Development',
      issuer: 'Udemy',
      date: '2023',
      credentialId: 'ANDROID-UDEMY-001',
      description: 'Android development course completion.',
      category: 'Mobile Development',
      filename: 'Android Udemy.jpg',
      type: 'image'
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const getFileExtension = (filename: string) => {
    return filename.split('.').pop()?.toLowerCase()
  }

  const isImageFile = (filename: string) => {
    const ext = getFileExtension(filename)
    return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext || '')
  }

  const isPdfFile = (filename: string) => {
    const ext = getFileExtension(filename)
    return ext === 'pdf'
  }

  return (
    <main className="min-h-screen bg-dark-950">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-custom border-b border-dark-800"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <ArrowLeft className="text-white" size={20} />
              <span className="text-white font-medium">Back to Portfolio</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-white">
                Aman Kashyap
              </span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Professional Certificates
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-dark-400 max-w-2xl mx-auto"
            >
              My professional certifications and achievements in technology and data science
            </motion.p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Certificate Image/Thumbnail */}
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full h-48 bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                      {isImageFile(cert.filename) ? (
                        <Image
                          src={`/certificates/${cert.filename}`}
                          alt={cert.name}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      ) : isPdfFile(cert.filename) ? (
                        <div className="flex flex-col items-center justify-center h-full">
                          <FileText className="text-primary-400 mb-2" size={48} />
                          <span className="text-primary-400 text-sm font-medium">PDF Certificate</span>
                          <span className="text-dark-400 text-xs mt-1">{cert.filename}</span>
                        </div>
                      ) : (
                        <Award className="text-primary-400" size={48} />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {cert.name}
                        </h3>
                        <p className="text-primary-400 font-medium">{cert.issuer}</p>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={`/certificates/${cert.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-300"
                        >
                          <ExternalLink size={18} />
                        </a>
                        <a
                          href={`/certificates/${cert.filename}`}
                          download
                          className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-300"
                        >
                          <Download size={18} />
                        </a>
                      </div>
                    </div>

                    <p className="text-dark-300 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-dark-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>Issued: {cert.date}</span>
                      </div>
                      <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-dark-800 text-primary-400 text-xs rounded-full border border-dark-700">
                        {cert.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        {isImageFile(cert.filename) && (
                          <ImageIcon className="text-primary-400" size={16} />
                        )}
                        {isPdfFile(cert.filename) && (
                          <FileText className="text-primary-400" size={16} />
                        )}
                        <div className="w-16 bg-dark-800 rounded-full h-1">
                          <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-1 rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Back to Portfolio Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-16"
          >
            <Link
              href="/"
              className="btn-primary group inline-flex items-center"
            >
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default CertificatesPage
