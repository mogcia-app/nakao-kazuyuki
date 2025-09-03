import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Policies from '@/components/Policies'

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white pt-0">
       
    
   {/* ヒーローセクション */}
   <section className="relative overflow-hidden h-[70vh] md:h-[80vh] flex items-center mt-16">
  {/* 背景画像 */}
  <div className="absolute inset-0">
    <picture>
      {/* スマホ用画像 */}
      <source media="(max-width: 768px)" srcSet="/images/nakao5.jpg" />
      {/* PC用画像 */}
      <img
        src="/images/nakao33.jpg"
        alt="候補者写真"
        className="h-full w-full object-cover object-top"
      />
    </picture>
    {/* オーバーレイ */}
  </div>

  {/* コンテンツ */}
  <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 w-full">
    <div className="max-w-2xl">
      {/* サブキャップ */}
      <div className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-400 bg-white/90 px-3 py-1.5 text-xs font-bold text-yellow-800 shadow-sm backdrop-blur md:gap-3 md:px-4 md:py-2 md:text-sm">
        <span className="inline-block h-4 w-4 rounded-full bg-yellow-400 shadow-md md:h-5 md:w-5" />
        想いを形に　〜市民と共に〜
      </div>

      {/* 氏名 */}
      <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-black md:text-7xl lg:text-8xl">
        なかお 和幸
      </h1>
      <p className="mt-2 text-xl font-medium text-black md:text-3xl">NAKAO　KAZUYUKI</p>

      {/* キャッチコピー（和／幸だけ赤） */}
      <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-[36px] leading-relaxed text-black">
        まちに <span className="text-red-600 font-bold text-xl md:text-[48px]">和</span> を
        人に <span className="text-red-600 font-bold text-xl md:text-[48px]">幸</span> を
      </p>

      {/* CTA */}
      
    </div>
  </div>
</section>

  {/* セパレータ：中央寄せの短いグラデーションバー */}
  <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full" />

<section id="background" className="py-20 bg-white">
  <div className="mx-auto max-w-4xl px-6">
    {/* 見出し行：左右の黄色ライン＋タイトル */}
    <div className="mb-12 text-center">
  <h2 className="text-3xl md:text-4xl font-black text-gray-900">
    立候補に至った <span className="text-yellow-500 px-2">背景</span>
  </h2>
</div>

    {/* 本文は見出しの flex 外に置く */}
    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
      <p>
       佐賀市に生まれ育ち50年が経ちました。山間にある職場（養鶏農場）から見える佐賀平野の田んぼや穏やかな波が広がる
       有明海を見ながら数年前に開催させた研修会での講師の先生の言葉が脳裏から離れず考えさせられていました。
       「日本人が初めて教わるのはあいうえおだからあいうえおの精神を忘れてはいけない」
      </p>
      <p className="text-2xl md:text-3xl font-bold tracking-wide text-gray-800 text-center">
  あ（<span className="text-red-600">愛</span>）　
  い（<span className="text-red-600">命</span>）　
  う（<span className="text-red-600">運</span>）　
  え（<span className="text-red-600">縁</span>）　
  お（<span className="text-red-600">恩</span>）
</p>
      <p>
       この精神を受け止めるとともに特に恩に関しては、佐賀県の平均寿命は、男性81.41歳、女性87.60歳（2020年）となっております。
       佐賀市に恩返しができるのも残り30年余りこの残された時間を市民一人ひとりが安心して子供たちと高齢者に優しく暮らせる地域社会の実現を目指し
       努力して参ります。
       どうか皆様のお力添えをよろしくお願いいたします。
      </p>
      <p className="font-semibold text-gray-900">
        すべては「まちに<strong className='text-red-600'>和</strong>を、人に<strong className='text-red-600'>幸</strong>を」──この想いを胸に。
      </p>
    </div>
  </div>
</section>
<div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full" />
        {/* 政策セクション */}
        <Policies />

        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full" />

        {/* 経歴・実績セクション */}
        <section id="profile" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-black text-center text-gray-800 mb-16">
      プロフィール
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* 左：タイムライン */}
     {/* 左：タイムライン */}
<div className="relative border-l-4 border-yellow-400 pl-6 space-y-8">
  {[
    { date: "1974年9月", text: "川副町大詫間に生まれる" },
    { date: "1990年3月", text: "川副中学校　卒業" },
    { date: "1993年3月", text: "佐賀東高等学校　卒業", detail: "（第74回全国高校野球大会　1番中堅手で出場）" },
    { date: "1993年4月", text: "JAさが（旧佐賀経済連）　入社" },
    { date: "2017年3月", text: "株式会社JAさがフーズ　退職" },
    { date: "2017年4月", text: "養鶏業（ブロイラー）を開業" },
   
  ].map((item, idx) => (
    <div key={idx} className="relative flex items-start">
      {/* 丸 */}
      <div className="absolute -left-3 top-2 w-4 h-4 bg-yellow-500 rounded-full shadow"></div>
      {/* テキスト */}
      <div className="ml-6 text-gray-700 text-lg leading-relaxed">
        <span className="font-semibold text-gray-900">{item.date}</span>
        <span className="ml-2">{item.text}</span>
        {item.detail && (
          <div className="ml-2 mt-1 text-gray-600 text-base">
            {item.detail}
          </div>
        )}
      </div>
    </div>
  ))}
</div>

      {/* 右：画像 */}
      <div className="flex justify-center self-start">
  <div className="relative w-full max-w-xs aspect-square overflow-hidden">
    <img
      src="/images/nakao54.jpg"
      alt="候補者プロフィール写真"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 " />
    {/* 右下に名前 */}
    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
      <p className="text-lg font-bold text-gray-800">なかお 和幸</p>
    </div>
  </div>
</div>
    </div>
  </div>
</section>

        

        {/* お問い合わせセクション */}
        <section id="contact" className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black text-white mb-10">お問い合わせ</h2>
            <p className="text-2xl text-white mb-12 font-medium">ご意見・ご質問がございましたら、お気軽にお声がけください。</p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">選挙事務所</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">〒840-2213<br />佐賀県佐賀市川副町鹿江670-8</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">連絡先</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">TEL: 0952-20-8313<br />FAX: 0952-20-8315<br />Email: info@nakao-kazuyuki.jp</p>
              </div>
            </div>
          </div>
        </section>

        {/* 応援セクション */}
        
        
        
      </main>
      
      <Footer />
    </>
  )
}
