import { Education as EducationType } from '@/types/database'

interface EducationProps {
  education: EducationType[]
}

export default function Education({ education }: EducationProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
    })
  }

  // Helper to get logo path by institution name
  const getInstitutionLogo = (name: string) => {
    if (name === "COEP Technological University (COEP Tech)")
      return "/logos/COEP-Logo.jpg"
    if (name === "Government Polytechnic, Pune")
      return "/logos/gpp-logo.png"
    return ""
  }

  // Helper to get link by institution name
  const getInstitutionLink = (name: string) => {
    if (name === "COEP Technological University (COEP Tech)")
      return "https://www.coeptech.ac.in/"
    if (name === "Government Polytechnic, Pune")
      return "https://www.gppune.ac.in/"
    return "#"
  }

  return (
    <section id="education" className="section-container bg-gradient-to-b from-white to-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Education</h2>
        <p className="text-xl text-gray-600">My academic journey and qualifications</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {education.length > 0 ? (
          education.map((edu) => (
            <div key={edu.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white shadow">
                  <img
                    src={getInstitutionLogo(edu.institution)}
                    alt={edu.institution}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">{edu.degree}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">
                    <a
                      href={getInstitutionLink(edu.institution)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {edu.institution}
                    </a>
                  </p>
                  {edu.field_of_study && (
                    <p className="text-gray-600 mb-2">{edu.field_of_study}</p>
                  )}

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span>
                      {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                    </span>
                    {edu.grade && (
                      <span className="font-semibold text-indigo-600">
                        {edu.degree.toLowerCase().includes('bachelor') || edu.degree.toLowerCase().includes('technology') ? 'CGPA' : 'Percentage'}: {edu.grade}
                      </span>
                    )}
                  </div>

                  {edu.description && (
                    <p className="text-gray-700">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            {/* Default Item 1 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white shadow">
                  <img
                    src="/logos/COEP-Logo.jpg"
                    alt="GCOEARA"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">B.Tech in Computer Engineering</h3>
                  <p className="text-indigo-600 font-semibold mb-2">
                    <a
                      href="https://www.coeptech.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      COEP Technological University (COEP Tech)
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span>2023 - 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Default Item 2 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white shadow">
                  <img
                    src="/logos/gpp-logo.png"
                    alt="GPP"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">Diploma in Information Technology</h3>
                  <p className="text-indigo-600 font-semibold mb-2">
                    <a
                      href="https://www.gppune.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Government Polytechnic, Pune
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span>2020 - 2023</span>
                    <span className="font-semibold text-indigo-600">Percentage: 90.87%</span>
                  </div>
                  {/* <p className="text-gray-700">Second rank holder</p> */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
