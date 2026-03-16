import Image from 'next/image'
import { Translations } from '@/lib/translations'

interface WhyUsProps {
  t: Translations
}

export default function WhyUs({ t }: WhyUsProps) {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image – professional outdoor/forestry worker */}
          <div className="relative">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1754321889123-0485c7fea5f1?w=900&q=85"
                alt="Dos professionals podant un roure en jardí privat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-700 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-black">+10</div>
              <div className="text-sm text-brand-200 font-medium">{t.whyUs.years}</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {t.whyUs.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              {t.whyUs.title}
            </h2>
            <p className="text-gray-500 text-lg mb-10">{t.whyUs.subtitle}</p>

            <div className="space-y-6">
              {t.whyUs.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contacte"
                className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                <span>📞</span>
                {t.whyUs.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
