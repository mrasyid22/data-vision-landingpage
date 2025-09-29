"use client"

import { Button } from "@/components/ui/button"
import { useLanguage, Language } from "@/contexts/LanguageContext"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm"
      aria-label={`Switch to ${language === 'id' ? 'English' : 'Indonesian'}`}
    >
      <Languages className="h-4 w-4" />
      <span className="hidden sm:inline">
        {language === 'id' ? 'EN' : 'ID'}
      </span>
    </Button>
  )
}