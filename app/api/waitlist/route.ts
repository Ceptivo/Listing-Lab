import { NextResponse } from "next/server";
import { waitlist } from "@/content";
import { isValidEmail } from "@/lib/email";
import { addToWaitlist, WaitlistUnavailableError } from "@/lib/waitlist";

function failure(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  let email: unknown;
  try {
    email = (await request.json())?.email;
  } catch {
    return failure(waitlist.messages.invalidEmail, 400);
  }

  if (typeof email !== "string" || !isValidEmail(email)) {
    return failure(waitlist.messages.invalidEmail, 400);
  }

  try {
    await addToWaitlist(email.trim().toLowerCase());
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof WaitlistUnavailableError) {
      return failure(waitlist.messages.unavailable, 503);
    }
    console.error("Could not save waitlist sign-up", error);
    return failure(waitlist.messages.genericError, 500);
  }
}
