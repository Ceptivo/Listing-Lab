# Listing Labs SA

Marketing site built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the site

- **Words, products and prices:** `content.ts`
- **Before launch:** work through `PLACEHOLDERS.md`
- **Design reference:** `listing-labs-reference.html` is the approved mockup

## Sign-ups

The form posts to `/api/waitlist`, which saves to the `waitlist` table in Supabase (`supabase/migrations/` creates it).
Without Supabase keys, local sign-ups go to `.data/waitlist.jsonl`, and on Vercel the form shows a "not open yet" message.

## Deploy to Vercel

Push this folder to a GitHub repository, import it at https://vercel.com/new, and add `SUPABASE_URL` and `SUPABASE_SECRET_KEY` as environment variables.
