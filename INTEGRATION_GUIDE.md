# Frontend Code Integration Guide

This guide will help you integrate the frontend code from the markdown files into your Next.js application.

## Step 1: Extract Code from Markdown Files

1. Open `frontend-components.md` and copy your component code
2. Open `frontend-pages.md` and copy your page code
3. Open `frontend-styles.md` and copy your styles
4. Open `frontend-config.md` and review any configuration

## Step 2: Create Component Files

### For Components:
1. Create a `components` directory in the root or `app` directory:
   ```bash
   mkdir components
   # or
   mkdir app/components
   ```

2. Create individual component files (e.g., `components/Header.tsx`, `components/Footer.tsx`)

3. Convert your components to TypeScript if needed:
   - Change `.jsx` to `.tsx`
   - Add type annotations
   - Import React if using JSX

### Example:
```tsx
// components/Header.tsx
import React from 'react'

export default function Header() {
  return (
    <header>
      {/* Your header code from frontend-components.md */}
    </header>
  )
}
```

## Step 3: Create Page Files

### For Pages:
1. Create page files in the `app` directory following Next.js App Router conventions:
   - `app/about/page.tsx` for `/about` route
   - `app/projects/page.tsx` for `/projects` route
   - `app/contact/page.tsx` for `/contact` route

2. Use the following structure:
```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      {/* Your page code from frontend-pages.md */}
    </div>
  )
}
```

## Step 4: Add Styles

### Option 1: Global Styles
Add your CSS to `app/globals.css`

### Option 2: CSS Modules
Create `ComponentName.module.css` files alongside your components

### Option 3: Tailwind CSS
If using Tailwind, add classes directly to your JSX

### Option 4: Styled Components
Install styled-components and use it in your components

## Step 5: Integrate with Supabase

### Fetching Data:
```tsx
// app/projects/page.tsx
import { createClient } from '@/lib/supabase/server'

export default async function ProjectsPage() {
  const supabase = await createClient()
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
  
  return (
    <div>
      {projects?.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  )
}
```

### Client-Side Data Fetching:
```tsx
'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ProjectsList() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    async function fetchProjects() {
      const supabase = createClient()
      const { data } = await supabase.from('projects').select('*')
      setProjects(data || [])
    }
    fetchProjects()
  }, [])
  
  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  )
}
```

## Step 6: Update Root Layout

Modify `app/layout.tsx` to include your global components:

```tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

## Step 7: Test Your Integration

1. Run the development server: `npm run dev`
2. Navigate to your pages and verify everything works
3. Check the browser console for any errors
4. Test API endpoints and database connections

## Common Issues and Solutions

### Issue: Import errors
- **Solution**: Check that file paths use `@/` alias (configured in `tsconfig.json`)

### Issue: TypeScript errors
- **Solution**: Add proper type annotations or use `any` temporarily

### Issue: Styles not applying
- **Solution**: Ensure CSS files are imported in the correct order

### Issue: Supabase connection errors
- **Solution**: Verify `.env.local` has correct credentials

## Next Steps

1. Customize the database schema in `supabase/schema.sql` if needed
2. Add more API routes in `app/api/` as required
3. Set up authentication if needed
4. Deploy to production

