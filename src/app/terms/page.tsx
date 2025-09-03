import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 | 中尾 和幸 公式サイト',
  description: '中尾和幸公式サイトの利用規約をご確認ください。',
  openGraph: {
    title: '利用規約 | 中尾 和幸 公式サイト',
    description: '中尾和幸公式サイトの利用規約をご確認ください。',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* ヒーローセクション */}
        <section className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-black text-white mb-6">利用規約</h1>
            <p className="text-2xl text-white font-medium">
              本ウェブサイトのご利用について
            </p>
          </div>
        </section>

        {/* 利用規約内容 */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6">第1条（適用）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  本利用規約（以下「本規約」といいます。）は、なかお和幸公式ウェブサイト（以下「本サイト」といいます。）の利用条件を定めるものです。利用者の皆さま（以下「利用者」といいます。）には、本規約に従って、本サイトをご利用いただきます。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第2条（利用登録）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  本サイトにおいて利用登録が完了した時点で、利用者と当方との間で、本規約の諸規定に従った利用契約が成立するものとします。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第3条（禁止事項）</h2>
                <p className="text-gray-700 leading-relaxed mb-4">利用者は、本サイトの利用にあたり、以下の行為をしてはなりません。</p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-6">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>本サイトの内容等、本サイトに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                  <li>本サイト、ほかの利用者、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>本サイトによって得られた情報を商業的に利用する行為</li>
                  <li>本サイトの運営を妨害するおそれのある行為</li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>その他、当方が不適切と判断する行為</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第4条（本サイトの提供の停止等）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サイトの全部または一部の提供を停止または中断することができるものとします。
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-6">
                  <li>本サイトにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サイトの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当方が本サイトの提供が困難と判断した場合</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第5条（利用制限および登録抹消）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、利用者が以下のいずれかに該当する場合には、事前の通知なく、利用者に対して、本サイトの全部もしくは一部の利用を制限し、または利用者としての登録を抹消することができるものとします。
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-6">
                  <li>本規約のいずれかの条項に違反した場合</li>
                  <li>登録事項に虚偽の事実があることが判明した場合</li>
                  <li>その他、当方が本サイトの利用を適当でないと判断した場合</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第6条（免責事項）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、本サイトに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第7条（サービス内容の変更等）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、利用者に通知することなく、本サイトの内容を変更しまたは本サイトの提供を中止することができるものとし、これによって利用者に生じた損害について一切の責任を負いません。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第8条（利用規約の変更）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サイトの利用を開始した場合には、当該利用者は変更後の規約に同意したものとみなします。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第9条（個人情報の取扱い）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、本サイトの利用によって取得する個人情報については、当方「プライバシーポリシー」に従い適切に取り扱うものとします。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第10条（通知または連絡）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  利用者と当方との間の通知または連絡は、当方の定める方法によって行うものとします。当方は、利用者から、当方が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時に利用者へ到達したものとみなします。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第11条（権利義務の譲渡の禁止）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  利用者は、当方の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">第12条（準拠法・裁判管轄）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  本規約の解釈にあたっては、日本法を準拠法とします。本サイトに関して紛争が生じた場合には、当方の本店所在地を管轄する裁判所を専属的合意管轄とします。
                </p>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    制定日：2025年9月1日<br />
                    最終更新日：2025年9月4日
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
