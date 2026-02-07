import { Trophy, Award, Target } from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description?: string
}

interface AchievementsProps {
  achievements?: Achievement[]
}

export default function Achievements({ achievements }: AchievementsProps) {
  const defaultAchievements: Achievement[] = [
    {
      id: '1',
      title: 'Winner of DIPEX state level project competition',
      description: 'First place for AI based personal assistant (CREO) project',
    },
    {
      id: '2',
      title: 'Winner of state and institute level paper presentation competition',
    },
    {
      id: '3',
      title: 'Multi-time National Gold Medalist in Pessapallo ',
      description:'Leveraged strategic teamwork and consistent dedication to achieve elite-level success at the National sports tier.'
    },
  ]

  const displayAchievements = achievements && achievements.length > 0 ? achievements : defaultAchievements

  const getIcon = (index: number) => {
    const icons = [
      <Trophy key="trophy" className="text-yellow-500" size={24} />,
      <Award key="award" className="text-blue-500" size={24} />,
      <Target key="target" className="text-green-500" size={24} />,
      <Trophy key="trophy2" className="text-purple-500" size={24} />,
    ]
    return icons[index % icons.length]
  }

  return (
    <section id="achievements" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Achievements</h2>
        <p className="text-gray-600">Recognition and accomplishments</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayAchievements.map((achievement, index) => (
          <div key={achievement.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {getIcon(index)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{achievement.title}</h3>
                {achievement.description && (
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}






