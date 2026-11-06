import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

const WAITLIST_FILE = path.join(process.cwd(), ".data", "waitlist.jsonl");

/** Thrown when this deployment has nowhere permanent to keep sign-ups. */
export class WaitlistUnavailableError extends Error {}

/**
 * Stores a sign-up, recording when consent was given (POPIA).
 *
 * With SUPABASE_URL and SUPABASE_SECRET_KEY set, it goes to Supabase. Without
 * them it falls back to a local file for development. Vercel's disk is wiped
 * between requests, so a missing key there shows a "not open yet" message
 * rather than appearing to succeed and silently losing the lead.
 */
export async function addToWaitlist(email: string): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (url && secretKey) {
    await saveToSupabase(url, secretKey, email);
  } else if (process.env.VERCEL) {
    throw new WaitlistUnavailableError();
  } else {
    await saveToFile(email);
  }
}

async function saveToSupabase(url: string, secretKey: string, email: string) {
  const response = await fetch(`${url}/rest/v1/waitlist?on_conflict=email`, {
    method: "POST",
    headers: {
      apikey: secretKey,
      "Content-Type": "application/json",
      // Signing up twice keeps the original record and still counts as success.
      Prefer: "resolution=ignore-duplicates,return=minimal",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(`Supabase returned ${response.status}: ${await response.text()}`);
  }
}

async function saveToFile(email: string) {
  await mkdir(path.dirname(WAITLIST_FILE), { recursive: true });

  const existing = await readFile(WAITLIST_FILE, "utf8").catch(() => "");
  const alreadyJoined = existing
    .split("\n")
    .filter(Boolean)
    .some((line) => (JSON.parse(line) as { email: string }).email === email);
  if (alreadyJoined) return;

  const entry = { email, consentedAt: new Date().toISOString() };
  await appendFile(WAITLIST_FILE, `${JSON.stringify(entry)}\n`, "utf8");
}
