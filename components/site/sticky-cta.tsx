"use client"

import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const waPhone = "6285711119453"
  const waText = encodeURIComponent(
    "Halo tim Grinty! Saya tertarik mencoba Grinty Data Vision setelah melihat iklan Meta.",
  )
  const waHref = `https://wa.me/${waPhone}?text=${waText}`

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:hidden border-t border-border bg-background/95 backdrop-blur"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-2">
        <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
          <a
            href="https://app.vision.grinty.id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Try Free Trial Now"
          >
            Coba Sekarang
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp Sales">
            Contact Us
          </a>
        </Button>
      </div>
    </div>
  )
}
