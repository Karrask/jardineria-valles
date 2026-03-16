import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jardineria Vallès | Jardineria i Desbrossament al Vallès Occidental',
  description:
    'Serveis professionals de jardineria, desbrossament de parcel·les i manteniment de jardins a Terrassa i el Vallès Occidental. Pressupost gratuït en 24h.',
  keywords:
    'jardineria Terrassa, desbrossament Vallès, manteniment jardins, poda arbres, neteja parcel·les Vallès Occidental',
  openGraph: {
    title: 'Jardineria Vallès | Professionals al Vallès Occidental',
    description:
      'Serveis de jardineria i desbrossament a Terrassa i el Vallès Occidental. Pressupost gratuït.',
    locale: 'ca_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca">
      <body className="antialiased">{children}</body>
    </html>
  )
}
