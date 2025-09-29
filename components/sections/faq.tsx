import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "Apakah Grinty Data Vision cocok untuk bisnis kecil?",
    a: "Ya! Platform kami dirancang untuk semua ukuran bisnis. Bahkan bisnis kecil dapat memanfaatkan insights AI untuk bersaing dengan yang lebih besar.",
  },
  {
    q: "Berapa lama proses setup?",
    a: "Setup awal memakan waktu 15-30 menit. Anda cukup import laporan pertama dari platform e-commerce Anda dan tim support kami akan membimbing setup dashboard.",
  },
  {
    q: "Apakah data saya aman?",
    a: "Ya, keamanan data adalah prioritas utama kami. Semua data dienkripsi dan disimpan di server aman dengan standar internasional.",
  },
  {
    q: "Bisakah saya membatalkan subscription kapan saja?",
    a: "Ya, Anda dapat membatalkan subscription kapan saja tanpa biaya tersembunyi.",
  },
  {
    q: "Apakah ada support untuk bahasa Indonesia?",
    a: "Ya! Tim support kami berbahasa Indonesia dan siap membantu 24/7.",
  },
  {
    q: "Platform apa saja yang didukung?",
    a: "Kami mendukung import laporan dari Shopee, Tokopedia, TikTok Shop, Meta Ads, Instagram Business, dan platform e-commerce lainnya.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-secondary" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-4">
        <h2 id="faq-title" className="text-2xl md:text-3xl font-bold mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i + 1}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
