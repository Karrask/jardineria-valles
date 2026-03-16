import Image from 'next/image'
import { Translations } from '@/lib/translations'

interface GalleryProps {
  t: Translations
}

const photos = [
  {
    // Arborist working up in a tree – tree surgery
    src: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80',
    alt: 'Treballs de poda professional en altura',
  },
  {
    // Man using chainsaw cutting a tree trunk
    src: 'https://images.unsplash.com/photo-1562184552-997c461e7a39?w=800&q=80',
    alt: 'Tala professional d\'arbres amb motosierra',
  },
  {
    // Overgrown / dense undergrowth field
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    alt: 'Parcel·la amb vegetació abundant',
  },
  {
    // Workers clearing brush / land
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    alt: 'Neteja i desbrossament de terrenys',
  },
  {
    // Fallen logs / tree felling result
    src: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
    alt: 'Resultat de tala i neteja forestal',
  },
  {
    // Tree pruning with professional tools
    src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    alt: 'Poda professional d\'arbres ornamentals',
  },
]

export default function Gallery({ t }: GalleryProps) {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t.gallery.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-gray-500 text-lg">{t.gallery.subtitle}</p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl group"
              style={{ height: i % 3 === 0 ? '280px' : '220px' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacte"
            className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-bold px-8 py-4 rounded-2xl transition-colors text-lg"
          >
            {t.gallery.cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
