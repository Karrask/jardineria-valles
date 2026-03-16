import Image from 'next/image'
import { Translations } from '@/lib/translations'

interface GalleryProps {
  t: Translations
}

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    alt: 'Poda professional d\'arbres',
  },
  {
    src: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80',
    alt: 'Tall de gespa professional',
  },
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    alt: 'Jardí ben cuidat',
  },
  {
    src: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=800&q=80',
    alt: 'Manteniment de jardins',
  },
  {
    src: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=800&q=80',
    alt: 'Neteja de terrenys',
  },
  {
    src: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80',
    alt: 'Disseny de jardins',
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
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 || i === 3 ? 'row-span-1' : ''
              }`}
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

        {/* CTA below gallery */}
        <div className="text-center mt-12">
          <a
            href="#contacte"
            className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-bold px-8 py-4 rounded-2xl transition-colors text-lg"
          >
            Demana el teu pressupost
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
