import { Skill } from '@/types/database'

interface SkillsProps {
  skills: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  // Default categories if no skills
  const defaultCategories: Record<string, string[]> = {
    'Programming': ['Python','C/C++', 'DSA', 'Java','MySQL', 'HTML/CSS', 'JavaScript','Docker','Kubernetes'],
    'Familiar': ['AI','Android', 'IoT', 'Cloud Computing', 'Git/GitHub', 'YOLO V8', 'AI', 'NLP', 'Django', 'Linux','React'],
  }

  const categoriesToDisplay = Object.keys(skillsByCategory).length > 0 
    ? skillsByCategory 
    : defaultCategories

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-navy-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy-900 via-blue-800 to-navy-900 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-xl text-gray-700">Technologies and tools I work with</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {Object.entries(categoriesToDisplay).map(([category, categorySkills]) => (
          <div key={category} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-navy-900 group-hover:text-blue-600 transition-colors">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {Object.keys(skillsByCategory).length === 0 ? (
                // For default categories, show as array of strings
                (categorySkills as string[]).map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                // For database skills
                (categorySkills as Skill[]).map((skill) => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 hover:scale-105"
                  >
                    {skill.name}
                  </span>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
