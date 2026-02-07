// Database types for TypeScript
// Update these based on your actual Supabase schema

export type Project = {
  id: string
  title: string
  description: string | null
  image_url: string | null
  project_url: string | null
  github_url: string | null
  technologies: string[] | null
  created_at: string
  updated_at: string
}

export type Skill = {
  id: string
  name: string
  category: string | null
  proficiency: number | null
  icon_url: string | null
  created_at: string
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export type PersonalInfo = {
  id: string
  name: string
  age: number | null
  photo_url: string | null
  bio: string | null
  location: string | null
  email: string | null
  phone: string | null
  resume_url: string | null
  created_at: string
  updated_at: string
}

export type Education = {
  id: string
  institution: string
  degree: string
  field_of_study: string | null
  start_date: string | null
  end_date: string | null
  grade: string | null
  description: string | null
  logo_url: string | null
  created_at: string
  updated_at: string
}

export type ProfileLink = {
  id: string
  platform: string
  url: string
  icon_url: string | null
  display_order: number
  created_at: string
  updated_at: string
}

export type Position = {
  id: string
  title: string
  organization: string
  start_date: string | null
  end_date: string | null
  current: boolean
  description: string | null
  achievements: string[] | null
  created_at: string
  updated_at: string
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  featured_image: string | null
  published: boolean
  created_at: string
  updated_at: string
}

