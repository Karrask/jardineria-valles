'use client'

import { useState } from 'react'
import { translations, Lang } from '@/lib/translations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Gallery from '@/components/Gallery'
import Coverage from '@/components/Coverage'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  const [lang, setLang] = useState<Lang>('ca')
  const t = translations[lang]

  return (
    <main>
      <Header t={t} lang={lang} onLangChange={setLang} />
      <Hero t={t} />
      <Services t={t} />
      <WhyUs t={t} />
      <Gallery t={t} />
      <Coverage t={t} />
      <ContactForm t={t} />
      <Footer t={t} />
    </main>
  )
}
