"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { useLanguage } from "@/contexts/LanguageContext"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center">
          <img
            src="/gdv-logo.png"
            alt="Grinty Data Vision - Platform Analitik Marketing AI"
            className="h-6 sm:h-8 w-auto max-w-[100px] sm:max-w-[120px]"
          />
        </Link>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <div className="hidden md:block">
            <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
              <a
                href="https://app.vision.grinty.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('nav.tryFreeTrial')}
              >
                {t('nav.tryFreeTrial')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
