import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ | 中尾 和幸 公式サイト',
  description: '中尾和幸へのお問い合わせはこちらから。ご意見・ご質問をお気軽にお寄せください。',
  openGraph: {
    title: 'お問い合わせ | 中尾 和幸 公式サイト',
    description: '中尾和幸へのお問い合わせはこちらから。ご意見・ご質問をお気軽にお寄せください。',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* ヒーローセクション */}
        <section className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-black text-white mb-6">お問い合わせ</h1>
            <p className="text-2xl text-white font-medium">
              ご意見・ご質問がございましたら、お気軽にお声がけください。
            </p>
          </div>
        </section>

        {/* お問い合わせ情報 */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* 選挙事務所 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">選挙事務所</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    <span className="font-semibold text-gray-800">住所</span><br />
                    〒840-2213<br />
                    佐賀県佐賀市川副町鹿江670-8
                  </p>
                
                </div>
              </div>

              {/* 連絡先 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">連絡先</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    <span className="font-semibold text-gray-800">電話</span><br />
                    TEL: 0952-20-8313
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    <span className="font-semibold text-gray-800">FAX</span><br />
                    FAX: 0952-20-8315
                  </p>
                 
                </div>
              </div>
            </div>

             {/* メッセージ */}
             <div className="mt-12 text-center">
              <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  市民の皆様の声をお聞かせください
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  なかお和幸は、市民の皆様一人ひとりの声を大切にし、<br />
                  より良いまちづくりに活かしていきたいと考えています。<br />
                  お気軽にご連絡ください。
                </p>
              </div>
            </div>

           
           
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
