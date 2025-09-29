"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChartBig as ChartBar, Target, Link2, Brain } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: ChartBar,
      title: t('features.automation.title'),
      desc: t('features.automation.desc'),
    },
    {
      icon: Target,
      title: t('features.tracking.title'),
      desc: t('features.tracking.desc'),
    },
    {
      icon: Link2,
      title: t('features.integration.title'),
      desc: t('features.integration.desc'),
    },
    {
      icon: Brain,
      title: t('features.ai.title'),
      desc: t('features.ai.desc'),
      comingSoon: true,
    },
  ]

  return (
    <section id="features" className="py-12 md:py-16 bg-secondary" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="features-title" className="text-2xl md:text-3xl font-bold mb-6">
          {t('features.title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {features.map(({ icon: Icon, title, desc, comingSoon }) => (
            <Card key={title} className="border border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Icon className="size-5 text-primary" />
                  <span>{title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
