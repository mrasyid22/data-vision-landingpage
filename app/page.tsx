import { Header } from "@/components/site/header"
import { Hero } from "@/components/sections/hero"
import { ValueProp } from "@/components/sections/value-prop"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta-section"
import { StickyCTA } from "@/components/site/sticky-cta"

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <ValueProp />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <StickyCTA />
    </main>
  )
}
