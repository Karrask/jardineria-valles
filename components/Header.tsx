'use client'

import { useState, useEffect } from 'react'
import { Lang, Translations } from '@/lib/translations'

interface HeaderProps {
  t: Translations
  lang: Lang
  onLangChange: (lang: Lang) => void
}

export default function Header({ t, lang, onLangChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#serveis', label: t.nav.services },
    { href: '#zones', label: t.nav.coverage },
    { href: '#galeria', label: t.nav.gallery },
    { href: '#contacte', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🌿</span>
            </div>
            <span
              className={`font-bold text-lg transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Jardineria Vallès
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-1 border rounded-full px-2 py-1 border-white/30">
              <button
                onClick={() => onLangChange('ca')}
                className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-colors ${
                  lang === 'ca'
                    ? 'bg-brand-700 text-white'
                    : scrolled
                    ? 'text-gray-600 hover:text-brand-700'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                CA
              </button>
              <button
                onClick={() => onLangChange('es')}
                className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-colors ${
                  lang === 'es'
                    ? 'bg-brand-700 text-white'
                    : scrolled
                    ? 'text-gray-600 hover:text-brand-700'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>

            <a
              href="#contacte"
              className="bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              {t.nav.cta}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 px-4 py-2">
              <button
                onClick={() => { onLangChange('ca'); setMenuOpen(false) }}
                className={`text-sm font-semibold px-3 py-1 rounded-full ${lang === 'ca' ? 'bg-brand-700 text-white' : 'text-gray-600'}`}
              >
                Català
              </button>
              <button
                onClick={() => { onLangChange('es'); setMenuOpen(false) }}
                className={`text-sm font-semibold px-3 py-1 rounded-full ${lang === 'es' ? 'bg-brand-700 text-white' : 'text-gray-600'}`}
              >
                Español
              </button>
            </div>
            <a
              href="#contacte"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-brand-700 text-white font-semibold py-3 rounded-xl hover:bg-brand-800 transition-colors"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
