"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Pricing() {
  const { t } = useLanguage()

  const plans = [
    {
      name: t('pricing.monthly.name'),
      price: t('pricing.monthly.price'),
      original: t('pricing.monthly.original'),
      duration: t('pricing.monthly.duration'),
      features: JSON.parse(t('pricing.monthly.features')),
      cta: t('pricing.monthly.cta'),
    },
    {
      name: t('pricing.quarterly.name'),
      price: t('pricing.quarterly.price'),
      original: t('pricing.quarterly.original'),
      duration: t('pricing.quarterly.duration'),
      features: JSON.parse(t('pricing.quarterly.features')),
      cta: t('pricing.quarterly.cta'),
      badge: t('pricing.quarterly.badge'),
      featured: true,
    },
  ]

  return (
    <section id="pricing" className="py-12 md:py-16 bg-secondary" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="pricing-title" className="text-2xl md:text-3xl font-bold mb-2">
          {t('pricing.title')}
        </h2>
        <p className="text-muted-foreground mb-6">
          {t('pricing.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.featured ? "border-2 border-primary" : "border border-border"}>
              <CardHeader className="flex items-start justify-between">
                <CardTitle>{plan.name}</CardTitle>
                {plan.badge && <Badge className="bg-primary text-primary-foreground">{plan.badge}</Badge>}
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-semibold">{plan.price}</span>
                  <span className="line-through text-muted-foreground">{plan.original}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.duration}</p>
                <ul className="mt-4 grid gap-2">
                  {plan.features.map((f: string) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="size-4 mt-0.5 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  <a href="https://app.vision.grinty.id" target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          {t('pricing.payment')}
        </div>
      </div>
    </section>
  )
}
