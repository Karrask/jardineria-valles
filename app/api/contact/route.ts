import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const resend = new Resend(process.env.RESEND_API_KEY)
  const notificationEmail = process.env.NOTIFICATION_EMAIL ?? 'tu@email.com'

  try {
    const { name, phone, municipality, service } = await req.json()

    // Basic validation
    if (!name || !phone || !municipality || !service) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // 1. Save lead to Supabase
    const { error: dbError } = await supabase
      .from('leads')
      .insert([{ name, phone, municipality, service }])

    if (dbError) {
      console.error('Supabase error:', dbError)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    // 2. Send email notification via Resend
    await resend.emails.send({
      from: 'Jardineria Vallès <leads@jardineriavalles.cat>',
      to: notificationEmail,
      subject: `🌿 Nou lead: ${name} – ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <div style="background: #15803d; color: white; padding: 16px 24px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="margin: 0; font-size: 20px;">🌿 Nou lead rebut</h2>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; width: 130px;">Nom</td>
              <td style="padding: 10px 0; font-weight: 600; color: #111827;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280;">Telèfon</td>
              <td style="padding: 10px 0; font-weight: 600; color: #111827;">
                <a href="tel:${phone.replace(/\s/g, '')}" style="color: #15803d;">${phone}</a>
              </td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280;">Municipi</td>
              <td style="padding: 10px 0; font-weight: 600; color: #111827;">${municipality}</td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280;">Servei</td>
              <td style="padding: 10px 0; font-weight: 600; color: #111827;">${service}</td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280;">Data</td>
              <td style="padding: 10px 0; color: #111827;">${new Date().toLocaleString('ca-ES', { timeZone: 'Europe/Madrid' })}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #f0fdf4; border-radius: 8px; text-align: center;">
            <a href="tel:${phone.replace(/\s/g, '')}"
               style="display: inline-block; background: #15803d; color: white; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 16px;">
              📞 Trucar a ${name}
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
            Jardineria Vallès · Terrassa i Vallès Occidental
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
