import { Translations } from '@/lib/translations'

interface ServicesProps {
  t: Translations
}

export default function Services({ t }: ServicesProps) {
  return (
    <section id="serveis" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-500 text-lg">{t.services.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-brand-50 group-hover:bg-brand-100 rounded-xl flex items-center justify-center text-2xl mb-5 transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>

              {/* Arrow */}
              <div className="mt-5">
                <a
                  href="#contacte"
                  className="inline-flex items-center gap-1 text-brand-700 text-sm font-semibold hover:gap-2 transition-all"
                >
                  Demanar pressupost
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
