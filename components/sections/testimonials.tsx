"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const testimonials = [
  {
    name: "Hafiz Zar Alvaro",
    company: "CEO of Poppy's Dream",
    quote:
      "Grinty understands our brand as if they were part of it. Their hands-on approach, data-driven mindset, and constant optimization have helped us grow in ways we never expected. I'm so grateful for this collaboration.",
    image: "/pijar.jpg",
  },
  {
    name: "Fridericiana Marie",
    company: "Founder and CEO of Maiimi",
    quote:
      "Grinty has been a long time growth partner for Maiimi, providing a founder-to-founder approach that goes beyond ads management. Their detailed data analytics turned insights into growth, helping us scale strategically in the bath experience market. With Grinty, every campaign is backed by data, not guesswork. Making our marketing more efficient and results-driven.",
    image: "/marie.jpg",
  },
  {
    name: "Randy Mahavira",
    company: "Co-Founder & CMO of Grounds Studio",
    quote:
      "Before working with Grinty, I used to underestimate the impact of ads HEHE. But partnering with them completely changed my perspective. They didn't just run ads—they helped Grounds for connecting our products to target market and most importantly, turn marketing effort into real sales growth. Grinty also provided all the essential data we needed to analyze and strategize our brand's growth. On top of that, they gave us valuable insights that shaped our content strategy, ensuring it resonated better with our audience.",
    image: "/randy.jpg",
  },
]

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-16" aria-labelledby="testi-title">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="testi-title" className="text-2xl md:text-3xl font-bold mb-6">
          {t('testimonials.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card key={t.name} className="border border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border">
                    <Image
                      src={t.image}
                      alt={`Foto ${t.name}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3">"{t.quote}"</p>
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            t('testimonials.stat1'),
            t('testimonials.stat2'),
            t('testimonials.stat3'),
            t('testimonials.stat4'),
          ].map((stat) => (
            <div key={stat} className="rounded-lg border border-border p-4 bg-secondary">
              <p className="font-semibold text-sm">{stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
