'use client';

import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* 左：ロゴ */}
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500">
              <span className="text-white text-base font-bold leading-none">中</span>
            </div>
            <div className="leading-tight">
              <p className="text-[17px] font-bold text-gray-900">中尾 和幸</p>
              <p className="text-xs text-gray-600 tracking-wide">Nakao Kazuyuki</p>
            </div>
          </a>

          {/* 右：ナビ（デスクトップ） */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#background" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">立候補に至った背景</a>
            <a href="#policy" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">政策</a>
            <a href="#profile" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">プロフィール</a>

              {/* CTA */}
<a
  href="#contact"
  className="rounded-none bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-yellow-600 hover:shadow-md"
>
  お問い合わせ
</a>

  {/* 仕切り */}
  <span className="h-6 w-px bg-gray-200" />

           {/* SNS */}
<a
  href="https://www.instagram.com/aicon_official" // ← 公式アカウントURL
  target="_blank"
  rel="noopener noreferrer"
  aria-label="公式Instagram"
  className="flex items-center gap-2 transition-colors text-gray-900 hover:text-pink-500"
>
  <span className="text-sm font-bold">公式Instagram</span>
  <FaInstagram size={22} className="text-orange-500" />
</a>

           
          
          </nav>

          {/* モバイル：メニューボタン */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="メニューを開く"
            className="md:hidden inline-grid place-items-center rounded-lg p-2 hover:bg-gray-100 transition"
          >
            <div className="relative h-5 w-6">
              <span className={`absolute left-0 top-1 block h-0.5 w-6 bg-gray-800 transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-2.5 block h-0.5 w-6 bg-gray-800 transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-4 block h-0.5 w-6 bg-gray-800 transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* モバイル：ドロワー */}
        <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="border-t border-gray-200 py-4">
            <a
              href="#background"
              onClick={() => setOpen(false)}
              className="block px-1 py-3 text-gray-800 hover:text-yellow-600 font-medium"
            >
              立候補に至った背景
            </a>
            <a
              href="#policy"
              onClick={() => setOpen(false)}
              className="block px-1 py-3 text-gray-800 hover:text-yellow-600 font-medium"
            >
              政策
            </a>
            <a
              href="#profile"
              onClick={() => setOpen(false)}
              className="block px-1 py-3 text-gray-800 hover:text-yellow-600 font-medium"
            >
              プロフィール
            </a>

            {/* SNS行 */}
            <div className="mt-2 flex items-center gap-4 px-1 py-2">
              <a
                href="https://www.instagram.com/あなたのアカウント"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-500"
              >
                <FaInstagram size={22} />
                <span className="text-sm">Instagram</span>
              </a>
            </div>

            {/* CTA */}
            <div className="mt-2 px-1">
            <a
  href="#contact"
  className="rounded-none bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-yellow-600 hover:shadow-md block text-center"
>
  お問い合わせ
</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}