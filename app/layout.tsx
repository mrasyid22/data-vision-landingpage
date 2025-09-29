import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/LanguageContext"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Grinty Data Vision — Analitik Marketing dengan AI",
  description:
    "Platform analitik pemasaran terintegrasi untuk Shopee, Tokopedia, TikTok, dan Meta Ads. Dapatkan insights real-time untuk tingkatkan penjualan dan ROI.",
  icons: {
    icon: "/gdv-icon.ico",
  },
  generator: "v0.app",
  openGraph: {
    title: "Grinty Data Vision — Analitik Marketing dengan AI",
    description:
      "Satu dashboard untuk performa penjualan dan ROI iklan. Integrasi multi-platform dengan insights real-time.",
    url: "https://vision.grinty.id",
    siteName: "Grinty Data Vision",
    locale: "id_ID",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <LanguageProvider>
          <Suspense>
            {children}
            <Analytics />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
