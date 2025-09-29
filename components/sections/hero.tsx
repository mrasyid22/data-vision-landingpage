"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Hero() {
  const { t } = useLanguage()

  const features = [
    t('hero.feature1'),
    t('hero.feature2'),
    t('hero.feature3'),
    t('hero.feature4'),
  ]

  return (
    <section className="bg-secondary" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Mobile: Image first */}
        <div className="relative w-full rounded-lg overflow-hidden border border-border order-first md:order-last">
          <img
            src="/hero-image.png"
            alt="Dashboard analitik Grinty Data Vision"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 order-last md:order-first">
          <h1 id="hero-title" className="text-3xl md:text-5xl font-bold text-balance">
            {t('hero.title')}
          </h1>
          <p className="text-muted-foreground text-pretty">
            {t('hero.subtitle')}
          </p>
          <ul className="grid gap-2">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
              <a
                href="https://app.vision.grinty.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('hero.cta')}
              >
                {t('hero.cta')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
