'use client'

import { useState } from 'react'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { PersonalInfo } from '@/types/database'

interface ContactProps {
  personalInfo: PersonalInfo | null
}

export default function Contact({ personalInfo }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">Get In Touch</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-4">
            {personalInfo?.email && (
              <div className="flex items-center gap-3">
                <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {personalInfo.email}
                </a>
              </div>
            )}
            {personalInfo?.phone && (
              <div className="flex items-center gap-3">
                <Phone className="text-primary-600 dark:text-primary-400" size={20} />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {personalInfo.phone}
                </a>
              </div>
            )}
            {personalInfo?.location && (
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus === 'success' && (
            <p className="text-green-600 dark:text-green-400 text-sm">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 dark:text-red-400 text-sm">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}

