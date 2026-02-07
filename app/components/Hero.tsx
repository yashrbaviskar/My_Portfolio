'use client'

import { PersonalInfo, ProfileLink } from '@/types/database'
import { Code, Linkedin, Download, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  personalInfo: PersonalInfo | null
  profileLinks: ProfileLink[]
}

export default function Hero({ personalInfo, profileLinks }: HeroProps) {
  const DEMO_PHOTO_URL = '/profile.png';
  const linkedinLink = profileLinks.find(link => 
    link.platform.toLowerCase().includes('linkedin')
  )

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-blue-50 animate-gradient"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-navy-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Software Engineer</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
              <span className="block bg-gradient-to-r from-blue-600 via-navy-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
                {personalInfo?.name ? personalInfo.name.split(' ')[0] : 'Yash'}
              </span>
              <span className="block text-navy-900 mt-2">
                {personalInfo?.name 
                  ? personalInfo.name.split(' ').slice(1).join(' ') 
                  : 'Ravindra Baviskar'}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {personalInfo?.bio || 'Passionate developer crafting elegant solutions to complex problems. Specialized in building scalable web applications with modern technologies, AI/ML, and IoT systems.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Code size={20} className="group-hover:rotate-12 transition-transform" />
                View Projects
              </a>
              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-purple-500 text-gray-700 hover:text-purple-600 font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                  Connect
                </a>
              )}
              {personalInfo?.resume_url && (
                <a
                  href={personalInfo.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-indigo-500 text-gray-700 hover:text-indigo-600 font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
                >
                  <Download size={20} className="group-hover:scale-110 transition-transform" />
                  Resume
                </a>
              )}
            </div>
          </div>

          {/* Right Side - Profile Picture */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-20 blur-2xl animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  {personalInfo?.photo_url || DEMO_PHOTO_URL ? (
                    <Image
                      src={DEMO_PHOTO_URL}
                      alt={'Profile Photo'}
                      width={384}
                      height={384}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 flex items-center justify-center">
                      <div className="w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-8xl font-bold text-white">
                          {personalInfo?.name?.charAt(0).toUpperCase() || 'Y'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-gray-200 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}