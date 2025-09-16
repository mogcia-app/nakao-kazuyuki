import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '中尾 和幸 | ホームページ',
  description: '中尾和幸のホームページです。政策や活動内容をご紹介します。',
  keywords: '中尾和幸, 後援会, 政治家, 地域活性化, 福祉, 環境',
  authors: [{ name: '中尾 和幸' }],
  creator: '中尾 和幸',
  publisher: '中尾 和幸',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nakao-kazuyuki.jp'), // 実際のドメインに変更
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '中尾 和幸 | 後援会活動ホームページ',
    description: '中尾和幸の後援会活動ホームページです。政策や活動内容をご紹介します。',
    url: 'https://nakao-kazuyuki.jp', // 実際のドメインに変更
    siteName: '中尾 和幸 公式サイト',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中尾 和幸 | 後援会活動ホームページ',
    description: '中尾和幸の後援会活動ホームページです。政策や活動内容をご紹介します。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'FDnUyBZh9krXqYOIBKlsq-ZxnMKK6BM69KORfs56NDg',
  },
  applicationName: '中尾和幸 公式サイト',
  category: '政治・社会',
  classification: '政治家公式サイト',
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
