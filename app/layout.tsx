import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smoughen Perfume - Where Anime Meets Fragrance',
  description: 'Luxury anime-inspired perfumes featuring your favorite characters from Naruto, One Piece, Death Note, Jujutsu Kaisen, and Hunter x Hunter.',
  keywords: 'anime perfume, luxury fragrance, Naruto, One Piece, Death Note, Jujutsu Kaisen, Hunter x Hunter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-modern">
        {children}
      </body>
    </html>
  )
}
