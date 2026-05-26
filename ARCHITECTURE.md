# Architecture Overview

## Frontend

- React
- TypeScript
- Tailwind CSS
- Vite

## Planned Backend

- Supabase for database and lead storage
- Resend for transactional emails

## Planned Features

1. Spend input form
2. Audit recommendation engine
3. AI-generated personalized summary
4. Shareable public audit URLs
5. Lead capture and storage

## Deployment

- Vercel

## Scalability Notes

If Burnwise AI needed to support 10k+ audits per day, I would:

- Move persistence to Supabase or PostgreSQL
- Add server-side audit storage
- Cache pricing data centrally
- Add API rate limiting
- Move AI summary generation to backend workers
- Add analytics and monitoring infrastructure