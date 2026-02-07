# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## How to Get Your Supabase Credentials

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Create a new project or select an existing one
3. Navigate to **Settings** → **API**
4. Copy the following:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## Important Notes

- The `.env.local` file is already in `.gitignore` and won't be committed to version control
- Never commit your actual credentials to Git
- The `NEXT_PUBLIC_` prefix makes variables available in the browser
- The service role key should only be used server-side and kept secret

