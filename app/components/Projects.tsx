import { Project } from '@/types/database'
import { Github, ExternalLink, ShoppingBag, CheckSquare, MessageSquare, Palette, Car, Sparkles, FileText } from 'lucide-react'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const getProjectIcon = (index: number, title?: string) => {
    const lowerTitle = title?.toLowerCase() || '';
    
    // Specific icon mapping based on keywords
    if (lowerTitle.includes('ai') || lowerTitle.includes('assistant')) {
      return <MessageSquare className="text-purple-500" size={32} />
    }
    if (lowerTitle.includes('pdf') || lowerTitle.includes('document')) {
      return <FileText className="text-red-500" size={32} />
    }
    if (lowerTitle.includes('print') || lowerTitle.includes('attendance')) {
      return <CheckSquare className="text-green-500" size={32} />
    }
    
    const icons = [
      <ShoppingBag key="shop" className="text-blue-500" size={32} />,
      <CheckSquare key="check" className="text-green-500" size={32} />,
      <MessageSquare key="message" className="text-purple-500" size={32} />,
      <Palette key="palette" className="text-pink-500" size={32} />,
    ]
    return icons[index % icons.length]
  }

  const defaultProjects: Project[] = [
    {
      id: 'featured',
      title: 'AI based personal assistant (CREO)',
      description: 'Developed an AI-driven chatbot using PyTorch with NLP and various automation tasks including IoT support via Arduino and HC05. Project won first place at state level project competition DIPEX.',
      technologies: ['PyTorch', 'Python', 'TensorFlow', 'NLP'],
      github_url: 'https://github.com/yashrbaviskar/CREO',
      project_url: '/CREO',
      image_url: '',
      created_at: '',
      updated_at: '',
    },
    {
      id: '1',
      title: 'AI-Based Attendance Management System Using FaceRecognition',
      description: 'This project automates attendance marking using real-time face detection and recognition. It captures student faces, trains a model using the LBPH algorithm, and logs attendance in a database or CSV file.',
      technologies: ['OpenCV', 'Python', 'Haar Cascades', 'LBPM','CSV'],
      github_url: '#',
      project_url: '',
      image_url: '',
      created_at: '',
      updated_at: '',
    },
    {
      id: '2',
      title: 'Mail clone - Desktop Application',
      description: 'An interactive and engaging app that allows users to participate in quizzes and answer questions on various topics.',
      technologies: ['Java','AWT','SQL'],
      github_url: '#',
      project_url: '',
      image_url: '',
      created_at: '',
      updated_at: '',
    },
    {
      id: '3',
      title: 'DoctorPDF',
      description: 'A high-performance, modular FastAPI backend for universal document conversion. Converts images, plain text, and Office docs into professional PDFs with a focus on memory efficiency.',
      technologies: ['Python','LibreOffice ','FastAPI','ReportLab'],
      github_url: 'https://github.com/yashrbaviskar/DoctorPDF',
      project_url: '',
      image_url: '',
      created_at: '',
      updated_at: '',
    },
  ]

  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects

  // Find the featured project (CREO)
  const featuredProject = displayProjects.find((p: any) => p.isFeatured || p.title.toLowerCase().includes('creo'))
  
  // Filter out the featured project so it doesn't repeat in the grid
  // REMOVED .slice(0, 3) so ALL projects display
  const otherProjects = displayProjects.filter((p: any) => 
    p.id !== featuredProject?.id && !p.title.toLowerCase().includes('creo')
  )

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-navy-50 to-white">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600">A showcase of my work and contributions to various projects</p>
      </div>
      
      {/* Featured Project - Full Width Highlight */}
      {featuredProject && (
        <div className="max-w-6xl mx-auto mb-16 px-4">
          <div className="group relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-1 hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-50 blur-xl animate-pulse"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Car className="text-white" size={40} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <span className="px-4 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-bold rounded-full border border-indigo-200">
                      Top Project
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  {featuredProject.technologies && (
                    <div className="flex flex-wrap gap-3 mb-8">
                      {featuredProject.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm rounded-full font-semibold border border-indigo-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    {featuredProject.github_url && (
                      <a href={featuredProject.github_url} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-all font-medium shadow-lg">
                        <Github size={18} /> View Code
                      </a>
                    )}
                    {featuredProject.project_url && (
                      <a href={featuredProject.project_url}
                         className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white rounded-xl transition-all font-medium shadow-lg">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Projects Grid - 3 Columns on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {otherProjects.map((project, index) => (
          <div key={project.id} className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                {getProjectIcon(index, project.title)}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-navy-900 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="mt-auto">
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-3">
                {project.github_url && (
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all text-xs font-medium border border-gray-200">
                    <Github size={14} /> Code
                  </a>
                )}
                {project.project_url && (
                  <a href={project.project_url}
                     className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all text-xs font-medium">
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}