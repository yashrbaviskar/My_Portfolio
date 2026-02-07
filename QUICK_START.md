# Quick Start Guide

## 🚀 Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** in your Supabase dashboard
3. Copy and paste the entire contents of `supabase/schema.sql`
4. Run the SQL script

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Get these values from: **Supabase Dashboard → Settings → API**

### 4. Add Your Data to Supabase

#### Personal Information
Go to **Table Editor → personal_info** and insert:
```json
{
  "name": "Your Name",
  "age": 25,
  "photo_url": "https://example.com/photo.jpg",
  "bio": "Your bio here...",
  "location": "City, Country",
  "email": "your.email@example.com"
}
```

#### Education
Go to **Table Editor → education** and add your education entries:
```json
{
  "institution": "University Name",
  "degree": "Bachelor of Science",
  "field_of_study": "Computer Science",
  "start_date": "2020-09-01",
  "end_date": "2024-05-01",
  "grade": "3.8/4.0"
}
```

#### Profile Links
Go to **Table Editor → profile_links** and add:
```json
{
  "platform": "GitHub",
  "url": "https://github.com/yourusername",
  "display_order": 1
}
```

Add more for LinkedIn, LeetCode, GeeksforGeeks, etc.

#### Skills
Go to **Table Editor → skills** and add:
```json
{
  "name": "JavaScript",
  "category": "Programming Languages",
  "proficiency": 90
}
```

#### Projects
Go to **Table Editor → projects** and add:
```json
{
  "title": "Project Name",
  "description": "Project description...",
  "image_url": "https://example.com/project.jpg",
  "github_url": "https://github.com/yourusername/project",
  "project_url": "https://yourproject.com",
  "technologies": ["React", "Node.js", "PostgreSQL"]
}
```

#### Positions
Go to **Table Editor → positions** and add:
```json
{
  "title": "Software Developer",
  "organization": "Company Name",
  "start_date": "2023-01-01",
  "end_date": null,
  "current": true,
  "description": "Job description...",
  "achievements": ["Achievement 1", "Achievement 2"]
}
```

### 5. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📝 Portfolio Sections Overview

Your portfolio includes these sections (in order):

1. **Hero** - Personal photo, name, age, bio, profile links
2. **About** - Detailed biography
3. **Education** - Education background
4. **Skills** - Technical skills organized by category
5. **Projects** - Projects with GitHub and live demo links
6. **Positions** - Positions of responsibility/experience
7. **Contact** - Contact form and information

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` and modify the `primary` color values.

### Update Content
All content comes from Supabase. Update your database tables to change what's displayed.

### Add Sections
1. Create a new component in `app/components/`
2. Add it to `app/page.tsx`
3. Create API route if needed in `app/api/`

## 🔧 Troubleshooting

### Images not loading?
- Make sure image URLs are publicly accessible
- Use full URLs (https://) not relative paths

### Data not showing?
- Check Supabase connection in `.env.local`
- Verify data exists in Supabase tables
- Check browser console for errors

### Styling issues?
- Make sure Tailwind CSS is properly configured
- Run `npm install` to ensure all dependencies are installed

## 📚 Next Steps

1. Customize the design to match your brand
2. Add more projects and skills
3. Optimize images (consider using Supabase Storage)
4. Deploy to Vercel or your preferred platform

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

The portfolio is now ready! 🎉

