import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Download, Sparkles, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Import Laporan dari Platform",
    desc: "Unduh laporan penjualan dan iklan dari Shopee, Tokopedia, Meta Ads, dan TikTok",
  },
  {
    icon: Upload,
    title: "Upload ke Data Vision",
    desc: "Upload laporan ke dashboard dengan interface yang mudah dan user-friendly",
  },
  {
    icon: Sparkles,
    title: "Analisis Mendalam",
    desc: "Platform memproses data dan memberikan insights otomatis",
    comingSoon: true,
  },
  {
    icon: TrendingUp,
    title: "Optimalkan & Tingkatkan Penjualan",
    desc: "Gunakan insights untuk optimalkan iklan dan tingkatkan performa bisnis",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-16" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="how-title" className="text-2xl md:text-3xl font-bold mb-6">
          Cara Kerja Data Vision
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          {steps.map(({ icon: Icon, title, desc, comingSoon }) => (
            <Card key={title} className="border border-border">
              <CardHeader>
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
