'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Get all sections
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 150 // Offset for header and padding

      // Find the current section
      let current = 'home'
      let maxVisible = 0

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement
        const sectionTop = sectionElement.offsetTop
        const sectionHeight = sectionElement.offsetHeight
        const sectionId = section.getAttribute('id') || ''

        // Calculate how much of the section is visible
        const sectionBottom = sectionTop + sectionHeight
        const visibleTop = Math.max(scrollPosition, sectionTop)
        const visibleBottom = Math.min(scrollPosition + window.innerHeight, sectionBottom)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)

        // If this section is more visible than the current one, make it active
        if (visibleHeight > maxVisible && scrollPosition >= sectionTop - 100) {
          maxVisible = visibleHeight
          current = sectionId
        }
      })

      // If at the top of the page, always show home
      if (window.scrollY < 100) {
        current = 'home'
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#profiles', label: 'Profiles', id: 'profiles' },
    { href: '#achievements', label: 'Achievements', id: 'achievements' },
    { href: '#leadership', label: 'Leadership', id: 'leadership' },
  ]

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-50 shadow-md' : 'bg-white'
      } text-navy-900`}
    >
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center text-2xl font-bold text-blue-500">
          {/* Icon on the left */}
          <span className="mr-2">
            {/* Example: Lucide React Code icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
          </span>
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-purple-600 font-semibold border-b-2 border-purple-600 pb-1'
                  : 'text-gray-700 hover:text-purple-600 hover:scale-105'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition-all duration-300 border-none"
            style={{ textDecoration: 'none' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-8m0 8l-4-4m4 4l4-4M4 6h16" />
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded-md transition-colors ${
                activeSection === link.id
                  ? 'bg-teal-50 text-teal-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-teal-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

