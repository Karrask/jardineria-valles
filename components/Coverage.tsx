import { Translations } from '@/lib/translations'

interface CoverageProps {
  t: Translations
}

export default function Coverage({ t }: CoverageProps) {
  return (
    <section id="zones" className="py-20 lg:py-28 bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-brand-600/50 text-brand-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {t.coverage.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              {t.coverage.title}
            </h2>
            <p className="text-brand-200 text-lg mb-8 leading-relaxed">
              {t.coverage.subtitle}
            </p>

            <a
              href="#contacte"
              className="inline-flex items-center gap-2 bg-white text-brand-800 hover:bg-brand-50 font-bold px-6 py-3.5 rounded-xl transition-colors"
            >
              📞 Contacta&apos;ns ara
            </a>
          </div>

          {/* Municipalities grid */}
          <div>
            <div className="grid grid-cols-2 gap-2">
              {t.coverage.municipalities.map((municipality, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-brand-700/50 rounded-xl px-4 py-3 text-sm font-medium text-brand-100"
                >
                  <span className="w-1.5 h-1.5 bg-brand-400 rounded-full flex-shrink-0" />
                  {municipality}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
