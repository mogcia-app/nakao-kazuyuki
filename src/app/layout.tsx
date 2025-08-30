import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '中尾 和幸 | 選挙活動ホームページ',
  description: '中尾和幸の選挙活動ホームページです。政策や活動内容をご紹介します。',
  keywords: '中尾和幸, 選挙, 政治家, 地域活性化, 福祉, 環境',
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
