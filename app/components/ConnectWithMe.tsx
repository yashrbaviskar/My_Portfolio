import { ProfileLink } from '@/types/database'
import { Github, Linkedin, Code, BookOpen, Instagram } from 'lucide-react' // Added Instagram import

interface ConnectWithMeProps {
  profileLinks: ProfileLink[]
}

export default function ConnectWithMe({ profileLinks }: ConnectWithMeProps) {
  const getIcon = (platform: string) => {
    const lowerPlatform = platform.toLowerCase()
    if (lowerPlatform.includes('github')) return <Github className="text-gray-700" size={32} />
    if (lowerPlatform.includes('linkedin')) return <Linkedin className="text-blue-600" size={32} />
    if (lowerPlatform.includes('leetcode')) return <Code className="text-orange-500" size={32} />
    if (lowerPlatform.includes('geeksforgeeks') || lowerPlatform.includes('geeks')) return <BookOpen className="text-green-600" size={32} />
    // Added Instagram detection
    if (lowerPlatform.includes('instagram')) return <Instagram className="text-pink-600" size={32} />
    
    return <Github className="text-gray-700" size={32} />
  }

  const getDescription = (platform: string) => {
    const lowerPlatform = platform.toLowerCase()
    if (lowerPlatform.includes('github')) return 'Check out my open source contributions and projects.'
    if (lowerPlatform.includes('linkedin')) return 'Connect with me professionally.'
    if (lowerPlatform.includes('leetcode')) return 'View my problem-solving journey.'
    if (lowerPlatform.includes('geeksforgeeks') || lowerPlatform.includes('geeks')) return 'Explore my coding practice and articles.'
    // Added Instagram description
    if (lowerPlatform.includes('instagram')) return 'Follow me for my photography and life updates.'
    
    return 'Connect with me on this platform.'
  }

  const defaultLinks = [
    { id: '1', platform: 'GitHub', url: 'https://github.com/yashrbaviskar', display_order: 1 },
    { id: '2', platform: 'LinkedIn', url: 'https://www.linkedin.com/in/yash-baviskar-315b032b3', display_order: 2 },
    { id: '3', platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/baviskaryash038', display_order: 3 },
    { id: '4', platform: 'Instagram', url: 'https://www.instagram.com/yash_baviskar_/?hl=en', display_order: 4 },
  ]

  const linksToDisplay = profileLinks.length > 0 
    ? [...profileLinks].sort((a, b) => a.display_order - b.display_order)
    : defaultLinks

  return (
    <section id="profiles" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Connect With Me</h2>
        <p className="text-gray-600">Find me on various platforms across the web</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {linksToDisplay.slice(0, 4).map((link) => (
          <a
            key={link.id}
            href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start gap-4"
          >
            <div className="flex-shrink-0">
              {getIcon(link.platform)}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{link.platform}</h3>
              <p className="text-gray-600">{getDescription(link.platform)}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}