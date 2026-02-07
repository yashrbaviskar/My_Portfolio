import { createClient } from '@/lib/supabase/server'
import Header from './components/Header'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ConnectWithMe from './components/ConnectWithMe'
import Achievements from './components/Achievements'
import Positions from './components/Positions'
import Footer from './components/Footer'

export default async function Home() {
  let personalInfo = null
  let education: any[] = []
  let skills: any[] = []
  let projects: any[] = []
  let positions: any[] = []
  let profileLinks: any[] = []

  try {
    const supabase = await createClient()

    // Fetch all data in parallel
    const [
      { data: personalInfoData },
      { data: educationData },
      { data: skillsData },
      { data: projectsData },
      { data: positionsData },
      { data: profileLinksData },
    ] = await Promise.all([
      supabase.from('personal_info').select('*').limit(1).maybeSingle(),
      supabase.from('education').select('*').order('start_date', { ascending: false }),
      supabase.from('skills').select('*').order('proficiency', { ascending: false }),
      supabase.from('projects').select('*').order('created_at', { ascending: false }),
      supabase.from('positions').select('*').order('start_date', { ascending: false }),
      supabase.from('profile_links').select('*').order('display_order', { ascending: true }),
    ])

    personalInfo = personalInfoData
    education = educationData || []
    skills = skillsData || []
    projects = projectsData || []
    positions = positionsData || []
    profileLinks = profileLinksData || []
  } catch (error) {
    // If Supabase is not configured, continue with empty data
    console.warn('Supabase not configured or connection failed. Using empty data.')
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero personalInfo={personalInfo} profileLinks={profileLinks} />
      <Statistics />
      <Education education={education} />
      <Experience />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <ConnectWithMe profileLinks={profileLinks} />
      <Achievements />
      <Positions positions={positions} />
      <Footer personalInfo={personalInfo} profileLinks={profileLinks} />
    </main>
  )
}
