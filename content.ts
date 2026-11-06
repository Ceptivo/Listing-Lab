/**
 * All site copy, product names and prices live here.
 * Edit this file to change the words on the site; components only handle layout.
 *
 * Anything in [SQUARE BRACKETS] is a placeholder. See PLACEHOLDERS.md.
 */

export const site = {
  name: "Listing Labs SA",
  shortName: "Listing Labs",
  title: "Listing Labs SA — AI for estate agents",
  description:
    "Practical AI training and tools for South African estate agents. Listings in minutes, follow-ups that never slip and a month of social posts in an afternoon.",
  contactEmail: "[YOUR EMAIL]",
  copyright: "© 2026 Listing Labs SA",
};

export const preorderBadge = "Pre-order · 50% off";

export const announcement = {
  text: "Pre-order now and save 50% on everything — founding member pricing ends at launch →",
  href: "#waitlist",
};

export const nav = {
  links: [
    { label: "What you’ll learn", href: "#learn" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Offers", href: "#offers" },
    { label: "Pricing", href: "#pricing", emphasised: true },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Pre-order · 50% off", href: "#waitlist" },
};

export const hero = {
  eyebrow: "AI training for South African estate agents",
  headline: "Sell more property.",
  headlineMuted: "Type a lot less.",
  body: "Listings in minutes. Follow-ups that never slip. A month of social posts in an afternoon. Practical AI, built for how agents in South Africa actually work.",
  primaryCta: { label: "Pre-order — save 50%", href: "#waitlist" },
  secondaryCta: { label: "See what you’ll learn", href: "#learn" },
  before: {
    label: "Your notes",
    text: "3 bed 2 bath, Durbanville. North-facing garden. New kitchen 2024. Double garage. Walk to schools. Seller motivated.",
  },
  after: {
    label: "Listing draft · 40 seconds",
    title: "Sun-filled family home, minutes from top Durbanville schools",
    text: "Step into a light, north-facing home built for family life. The newly renovated kitchen opens onto a private garden, three bedrooms give everyone room, and a double garage handles the school run. Walk to sought-after schools and enjoy the quiet of an established suburb.",
  },
};

export const waitlist = {
  headline: "Be first in.",
  body: "Pre-order today and get 50% off the course, the dashboard, the toolkits and membership. Founding member pricing ends at launch.",
  emailLabel: "Email address",
  emailPlaceholder: "you@agency.co.za",
  button: "Pre-order at 50% off",
  buttonSubmitting: "Sending…",
  consent: {
    before:
      "By joining you agree to receive emails from Listing Labs SA. Unsubscribe anytime. See our ",
    linkLabel: "Privacy Policy",
    linkHref: "/privacy",
    after: ".",
  },
  messages: {
    success:
      "You’re on the list. We’ll email you before launch with your founding member pricing.",
    invalidEmail: "Please enter a valid email address.",
    unavailable: "Pre-orders aren’t open just yet. Please check back soon.",
    genericError: "Something went wrong. Please try again.",
  },
};

export const benefits = {
  headline: "Give the admin to AI.",
  headlineMuted: "Keep the relationships.",
  items: [
    {
      number: "01",
      title: "Listings in minutes",
      text: "Turn rough notes and photos into Property24-ready descriptions, headlines and feature lists — in your voice.",
    },
    {
      number: "02",
      title: "Follow-ups that never slip",
      text: "WhatsApp and email templates for new enquiries, after show days and for leads that went quiet.",
    },
    {
      number: "03",
      title: "Content without the grind",
      text: "A month of posts, reel scripts and area spotlights from one short session — so you stay visible without living on your phone.",
    },
  ],
};

/**
 * NOT REAL YET. Every stat and review below is a placeholder.
 * When you have real data, replace the values and set `tag` to null to remove
 * the visible "Placeholder" / "Sample review" label.
 */
export const socialProof: {
  headline: string;
  stats: { tag: string | null; value: string; label: string }[];
  reviews: {
    tag: string | null;
    stars: number;
    quote: string;
    name: string;
    detail: string;
  }[];
} = {
  headline: "Agents are talking.",
  stats: [
    { tag: "Placeholder", value: "10k+", label: "agents have taken the course" },
    { tag: "Placeholder", value: "93%", label: "of agents report more sales" },
    { tag: "Placeholder", value: "6 hrs", label: "saved per agent, every week" },
  ],
  reviews: [
    {
      tag: "Sample review",
      stars: 5,
      quote:
        "I used to spend my Sunday nights writing listings. Now it takes me ten minutes and they read better.",
      name: "[Agent name]",
      detail: "[Agency] · [Area]",
    },
    {
      tag: "Sample review",
      stars: 5,
      quote:
        "The follow-up templates alone paid for the course. I stopped losing leads after show days.",
      name: "[Agent name]",
      detail: "[Agency] · [Area]",
    },
    {
      tag: "Sample review",
      stars: 5,
      quote:
        "Finally, AI training that actually understands how property works in South Africa.",
      name: "[Agent name]",
      detail: "[Agency] · [Area]",
    },
  ],
};

export const builtForSA = {
  headline: "Built for how SA agents actually work.",
  tags: [
    "Property24 & Private Property ready",
    "WhatsApp-first",
    "POPIA-aware",
    "Mandate-focused",
    "No tech skills needed",
  ],
};

export const dashboard = {
  eyebrow: "The Listing Labs Dashboard",
  headline: "Your whole business.",
  headlineMuted: "One screen.",
  body: "Appointments, leads, follow-ups and listings in one place — with AI built in, so the next message is already drafted.",
  previewLabel:
    "Preview of the Listing Labs Dashboard showing today’s schedule, pipeline, follow-ups and listings",
  /** Sample data shown inside the app-window mockup. */
  preview: {
    url: "app.listinglabs.co.za",
    appName: "Listing Labs",
    sidebar: ["Today", "Pipeline", "Follow-ups", "Listings", "AI Studio"],
    date: "Friday, 6 November",
    greeting: "Good morning.",
    newListing: "+ New listing",
    stats: [
      { label: "Appointments today", value: "4" },
      { label: "Follow-ups due", value: "7" },
      { label: "Active listings", value: "12" },
      { label: "Deals in transfer", value: "3" },
    ],
    scheduleTitle: "Today",
    schedule: [
      { time: "09:00", text: "Valuation · 14 Oak Ave" },
      { time: "11:30", text: "Viewing · The Naidoo family" },
      { time: "14:00", text: "Show day · 7 Protea Close" },
      { time: "16:30", text: "Bond update call · J. Mokoena" },
    ],
    followUpsTitle: "Follow-ups",
    draft: {
      label: "AI draft · WhatsApp",
      text: "Hi Sarah, thanks for coming through on Sunday. The sellers are open to offers this week — shall I send the comparable sales?",
      send: "Send",
      edit: "Edit",
    },
    followUps: [
      { text: "Lead from Property24", when: "2h ago" },
      { text: "Quiet lead · 14 days", when: "Due today" },
    ],
    pipelineTitle: "Pipeline",
    pipeline: [
      { label: "New leads", value: "18" },
      { label: "Viewings", value: "9" },
      { label: "Offers", value: "4" },
      { label: "Bond approval", value: "2" },
      { label: "Transfer", value: "3" },
    ],
  },
  features: [
    {
      title: "Your day, sorted",
      text: "Every valuation, viewing and show day in one clear list each morning.",
    },
    {
      title: "Follow-ups, pre-written",
      text: "AI drafts the WhatsApp or email. You check it and hit send.",
    },
    {
      title: "See every deal",
      text: "From first enquiry through bond approval to transfer, nothing gets lost.",
    },
  ],
};

export const curriculum = {
  eyebrow: "What you’ll learn",
  headline: "Seven workflows.",
  headlineMuted: "One calmer week.",
  modules: [
    "AI basics for agents — what to use, what never to paste in",
    "Listings that sell",
    "Social media on autopilot",
    "Lead follow-up on WhatsApp and email",
    "Winning mandates",
    "Admin in minutes",
    "Your weekly AI system",
  ],
};

/** The one place prices are set. Offers and Pricing both read from here. */
export const products = {
  promptPack: {
    name: "The Prompt Pack",
    type: "Toolkit",
    billing: "Once-off",
    fullPrice: "R399",
    preorderPrice: "R199",
    unit: "",
    description:
      "Copy-and-paste prompts for listings, follow-ups and social posts. Use them today.",
  },
  course: {
    name: "The Course",
    type: "Course",
    billing: "Once-off",
    fullPrice: "R1,999",
    preorderPrice: "R999",
    unit: "",
    description:
      "All seven workflows, step by step, with templates and short video lessons.",
  },
  dashboard: {
    name: "The Dashboard",
    type: "Software",
    billing: "Per month",
    fullPrice: "R299",
    preorderPrice: "R149",
    unit: "/month",
    description:
      "Appointments, leads, follow-ups and listings in one place, with AI built in.",
  },
  whatsapp: {
    name: "WhatsApp Script Library",
    type: "Toolkit",
    billing: "Once-off",
    fullPrice: "R299",
    preorderPrice: "R149",
    unit: "",
    description:
      "Ready-to-send messages for every stage — first enquiry, after the viewing, the offer, bond delays and transfer day.",
  },
  showDay: {
    name: "Show Day Kit",
    type: "Toolkit",
    billing: "Once-off",
    fullPrice: "R199",
    preorderPrice: "R99",
    unit: "",
    description:
      "A POPIA-friendly sign-in sheet, a buyer feedback form and the follow-up messages to send that evening.",
  },
  newAgent: {
    name: "New Agent Starter Kit",
    type: "Toolkit",
    billing: "Once-off",
    fullPrice: "R599",
    preorderPrice: "R299",
    unit: "",
    description:
      "Structure, scripts and content for candidate and new agents — everything you need for your first 90 days.",
  },
  membership: {
    name: "Listing Labs Membership",
    type: "Membership",
    billing: "Per month",
    fullPrice: "R499",
    preorderPrice: "R249",
    unit: "/month",
    description: "",
  },
};

export type Product = (typeof products)[keyof typeof products];

export const offers = {
  headline: "Start small.",
  headlineMuted: "Then go all in.",
  intro: { before: "Pre-order anything before launch and pay ", strong: "50% less", after: "." },
  featuredCta: { label: "Pre-order now", href: "#waitlist" },
  toolkitsTitle: "Toolkits",
  toolkitsNote: "Download today, use on your next deal.",
  membership: {
    badge: "Membership",
    headline: "Listing Labs Members.",
    headlineMuted: "Always one step ahead.",
    perks: [
      "New prompts & templates every month",
      "Monthly live Q&A",
      "Private agent community",
    ],
    cta: { label: "Pre-order now", href: "#waitlist" },
  },
};

export const pricing = {
  eyebrow: "Pricing",
  headline: "Every price.",
  headlineMuted: "No surprises.",
  body: "Pre-order before launch and pay half. Monthly plans keep the founding price for your first 12 months.",
  tableLabel: "All Listing Labs products and prices",
  columns: {
    product: "Product",
    type: "Type",
    billing: "Billing",
    full: "Full price",
    preorder: "Pre-order (50% off)",
  },
  rows: [
    products.promptPack,
    products.course,
    products.dashboard,
    products.whatsapp,
    products.showDay,
    products.newAgent,
    products.membership,
  ],
  note: "Prices in South African rand. [VAT NOTE].",
  cta: { label: "Pre-order now", href: "#waitlist" },
};

export const faq = {
  headline: "Questions.",
  items: [
    {
      question: "How does pre-ordering work?",
      answer:
        "Pre-order before launch and you pay half price. You get access the day it launches on [LAUNCH DATE]. [YOUR REFUND POLICY].",
    },
    {
      question: "Do I need to be good with tech?",
      answer:
        "No. If you can send a WhatsApp, you can do this. Everything is copy, paste and tweak.",
    },
    {
      question: "Which AI tools do you use?",
      answer:
        "Mainstream assistants with free plans to start. The prompts work across them, so you’re not locked into one app.",
    },
    {
      question: "What about client data and POPIA?",
      answer:
        "It’s built in from lesson one: what you can share with AI, what you never paste in, and how to keep client details private.",
    },
    {
      question: "Will AI write my contracts?",
      answer:
        "No. AI drafts and summarises; you and your agency’s processes stay in charge of anything legal, like offers to purchase and mandates.",
    },
  ],
};

export const footer = {
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "TikTok", href: "https://tiktok.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
  contactLabel: "Contact",
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  wordmark: "Listing Labs",
};

export const legalNotice =
  "Placeholder page. Have this reviewed and completed before launch.";

export const privacyPage = {
  title: "Privacy Policy",
  description: "How Listing Labs SA handles your personal information.",
  sections: [
    {
      heading: "Who we are",
      text: "Listing Labs SA is operated by [COMPANY LEGAL NAME]. Our Information Officer is [INFORMATION OFFICER NAME]. You can reach us at [YOUR EMAIL].",
    },
    {
      heading: "What we collect",
      text: "When you use the pre-order form, we collect your email address and the date and time you gave consent.",
    },
    {
      heading: "Why we collect it",
      text: "We use your email address to send you information about Listing Labs SA, including launch news and founding member pricing. We process it on the basis of your consent, in line with the Protection of Personal Information Act (POPIA).",
    },
    {
      heading: "Who we share it with",
      text: "We store your email address with Supabase, our database provider, in [DATA STORAGE REGION]. We do not sell your personal information.",
    },
    {
      heading: "How long we keep it",
      text: "[RETENTION PERIOD].",
    },
    {
      heading: "Your rights",
      text: "You can unsubscribe at any time using the link in our emails. You can also ask us to access, correct or delete your personal information by writing to [YOUR EMAIL], and you may lodge a complaint with the Information Regulator of South Africa.",
    },
  ],
};

export const termsPage = {
  title: "Terms",
  description: "The terms that apply to Listing Labs SA products.",
  sections: [
    {
      heading: "Pre-orders",
      text: "[PRE-ORDER TERMS]. Launch date: [LAUNCH DATE].",
    },
    {
      heading: "Refunds",
      text: "[YOUR REFUND POLICY].",
    },
    {
      heading: "Prices",
      text: "Prices are in South African rand. [VAT NOTE].",
    },
    {
      heading: "Contact",
      text: "Questions about these terms can be sent to [YOUR EMAIL].",
    },
  ],
};
