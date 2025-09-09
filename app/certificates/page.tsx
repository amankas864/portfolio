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
      name: 'IBI',
      issuer: 'IBI',
      date: '2023',
      description: 'Professional certification from IBI institute.',
      category: 'Professional',
      filename: 'Aman Kashyap IBI.pdf',
      type: 'pdf'
    },
    {
      name: '100xDevs',
      issuer: '100xDevs',
      date: '2023',
      description: 'Full-stack development certification from 100xDevs.',
      category: 'Full-Stack Development',
      filename: 'certificate.png',
      type: 'image'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'AWS',
      date: '2023',
      description: 'AWS Cloud Practitioner certification.',
      category: 'Cloud Computing',
      filename: 'AWS_Academy_Machine_Learning_Foundations_Badge.pdf',
      type: 'pdf'
    },
    {
      name: 'GKE Certificate',
      issuer: 'Google Cloud',
      date: '2023',
      description: 'Google Kubernetes Engine certification.',
      category: 'Cloud Computing',
      filename: 'UC-7fa4b438-ad16-4662-afe1-cc2672c17907.pdf',
      type: 'pdf'
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
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-custom border-b"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderBottomColor: 'var(--border-light)'
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <ArrowLeft size={20} style={{ color: 'var(--text-secondary)' }} />
              <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>Back to Portfolio</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
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
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Professional Certificates
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
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
                    <div className="w-full h-48 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-card)' }}>
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
                        <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                          {cert.name}
                        </h3>
                        <p className="font-medium" style={{ color: 'var(--accent-primary)' }}>{cert.issuer}</p>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={`/certificates/${cert.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 transition-colors duration-300"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--accent-primary)'}
                          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
                        >
                          <ExternalLink size={18} />
                        </a>
                        <a
                          href={`/certificates/${cert.filename}`}
                          download
                          className="p-2 transition-colors duration-300"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--accent-primary)'}
                          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
                        >
                          <Download size={18} />
                        </a>
                      </div>
                    </div>

                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>Issued: {cert.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 text-xs rounded-full border" style={{ 
                        backgroundColor: 'var(--bg-hover)', 
                        color: 'var(--accent-primary)', 
                        borderColor: 'var(--border-light)' 
                      }}>
                        {cert.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        {isImageFile(cert.filename) && (
                          <ImageIcon className="text-primary-400" size={16} />
                        )}
                        {isPdfFile(cert.filename) && (
                          <FileText className="text-primary-400" size={16} />
                        )}
                        <div className="w-16 rounded-full h-1" style={{ backgroundColor: 'var(--bg-hover)' }}>
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
