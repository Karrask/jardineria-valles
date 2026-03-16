import Image from 'next/image'
import { Translations } from '@/lib/translations'

interface GalleryProps {
  t: Translations
}

const photos = [
  {
    // Arborist rappelling down a tree after trimming — verified: poda search
    src: 'https://images.unsplash.com/photo-1754322449005-bdc38c631682?w=800&q=80',
    alt: 'Arborista treballant en altura amb equip de seguretat',
  },
  {
    // Two tree climbers trimming a live oak — verified: poda search
    src: 'https://images.unsplash.com/photo-1754321889123-0485c7fea5f1?w=800&q=80',
    alt: 'Dos professionals podant un arbre de grans dimensions',
  },
  {
    // Man using chainsaw to cut a tree — verified: motosierra search
    src: 'https://images.unsplash.com/photo-1474742509976-ddec6b387356?w=800&q=80',
    alt: 'Tala professional d\'arbres amb motosierra',
  },
  {
    // Man with chainsaw cutting a log — verified: motosierra search
    src: 'https://images.unsplash.com/photo-1641366784341-446c64b421a2?w=800&q=80',
    alt: 'Tall de troncs amb motosierra professional',
  },
  {
    // Professional with chainsaw in forest — verified: motosierra search
    src: 'https://images.unsplash.com/photo-1663436295685-4ad55cb30362?w=800&q=80',
    alt: 'Professional forestal treballant en terreny boscós',
  },
  {
    // Tree stump after felling with chainsaw — verified: motosierra search
    src: 'https://images.unsplash.com/photo-1636706529713-7cceb3d46365?w=800&q=80',
    alt: 'Resultat de tala: soca d\'arbre i motosierra',
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
