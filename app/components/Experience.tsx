import { Briefcase } from 'lucide-react'

interface Experience {
  id: string
  title: string
  company: string
  start_date: string
  end_date: string | null
  current: boolean
  description: string[]
}

interface ExperienceProps {
  experiences?: Experience[]
}

export default function Experience({ experiences }: ExperienceProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present'
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
  }

  const defaultExperiences: Experience[] = [
    {
      id: '1',
      title: 'Java Developer Intern',
      company: 'Globeminds Technology',
      start_date: '2022-07-01',
      end_date: '2022-09-30',
      current: false,
      description: [
        'Designed and maintained the projects based on Java AWT and SQL',
        'Developed a Quiz Master Desktop App',
        'Completed a 2-month on-site internship',
      ],
    },
  ]

  const displayExperiences = experiences && experiences.length > 0 ? experiences : defaultExperiences

  return (
    <section id="experience" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Experience</h2>
        <p className="text-gray-600">Professional experience and internships</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {displayExperiences.map((exp) => (
          <div key={exp.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Briefcase className="text-teal-600" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(exp.start_date)} - {exp.current ? 'Present' : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-teal-600 font-semibold mb-3">{exp.company}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}






