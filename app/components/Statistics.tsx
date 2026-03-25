import { Code, User, Sparkles, Linkedin } from 'lucide-react'

interface StatisticsProps {
  projectsCount?: number
  yearsExperience?: number
  contributions?: number
  connections?: number
}

export default function Statistics({ 
  projectsCount = 10, 
  yearsExperience = 3, 
  contributions = 100,
  connections = 1500 
}: StatisticsProps) {
  const stats = [
    {
      icon: <Code className="text-teal-600" size={32} />,
      value: `${projectsCount}+`,
      label: 'Projects',
    },
    {
      icon: <User className="text-teal-600" size={32} />,
      value: `${yearsExperience}+`,
      label: 'Years Experience',
    },
    {
      icon: <Sparkles className="text-teal-600" size={32} />,
      value: `${contributions}+`,
      label: 'DSA Problems',
    },
    {
      icon: <Linkedin className="text-teal-600" size={32} />,
      value: `${connections}+`,
      label: 'Connections',
    },
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

