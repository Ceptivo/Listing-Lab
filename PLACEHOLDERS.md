# Before launch checklist

Everything below is in `content.ts` unless another file is named.

## Must do: sign-ups

- [ ] **Create the Supabase table** from `supabase/migrations/20261106000000_create_waitlist.sql`.
- [ ] **Add `SUPABASE_URL` and `SUPABASE_SECRET_KEY` to Vercel's environment variables.**
      Until they're set, the live site shows "Pre-orders aren't open just yet" instead of saving emails, because Vercel can't keep files.
- [ ] Supabase only stores the sign-ups. To actually email people and handle the "Unsubscribe anytime" promise, you'll still need an email tool.

## Business details

- [ ] `[LAUNCH DATE]`: FAQ "How does pre-ordering work?" and the Terms page
- [ ] `[YOUR REFUND POLICY]`: same FAQ answer and the Terms page
- [ ] `[VAT NOTE]`: under the pricing table and on the Terms page
- [ ] `[YOUR EMAIL]`: `site.contactEmail` (footer Contact link), the Privacy page and the Terms page

## Social links

These point to each site's home page. Replace them with your profiles in `footer.socials`.

- [ ] Instagram
- [ ] TikTok
- [ ] YouTube

## Stats (`socialProof.stats`)

Replace each value, then set its `tag` to `null` to remove the "Placeholder" label.

- [ ] `10k+` agents have taken the course
- [ ] `93%` of agents report more sales
- [ ] `6 hrs` saved per agent, every week

## Reviews (`socialProof.reviews`)

Replace the quote, name and detail with a real review, then set its `tag` to `null` to remove the "Sample review" label.

- [ ] Review 1: "I used to spend my Sunday nights…"; `[Agent name]`, `[Agency] · [Area]`
- [ ] Review 2: "The follow-up templates alone…"; `[Agent name]`, `[Agency] · [Area]`
- [ ] Review 3: "Finally, AI training that…"; `[Agent name]`, `[Agency] · [Area]`

## Privacy Policy (`privacyPage`)

- [ ] `[COMPANY LEGAL NAME]`
- [ ] `[INFORMATION OFFICER NAME]`
- [ ] `[DATA STORAGE REGION]`: where your Supabase project is hosted. If that's outside South Africa, have the POPIA cross-border wording checked
- [ ] `[RETENTION PERIOD]`
- [ ] Have the page reviewed, then remove the placeholder notice (`legalNotice`, shown by `components/LegalPage.tsx`)

## Terms (`termsPage`)

- [ ] `[PRE-ORDER TERMS]`
- [ ] Have the page reviewed

## Check these

- [ ] `app.listinglabs.co.za` in the dashboard preview: confirm this is the address you'll use (`dashboard.preview.url`)
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel once you have your domain, so social previews use it
