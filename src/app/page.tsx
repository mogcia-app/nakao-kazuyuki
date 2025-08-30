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
{/* ヒーローセクション */}
<section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
  {/* 控えめな背景グラデ */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_40rem_at_120%_-10%,rgba(255,223,99,0.18),transparent),radial-gradient(20rem_20rem_at_-10%_110%,rgba(255,223,99,0.12),transparent)]"
  />

  <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 mt-4">
    <div className="grid items-center gap-8 md:gap-10 md:grid-cols-12">
      {/* 左：テキスト（モバイル先・PC左） */}
      <div className="order-1 md:order-1 md:col-span-6">
        {/* サブキャップ */}
        <div className="inline-flex items-center gap-3 rounded-full border-2 border-yellow-400 bg-white/80 px-4 py-2 text-sm font-bold text-yellow-800 shadow-sm backdrop-blur">
          <span className="inline-block h-5 w-5 rounded-full bg-yellow-400 shadow-md" />
          地域の未来のために
        </div>

        {/* 氏名 */}
        <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          中尾 和幸
        </h1>
        <p className="mt-2 text-2xl font-medium text-gray-700">なかお　かずゆき</p>

        {/* キャッチコピー（和／幸だけ赤） */}
        <p className="mt-6 max-w-2xl text-xl sm:text-2xl md:text-[30px] leading-relaxed text-black">
          まちに <span className="text-red-600 font-bold text-2xl md:text-[40px]">和</span> を　
          人に <span className="text-red-600 font-bold text-2xl md:text-[40px]">幸</span> を
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            href="#policies"
            className="inline-flex justify-center rounded-md bg-yellow-500 px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          >
            政策を見る
          </a>
          <a
            href="#schedule"
            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 font-semibold transition hover:bg-gray-50"
          >
            日程・活動を見る
          </a>
        </div>
      </div>

      {/* 右：写真（モバイル後・PC右） */}
      <div className="order-2 md:order-2 md:col-span-6 flex justify-center md:justify-end mt-6 md:mt-0">
        <div className="relative w-full max-w-[720px] overflow-hidden border border-gray-200 bg-gray-100">
          {/* モバイルは4:3、md以上は16:9 */}
          <div className="aspect-[4/3] md:aspect-[16/9]">
            <img
              src="/images/#"
              alt="候補者写真"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* 薄い黒オーバーレイ */}
          <div className="pointer-events-none absolute inset-0 bg-black/10" />
          {/* 右上バッジ */}
          <div className="absolute right-2 top-2 md:right-3 md:top-3 rounded-full bg-yellow-500/95 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-bold text-white shadow">
            OFFICIAL
          </div>
        </div>
      </div>
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
    { date: "1993年3月", text: "佐賀東高等学校　卒業（甲子園出場）" },
    { date: "1993年4月", text: "JAさが（旧佐賀経済連）　入社" },
    { date: "2017年3月", text: "株式会社JAさがフーズ　退職" },
    { date: "2017年4月", text: "養鶏業を開始" },
   
  ].map((item, idx) => (
    <div key={idx} className="relative flex items-start">
      {/* 丸 */}
      <div className="absolute -left-3 top-2 w-4 h-4 bg-yellow-500 rounded-full shadow"></div>
      {/* テキスト */}
      <p className="ml-6 text-gray-700 text-lg leading-relaxed">
        <span className="font-semibold text-gray-900">{item.date}</span>
        <span className="ml-2">{item.text}</span>
      </p>
    </div>
  ))}
</div>

      {/* 右：画像 */}
      <div className="flex justify-center self-start">
  <div className="relative w-full max-w-xs aspect-square overflow-hidden  border border-gray-200 bg-gray-100 shadow-xl">
    <img
      src="/images/candidate.jpg"
      alt="候補者プロフィール写真"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/5" />
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
                <h3 className="text-2xl font-bold text-gray-800 mb-6">選挙事務所</h3>
                <p className="text-gray-600 text-lg leading-relaxed">〒000-0000<br />○○県○○市○○町○○-○○</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">連絡先</h3>
                <p className="text-gray-600 text-lg leading-relaxed">TEL: 000-0000-0000<br />Email: info@nakao-kazuyuki.jp</p>
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
