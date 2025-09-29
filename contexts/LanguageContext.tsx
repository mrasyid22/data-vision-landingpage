"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('id')

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translation object with natural translations
const translations = {
  id: {
    // Navigation
    'nav.tryFreeTrial': 'Coba Gratis Sekarang',

    // Hero Section
    'hero.title': 'Temukan Penjualan yang Hilang dari Iklan Meta Anda',
    'hero.subtitle': 'Platform AI pertama di Indonesia yang melacak penjualan Shopee, Tokopedia & TikTok yang sebenarnya berasal dari iklan Meta Anda. Stop kehilangan atribusi penjualan hingga 60% dengan Grinty Data Vision.',
    'hero.feature1': 'Multi-Platform Attribution',
    'hero.feature2': 'ROAS Analysis',
    'hero.feature3': 'Insight Analysis',
    'hero.feature4': 'Semi Real-time Dashboard',
    'hero.cta': 'Mulai Trial Gratis 14 Hari',

    // Value Proposition
    'valueprop.title': 'Masalah Besar yang Tidak Anda Ketahui',
    'valueprop.problem.title': 'Kenyataan pahit bisnis online Indonesia:',
    'valueprop.problem1': '60% penjualan Shopee hilang dari atribusi iklan Meta',
    'valueprop.problem2': 'ROAS iklan terlihat rendah padahal sebenarnya menguntungkan',
    'valueprop.problem3': 'Tidak tahu iklan mana yang benar-benar menghasilkan penjualan',
    'valueprop.problem4': 'Budget iklan terbuang sia-sia karena salah optimasi',
    'valueprop.solution.title': 'Grinty Data Vision memberikan solusi yang tepat:',
    'valueprop.solution1': 'Atribusi lintas platform pertama di Indonesia',
    'valueprop.solution2': 'AI analysis untuk setiap creative asset',
    'valueprop.solution3': 'Semi real-time ROAS tracking setiap hari',
    'valueprop.solution4': 'Optimasi budget berdasarkan data akurat',
    'valueprop.benefit1': 'Platform AI pertama untuk atribusi multi-platform',
    'valueprop.benefit2': 'Perhitungan CAC & Sales untuk ROAS akurat',
    'valueprop.benefit3': 'Integrasi semi real-time dengan Meta, Shopee, Tokopedia & TikTok',
    'valueprop.benefit4': 'Dukungan tim expert Grinty',

    // Features Section
    'features.title': 'Fitur Unggulan yang Menghasilkan Profit Nyata',
    'features.automation.title': 'Cross-Platform Attribution',
    'features.automation.desc': 'Lacak penjualan Shopee, Tokopedia & TikTok yang berasal dari iklan Meta Anda. Jangan kehilangan 60% atribusi penjualan lagi.',
    'features.tracking.title': 'True ROAS Calculation',
    'features.tracking.desc': 'Hitung ROAS sebenarnya dengan algoritma GCAC & GSales. Ketahui keuntungan real dari setiap iklan.',
    'features.integration.title': 'Analisis Insight',
    'features.integration.desc': 'Analisis setiap iklan dengan AI untuk mendapatkan rekomendasi optimasi spesifik berdasarkan performa data.',
    'features.ai.title': 'Semi Real-time Dashboard',
    'features.ai.desc': 'Monitor performa iklan dan penjualan setiap hari dengan data semi real-time dari semua platform.',
    'features.comingSoon': 'Segera Hadir',

    // How It Works
    'howitworks.title': 'Cara Kerja',

    // Pricing
    'pricing.title': 'Investasi yang Menguntungkan untuk Bisnis Anda',
    'pricing.subtitle': '14 Hari Trial Gratis • Setup Gratis • Temukan ROAS tersembunyi Anda',
    'pricing.monthly.name': 'Monthly Plan',
    'pricing.monthly.price': 'Rp 749.000/bulan',
    'pricing.monthly.original': 'Rp 999.000',
    'pricing.monthly.duration': 'Per bulan',
    'pricing.monthly.features': '["Sales Performance Analytics", "Ad Performance Tracking", "Multi-platform Integration (Shopee, Tokopedia, TikTok)", "Export Reports"]',
    'pricing.monthly.cta': 'Mulai Trial Gratis',
    'pricing.quarterly.name': 'Quarterly Plan',
    'pricing.quarterly.price': 'Rp 1.499.000/3 bulan',
    'pricing.quarterly.original': 'Rp 2.999.000',
    'pricing.quarterly.duration': '3 Months',
    'pricing.quarterly.features': '["All Monthly Plan features", "30 Minutes Consultation With Grinty", "Premium Support"]',
    'pricing.quarterly.cta': 'Mulai Trial Gratis',
    'pricing.quarterly.badge': 'HEMAT 50%',
    'pricing.payment': 'Pembayaran: Transfer Bank • Setup gratis • Pembayaran Setelah Free Trial',

    // Testimonials
    'testimonials.title': 'Apa Kata Klien Kami',
    'testimonials.stat1': '500+ Bisnis Terbantu',
    'testimonials.stat2': '98% Tingkat Kepuasan',
    'testimonials.stat3': '2.5x Rata-rata Peningkatan ROAS',
    'testimonials.stat4': 'Support 24/7',

    // CTA Section
    'cta.title': 'Siap Menemukan Penjualan yang Hilang?',
    'cta.subtitle': 'Bergabunglah dengan 500+ bisnis yang telah meningkatkan ROAS iklan hingga 2.5x dengan atribusi yang akurat.',
    'cta.primary': 'Mulai Trial Gratis 14 Hari',
    'cta.secondary': 'Konsultasi WhatsApp',
    'cta.note': 'Setup gratis • Tidak perlu kartu kredit • Lihat hasil dalam 24 jam',
    'cta.benefits.title': 'Mengapa bisnis besar memilih Grinty?',
    'cta.benefits1': 'Atribusi multi-platform pertama di Indonesia (Meta, Shopee, Tokopedia, TikTok)',
    'cta.benefits2': 'AI analysis untuk setiap iklan dan creative',
    'cta.benefits3': 'Tim expert Indonesia dengan pengalaman 5+ tahun',

    // FAQ
    'faq.title': 'Pertanyaan yang Sering Diajukan',

    // CTA Section
    'cta.whatsapp.message': 'Halo tim Grinty! Saya tertarik mencoba Grinty Data Vision setelah melihat iklan Meta. Mohon bantuannya.',

    // Footer
    'footer.rights': '© 2024 Grinty Data Vision. Seluruh hak cipta.',
  },
  en: {
    // Navigation
    'nav.tryFreeTrial': 'Try Free Trial Now',

    // Hero Section
    'hero.title': 'Discover Hidden Sales from Your Meta Ads',
    'hero.subtitle': 'The first AI platform in Indonesia that tracks Shopee, Tokopedia & TikTok sales actually generated by your Meta ads. Stop losing up to 60% of sales attribution with Grinty Data Vision.',
    'hero.feature1': 'Cross-Platform Attribution',
    'hero.feature2': 'ROAS Analysis',
    'hero.feature3': 'Insight Analysis',
    'hero.feature4': 'Semi Real-time Dashboard',
    'hero.cta': 'Start 14-Day Free Trial',
    'hero.trust': '500+ Indonesian businesses have increased ROAS by 2.5x',

    // Value Proposition
    'valueprop.title': 'The Big Problem You Don\'t Know About',
    'valueprop.problem.title': 'The harsh reality for Indonesian online businesses:',
    'valueprop.problem1': '60% of Shopee sales are missing from Meta ads attribution',
    'valueprop.problem2': 'Ad ROAS looks low when it\'s actually profitable',
    'valueprop.problem3': 'You don\'t know which ads actually generate sales',
    'valueprop.problem4': 'Ad budget is wasted due to wrong optimization',
    'valueprop.solution.title': 'Grinty Data Vision provides the right solution:',
    'valueprop.solution1': 'First cross-platform attribution in Indonesia',
    'valueprop.solution2': 'AI analysis for every creative asset',
    'valueprop.solution3': 'Semi real-time ROAS tracking every day',
    'valueprop.solution4': 'Budget optimization based on accurate data',
    'valueprop.benefit1': 'First AI platform for multi-platform attribution',
    'valueprop.benefit2': 'CAC & Sales calculation for accurate ROAS',
    'valueprop.benefit3': 'Semi real-time integration with Meta, Shopee, Tokopedia & TikTok',
    'valueprop.benefit4': 'Grinty Expert Support',

    // Features Section
    'features.title': 'Features That Generate Real Profit',
    'features.automation.title': 'Cross-Platform Attribution',
    'features.automation.desc': 'Track Shopee, Tokopedia & TikTok sales that originated from your Meta ads. Never lose 60% of sales attribution again.',
    'features.tracking.title': 'True ROAS Calculation',
    'features.tracking.desc': 'Calculate real ROAS with GCAC & GSales algorithms. Know the actual profit from every ad.',
    'features.integration.title': 'Insight Analysis',
    'features.integration.desc': 'Analyze every ad with AI to get specific optimization recommendations based on performance data.',
    'features.ai.title': 'Semi Real-time Dashboard',
    'features.ai.desc': 'Monitor ad performance and sales daily with semi real-time data from all platforms.',
    'features.comingSoon': 'Coming Soon',

    // How It Works
    'howitworks.title': 'How It Works',

    // Pricing
    'pricing.title': 'Profitable Investment for Your Business',
    'pricing.subtitle': '14-Day Free Trial • Free setup • Discover your hidden ROAS',
    'pricing.monthly.name': 'Monthly Plan',
    'pricing.monthly.price': 'Rp 749,000/month',
    'pricing.monthly.original': 'Rp 999,000',
    'pricing.monthly.duration': 'Per month',
    'pricing.monthly.features': '["Sales Performance Analytics", "Ad Performance Tracking", "Multi-platform Integration (Shopee, Tokopedia, TikTok)", "Export Reports"]',
    'pricing.monthly.cta': 'Start Free Trial',
    'pricing.quarterly.name': 'Quarterly Plan',
    'pricing.quarterly.price': 'Rp 1,499,000/3 months',
    'pricing.quarterly.original': 'Rp 2,999,000',
    'pricing.quarterly.duration': '3 Months',
    'pricing.quarterly.features': '["All Monthly Plan features", "30 Minutes Consultation With Grinty", "Premium Support"]',
    'pricing.quarterly.cta': 'Start Free Trial',
    'pricing.quarterly.badge': 'SAVE 50%',
    'pricing.payment': 'Payment: Bank Transfer (BCA, Mandiri, BRI) • Free setup • Safe & trusted',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.stat1': '500+ Businesses Helped',
    'testimonials.stat2': '98% Satisfaction Rate',
    'testimonials.stat3': '2.5x Average ROAS Increase',
    'testimonials.stat4': '24/7 Support',

    // CTA Section
    'cta.title': 'Ready to Discover Your Hidden Sales?',
    'cta.subtitle': 'Join 500+ businesses that have increased their ad ROAS by 2.5x with accurate attribution.',
    'cta.primary': 'Start 14-Day Free Trial',
    'cta.secondary': 'WhatsApp Consultation',
    'cta.note': 'Free setup • No credit card required • See results in 24 hours',
    'cta.benefits.title': 'Why big businesses choose Grinty?',
    'cta.benefits1': 'First multi-platform attribution in Indonesia (Meta, Shopee, Tokopedia, TikTok)',
    'cta.benefits2': 'AI analysis for every ad and creative',
    'cta.benefits3': 'Indonesian expert team with 5+ years experience',
    'cta.whatsapp.message': 'Hello Grinty team! I\'m interested in trying Grinty Data Vision after seeing the Meta ad. Could you help me?',

    // FAQ
    'faq.title': 'Frequently Asked Questions',

    // Footer
    'footer.rights': '© 2024 Grinty Data Vision. All rights reserved.',
  }
}