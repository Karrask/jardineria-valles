import { Translations } from '@/lib/translations'

interface FooterProps {
  t: Translations
}

export default function Footer({ t }: FooterProps) {
  const navLinks = [
    { href: '#serveis', label: t.nav.services },
    { href: '#zones', label: t.nav.coverage },
    { href: '#galeria', label: t.nav.gallery },
    { href: '#contacte', label: t.nav.contact },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center">
                <span className="text-lg">🌿</span>
              </div>
              <span className="font-bold text-lg">Jardineria Vallès</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">{t.footer.links}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">{t.contact.info.title}</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>{t.contact.info.phone}</div>
              <div>{t.contact.info.email}</div>
              <div>{t.contact.info.hours}</div>
              <div className="text-brand-400 font-medium">{t.contact.info.zone}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Jardineria Vallès. {t.footer.rights}
          </div>
          <div>{t.footer.legal}</div>
        </div>
      </div>
    </footer>
  )
}
