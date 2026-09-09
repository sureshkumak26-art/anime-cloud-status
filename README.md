# Anime Cloud Status Panel

Premium, responsive system-status dashboard for Anime Cloud.

## Included
- Public status dashboard
- Overall system health banner
- 8 starter services with uptime/latency cards
- 30-day visual uptime history
- Incident history
- Scheduled-maintenance section
- Auto-refresh indicator
- Admin console starter at `/admin`
- Secret-free `.env.example`
- Next.js + TypeScript

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production database
The UI is ready to be connected to Supabase. Add the public project URL and anon key from `.env.example`; keep service-role credentials server-side and out of Git. For a full production deployment, add Supabase Auth, Postgres tables/RLS, Realtime subscriptions, and a scheduled monitoring worker that records heartbeats.

## Deploy
Import this repository into Vercel, set the required environment variables, and deploy.

Repository: https://github.com/sureshkumak26-art/anime-cloud-status