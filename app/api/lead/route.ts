import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)

  if (!data || !data.email || !data.name || !data.company) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
  }

  // In a real integration, forward to CRM or email service here.
  // For now, return success.
  return NextResponse.json({ ok: true })
}
