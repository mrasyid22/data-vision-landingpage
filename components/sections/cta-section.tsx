"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export function CTASection() {
  const { t } = useLanguage()

  const waPhone = "6281234567890"
  const waText = encodeURIComponent(
    t('cta.whatsapp.message') || "Halo tim Grinty! Saya tertarik mencoba Grinty Data Vision setelah melihat iklan Meta. Mohon bantuannya.",
  )
  const waHref = `https://wa.me/${waPhone}?text=${waText}`

  return (
    <section id="contact" className="py-12 md:py-16" aria-labelledby="cta-title">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 id="cta-title" className="text-2xl md:text-3xl font-bold text-balance">
            {t('cta.title')}
          </h2>
          <p className="text-muted-foreground mt-2">
            {t('cta.subtitle')}
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90 w-full sm:w-auto">
              <a
                href="https://app.vision.grinty.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('cta.primary')}
              >
                {t('cta.primary')}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label={t('cta.secondary')}>
                {t('cta.secondary')}
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">{t('cta.note')}</p>
        </div>

        <div className="rounded-lg border border-border p-5 bg-card">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">{t('cta.benefits.title')}</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>{t('cta.benefits1')}</li>
              <li>{t('cta.benefits2')}</li>
              <li>{t('cta.benefits3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
