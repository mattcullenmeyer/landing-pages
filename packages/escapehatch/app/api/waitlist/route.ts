import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = (await request.json().catch(() => ({}))) as { email?: string }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // Simulate persistence by logging. Replace with your email service or database.
    console.log("[waitlist] new signup:", email)

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}
