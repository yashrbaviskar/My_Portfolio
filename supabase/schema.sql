-- Portfolio Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Example: Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT,
  project_url TEXT,
  github_url TEXT,
  technologies TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Example: Skills Table
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50),
  proficiency INTEGER CHECK (proficiency >= 0 AND proficiency <= 100),
  icon_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Example: Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Personal Information Table
CREATE TABLE IF NOT EXISTS personal_info (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INTEGER,
  photo_url TEXT,
  bio TEXT,
  location VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  resume_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Education Table
CREATE TABLE IF NOT EXISTS education (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  institution VARCHAR(255) NOT NULL,
  degree VARCHAR(255) NOT NULL,
  field_of_study VARCHAR(255),
  start_date DATE,
  end_date DATE,
  grade VARCHAR(50),
  description TEXT,
  logo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Profile Links Table
CREATE TABLE IF NOT EXISTS profile_links (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  platform VARCHAR(100) NOT NULL,
  url TEXT NOT NULL,
  icon_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Positions of Responsibility Table
CREATE TABLE IF NOT EXISTS positions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  organization VARCHAR(255) NOT NULL,
  start_date DATE,
  end_date DATE,
  current BOOLEAN DEFAULT false,
  description TEXT,
  achievements TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Example: Blog Posts Table (if needed)
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_education_start_date ON education(start_date DESC);
CREATE INDEX IF NOT EXISTS idx_profile_links_order ON profile_links(display_order);
CREATE INDEX IF NOT EXISTS idx_positions_start_date ON positions(start_date DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE personal_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE positions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on skills"
  ON skills FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on blog_posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Allow public read access on personal_info"
  ON personal_info FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on education"
  ON education FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on profile_links"
  ON profile_links FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on positions"
  ON positions FOR SELECT
  USING (true);

-- Allow anyone to insert contact messages
CREATE POLICY "Allow public insert on contact_messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- Note: For authenticated admin operations, you would create additional policies
-- Example:
-- CREATE POLICY "Allow admin full access on projects"
--   ON projects FOR ALL
--   USING (auth.role() = 'authenticated' AND auth.uid() IN (SELECT user_id FROM admins));

