import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Алена - Йога & Искусство | Yoga & Art with Alena',
  description: 'Индивидуальные и групповые занятия йогой на Бали. 10 лет опыта. Арт Асана retreat. Online classes.',
  keywords: 'йога, yoga, Бали, Bali, тренер, instructor, арт, art, retreat, онлайн занятия',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧘‍♀️</text></svg>" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}