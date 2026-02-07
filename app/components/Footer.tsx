import { PersonalInfo, ProfileLink } from '@/types/database'
import { Github, Linkedin, Mail } from 'lucide-react'

interface FooterProps {
  personalInfo: PersonalInfo | null
  profileLinks: ProfileLink[]
}

export default function Footer({ personalInfo, profileLinks }: FooterProps) {
  const githubLink = profileLinks.find(link => link.platform.toLowerCase().includes('github'))
  const linkedinLink = profileLinks.find(link => link.platform.toLowerCase().includes('linkedin'))

  return (
    <footer className="bg-blue-100 text-navy-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-700">About</h3>
            <p className="text-gray-700">
              {personalInfo?.bio || 'Full-stack developer passionate about creating elegant solutions and contributing to the tech community. Specialized in AI/ML, IoT, and web development.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#profiles" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Connect
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-700">Get In Touch</h3>
            <div className="mb-4 text-gray-700">
              <div><span className="font-semibold">Name:</span> Yash Ravindra Baviskar</div>
              <div><span className="font-semibold">Mobile:</span> +91 7058592819</div>
              <div><span className="font-semibold">Email:</span> baviskaryash038@gmail.com</div>
              <div><span className="font-semibold">Alternate Email:</span> baviskaryr23.comp@coeptech.ac.in</div>
            </div>
            <div className="flex gap-4">
              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Github size={24} />
                </a>
              )}
              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              )}
              <a
                href="mailto:yashrbaviskar@gmail.com"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            Made with ❤️ by {personalInfo?.name || 'Yash Ravindra Baviskar'}
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

