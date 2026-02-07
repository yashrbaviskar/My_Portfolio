import { Position } from '@/types/database'
import { Users, Code, BookOpen, GraduationCap } from 'lucide-react'

interface PositionsProps {
  positions: Position[]
}

export default function Positions({ positions }: PositionsProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
    })
  }

  const getIcon = (index: number, organization?: string) => {
    if (organization && organization.toLowerCase().includes('ignite')) {
      return (
        <img src="/i2i.png" alt="Ignite Innovators of India" className="w-8 h-8" />
      )
    }
    if (organization && organization.toLowerCase().includes('e-yantra')) {
      return (
        <img src="/eyantra.png" alt="e-Yantra" className="w-8 h-8" />
      )
    }
    const icons = [
      <Users key="users" className="text-blue-400" size={24} />,
      <Code key="code" className="text-blue-400" size={24} />,
      <BookOpen key="book" className="text-blue-400" size={24} />,
      <GraduationCap key="grad" className="text-blue-400" size={24} />,
    ]
    return icons[index % icons.length]
  }

  const defaultPositions = [
    {
      id: '1',
      title: 'Chief Ambassadar',
      organization: 'Ignited Innovators Of India',
      start_date: null,
      end_date: null,
      current: true,
      description: 'Providing students with the platform, mentorship, and funding to transform innovative ideas into social ventures',
      achievements: [],
    },
    {
      id: '2',
      title: 'E-Yantra Alumnus',
      organization: 'Government Polytechnic, Pune',
      start_date: null,
      end_date: null,
      current: false,
      description: 'Alumnus of the prestigious e-Yantra program, organized by IIT Bombay.',
      achievements: [],
    },
  ]

  const displayPositions = positions.length > 0 ? positions : defaultPositions

  return (
    <section id="leadership" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Positions of Responsibility</h2>
        <p className="text-gray-600">Leadership roles and community contributions</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {displayPositions.map((position, index) => (
          <div key={position.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                {position.title.toLowerCase().includes('e-yantra') ? (
                  <img src="/eyantra.png" alt="e-Yantra" className="w-8 h-8" />
                ) : getIcon(index, position.organization)}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(position.start_date)} - {position.current ? 'Present' : formatDate(position.end_date)}
                  </span>
                </div>
                {position.organization.toLowerCase().includes('ignite') ? (
                  <a href="https://i2i.org.in/" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold mb-3 hover:text-blue-600 transition-colors">
                    {position.organization}
                  </a>
                ) : position.organization.toLowerCase().includes('e-yantra') ? (
                  <a href="https://www.eyantra.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold mb-3 hover:text-blue-600 transition-colors">
                    {position.organization}
                  </a>
                ) : (
                  <p className="text-teal-600 font-semibold mb-3">{position.organization}</p>
                )}
                {position.description && (
                  <p className="text-gray-700 mb-4">{position.description}</p>
                )}
                {position.achievements && position.achievements.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2 text-gray-900">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {position.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
