# Portfolio - Full Stack Application

A modern full-stack portfolio application built with Next.js and Supabase.

## 🚀 Features

- **Frontend**: Next.js 14 with React and TypeScript
- **Backend**: Supabase (PostgreSQL database, Authentication, Storage)
- **API Routes**: RESTful API endpoints for data operations
- **Type Safety**: Full TypeScript support
- **Modern Stack**: Latest Next.js App Router

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier works)

## 🛠️ Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Set Up Supabase

1. Go to [Supabase](https://supabase.com) and create a new project
2. Wait for your project to be fully provisioned
3. Go to **Settings** → **API** to get your credentials:
   - Project URL
   - Anon/Public Key
   - Service Role Key (optional, for admin operations)

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4. Set Up Database Schema

1. Open your Supabase project dashboard
2. Go to **SQL Editor**
3. Copy and paste the contents of `supabase/schema.sql`
4. Run the SQL script to create tables and policies

### 5. Add Your Frontend Code

1. Open the markdown files in the root directory:
   - `frontend-components.md` - Add your React components
   - `frontend-pages.md` - Add your page components
   - `frontend-styles.md` - Add your CSS/styling
   - `frontend-config.md` - Add any configuration

2. After adding your code, integrate it into the application:
   - Copy components to `app/components/` or `components/`
   - Copy pages to `app/` directory
   - Add styles to `app/globals.css` or create component-specific CSS files

### 6. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── projects/      # Projects API
│   │   ├── skills/        # Skills API
│   │   └── contact/       # Contact form API
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── lib/
│   └── supabase/          # Supabase client utilities
│       ├── client.ts      # Browser client
│       ├── server.ts      # Server client
│       └── middleware.ts # Middleware helper
├── supabase/
│   └── schema.sql         # Database schema
├── frontend-*.md          # Markdown files for your frontend code
├── package.json
├── tsconfig.json
└── README.md
```

## 🔌 API Endpoints

### Projects
- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create a new project

### Skills
- `GET /api/skills` - Fetch all skills

### Contact
- `POST /api/contact` - Send a contact message

## 🗄️ Database Tables

- **projects**: Portfolio projects
- **skills**: Technical skills
- **contact_messages**: Contact form submissions
- **blog_posts**: Blog posts (optional)

## 🔐 Authentication

The application includes Supabase authentication setup. To enable authentication:

1. Configure authentication providers in Supabase dashboard
2. Use the Supabase client in your components:
   ```typescript
   import { createClient } from '@/lib/supabase/client'
   
   const supabase = createClient()
   await supabase.auth.signInWithPassword({ email, password })
   ```

## 📝 Adding Your Frontend Code

1. **Components**: Add your React components to the appropriate directories
2. **Pages**: Create new pages in the `app/` directory
3. **Styles**: Add CSS to `globals.css` or create module CSS files
4. **API Integration**: Use the provided API routes or create new ones

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

