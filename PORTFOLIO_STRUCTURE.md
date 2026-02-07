# Portfolio Website Structure

This document outlines the complete structure of your portfolio website with all sections and their organization.

## 📋 Portfolio Sections

### 1. **Header/Navigation** (`app/components/Header.tsx`)
- Fixed navigation bar with smooth scroll
- Responsive mobile menu
- Links to all sections:
  - About
  - Education
  - Skills
  - Projects
  - Experience (Positions)
  - Contact

### 2. **Hero Section** (`app/components/Hero.tsx`)
- **Personal Details:**
  - Profile photo (circular with ring border)
  - Name (large, prominent)
  - Age
  - Bio/Introduction
  - Location
- **Profile Links:**
  - LinkedIn
  - GitHub
  - LeetCode
  - GeeksforGeeks
  - Any other social/professional links
- Beautiful gradient background
- Responsive layout (stacks on mobile)

### 3. **About Section** (`app/components/About.tsx`)
- Detailed biography
- Personal introduction
- Professional summary
- Card-based layout with icon

### 4. **Education Section** (`app/components/Education.tsx`)
- **Education Background:**
  - Institution name
  - Degree/Certification
  - Field of study
  - Start and end dates
  - Grade/GPA (if applicable)
  - Description/Highlights
- Timeline-style layout
- Icon-based design

### 5. **Technical Skills Section** (`app/components/Skills.tsx`)
- **Skills organized by category:**
  - Programming Languages
  - Frameworks & Libraries
  - Tools & Technologies
  - Databases
  - Cloud Services
  - etc.
- **Each skill shows:**
  - Skill name
  - Proficiency level (percentage)
  - Progress bar visualization
- Grid layout (responsive)
- Card-based design

### 6. **Projects Section** (`app/components/Projects.tsx`)
- **Project Cards with:**
  - Project image/thumbnail
  - Project title
  - Description
  - Technologies used (tags)
  - GitHub link
  - Deployed project link
- Grid layout (3 columns on desktop)
- Hover effects
- Image zoom on hover

### 7. **Positions of Responsibility** (`app/components/Positions.tsx`)
- **Each position includes:**
  - Title/Role
  - Organization/Company
  - Start and end dates
  - Current position indicator
  - Description
  - Key achievements (bullet points)
- Timeline-style layout
- Icon-based design

### 8. **Contact Section** (`app/components/Contact.tsx`)
- **Contact Information:**
  - Email
  - Phone
  - Location
- **Contact Form:**
  - Name field
  - Email field
  - Message field
  - Submit button
- Two-column layout (info + form)
- Form validation
- Success/error messages

### 9. **Footer**
- Copyright information
- Year display
- Simple, clean design

## 🎨 Design Features

### Color Scheme
- Primary color: Blue (customizable in `tailwind.config.js`)
- Light/Dark mode support
- Gradient backgrounds
- Consistent color palette

### Typography
- Clean, modern fonts
- Responsive text sizes
- Clear hierarchy

### Layout
- **Max width:** 7xl (1280px)
- **Padding:** Responsive (mobile to desktop)
- **Spacing:** Consistent section padding
- **Grid systems:** Responsive grids for projects and skills

### Interactive Elements
- Smooth scrolling navigation
- Hover effects on cards
- Transitions and animations
- Mobile-responsive menu

## 📊 Database Schema

### Tables:
1. **personal_info** - Personal details, photo, bio
2. **education** - Education background
3. **skills** - Technical skills with categories
4. **projects** - Projects with links
5. **positions** - Positions of responsibility
6. **profile_links** - Social/professional links
7. **contact_messages** - Contact form submissions

## 🔌 API Endpoints

- `GET /api/personal-info` - Get personal information
- `GET /api/education` - Get education history
- `GET /api/skills` - Get skills
- `GET /api/projects` - Get projects
- `GET /api/positions` - Get positions
- `GET /api/profile-links` - Get profile links
- `POST /api/contact` - Submit contact form

## 📱 Responsive Design

- **Mobile:** Single column, stacked layout
- **Tablet:** 2-column grids where appropriate
- **Desktop:** 3-column grids, side-by-side layouts

## 🚀 Getting Started

1. Set up Supabase and run the schema
2. Add your data to Supabase tables
3. Configure environment variables
4. Run `npm install`
5. Run `npm run dev`
6. Visit `http://localhost:3000`

## 📝 Customization

### Colors
Edit `tailwind.config.js` to change the primary color scheme.

### Content
All content is fetched from Supabase. Update your database to change content.

### Styling
- Global styles: `app/globals.css`
- Component styles: Inline Tailwind classes
- Custom utilities: Defined in `globals.css`

## 🎯 Best Practices

1. **Images:** Use optimized images (consider Next.js Image component for local images)
2. **Performance:** All data is server-side rendered
3. **SEO:** Metadata configured in `app/layout.tsx`
4. **Accessibility:** Semantic HTML, proper alt texts
5. **Dark Mode:** Automatic based on system preference

## 📦 Component Structure

```
app/
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Hero section with personal info
│   ├── About.tsx        # About section
│   ├── Education.tsx    # Education section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects section
│   ├── Positions.tsx    # Positions section
│   └── Contact.tsx      # Contact section
├── api/                 # API routes
├── page.tsx             # Main page (assembles all components)
└── layout.tsx           # Root layout
```

## 🔄 Data Flow

1. **Server-side:** `app/page.tsx` fetches data from Supabase
2. **Components:** Receive data as props
3. **Client-side:** Interactive components use React hooks
4. **API:** Form submissions and dynamic data updates

## ✨ Features

- ✅ Fully responsive design
- ✅ Dark mode support
- ✅ Smooth scrolling navigation
- ✅ Form validation
- ✅ Image optimization ready
- ✅ SEO optimized
- ✅ TypeScript for type safety
- ✅ Modern UI/UX
- ✅ Accessible design

