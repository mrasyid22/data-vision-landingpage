"use client"

import { useLanguage } from '@/contexts/LanguageContext'

export function ValueProp() {
  const { t } = useLanguage()

  const problems = [
    t('valueprop.problem1'),
    t('valueprop.problem2'),
    t('valueprop.problem3'),
    t('valueprop.problem4'),
  ]

  const solutions = [
    t('valueprop.solution1'),
    t('valueprop.solution2'),
    t('valueprop.solution3'),
    t('valueprop.solution4'),
  ]

  const benefits = [
    t('valueprop.benefit1'),
    t('valueprop.benefit2'),
    t('valueprop.benefit3'),
    t('valueprop.benefit4'),
  ]

  return (
    <section className="py-12 md:py-16" aria-labelledby="vp-title">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="vp-title" className="text-2xl md:text-3xl font-bold mb-6">
          {t('valueprop.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-lg border border-border p-5 bg-card">
            <h3 className="font-semibold mb-2">{t('valueprop.problem.title')}</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border p-5 bg-card">
            <h3 className="font-semibold mb-2">{t('valueprop.solution.title')}</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {solutions.map((solution) => (
                <li key={solution}>{solution}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((text) => (
            <div key={text} className="rounded-lg border border-border p-4 bg-secondary">
              <p className="font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
