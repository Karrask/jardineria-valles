'use client'

import { useState } from 'react'
import { Translations } from '@/lib/translations'

interface ContactFormProps {
  t: Translations
}

export default function ContactForm({ t }: ContactFormProps) {
  const f = t.contact.form
  const info = t.contact.info

  const [form, setForm] = useState({
    name: '',
    phone: '',
    municipality: '',
    service: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Error')
      setStatus('success')
      setForm({ name: '', phone: '', municipality: '', service: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacte" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-500 text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.success}</h3>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-brand-700 font-semibold underline"
                >
                  Enviar una altra sol·licitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {f.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={f.namePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {f.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={f.phonePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Municipality */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {f.municipality} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="municipality"
                    value={form.municipality}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition text-gray-900 bg-white"
                  >
                    <option value="">{f.municipalityPlaceholder}</option>
                    {t.coverage.municipalities.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {f.service} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition text-gray-900 bg-white"
                  >
                    <option value="">{f.servicePlaceholder}</option>
                    {f.services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-red-600 text-sm font-medium">{f.error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-700 hover:bg-brand-800 disabled:bg-brand-400 text-white font-bold py-4 rounded-xl transition-colors text-lg"
                >
                  {status === 'loading' ? f.submitting : f.submit}
                </button>

                {/* Privacy */}
                <p className="text-xs text-gray-400 text-center">{f.privacy}</p>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-5">{info.title}</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${info.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-brand-700 transition-colors"
                >
                  <span className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    📞
                  </span>
                  <div>
                    <div className="font-semibold text-gray-900">{info.phone}</div>
                    <div className="text-sm text-gray-500">{info.phoneMobile}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${info.email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-brand-700 transition-colors"
                >
                  <span className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    ✉️
                  </span>
                  <span className="font-medium text-gray-700 text-sm">{info.email}</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    🕐
                  </span>
                  <span className="text-sm text-gray-600">{info.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    📍
                  </span>
                  <span className="text-sm text-gray-600">{info.zone}</span>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="bg-brand-700 text-white rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-bold text-lg mb-1">Pressupost gratuït</div>
              <div className="text-brand-200 text-sm">Resposta garantida en 24h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
