import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 中尾 和幸 公式サイト',
  description: '中尾和幸公式サイトのプライバシーポリシーをご確認ください。',
  openGraph: {
    title: 'プライバシーポリシー | 中尾 和幸 公式サイト',
    description: '中尾和幸公式サイトのプライバシーポリシーをご確認ください。',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* ヒーローセクション */}
        <section className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-black text-white mb-6">プライバシーポリシー</h1>
            <p className="text-2xl text-white font-medium">
              個人情報の取り扱いについて
            </p>
          </div>
        </section>

        {/* プライバシーポリシー内容 */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6">1. 個人情報の定義</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">2. 個人情報の収集方法</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、利用者が利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、利用者と提携先などとの間でなされた利用者の個人情報を含む取引記録や決済に関する情報を、当方の提携先（情報提供元、広告主、広告配信先などを含みます。以下「提携先」といいます。）などから収集することがあります。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">3. 個人情報を収集・利用する目的</h2>
                <p className="text-gray-700 leading-relaxed mb-4">当方が個人情報を収集・利用する目的は、以下のとおりです。</p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-6">
                  <li>当方サービスの提供・運営のため</li>
                  <li>利用者からのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                  <li>利用者が利用中のサービスの新機能、更新情報、キャンペーン等及び当方が提供する他のサービスの案内のメールを送付するため</li>
                  <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                  <li>利用規約に違反した利用者や、不正・不当な目的でサービスを利用しようとする利用者の特定をし、ご利用をお断りするため</li>
                  <li>利用者にご自身の登録情報の閲覧・変更・削除・ご利用状況の閲覧を行っていただくため</li>
                  <li>有料サービスにおいて、利用者に利用料金を請求するため</li>
                  <li>上記の利用目的に付随する目的</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">4. 利用目的の変更</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当方所定の方法により、利用者に通知し、または本ウェブサイト上に公表するものとします。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">5. 個人情報の第三者提供</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、次に掲げる場合を除いて、あらかじめ利用者の同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-6">
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                  <li>予め次の事項を告知あるいは公表し、かつ当方が個人情報保護委員会に届出をしたとき</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">6. 個人情報の開示</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、利用者から、個人情報保護法の定めに基づき個人情報の開示を求められたときは、利用者ご本人からのご請求であることを確認の上で、利用者に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-6">
                  <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                  <li>当方の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                  <li>その他法令に違反することとなる場合</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">7. 個人情報の訂正および削除</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  利用者は、当方の保有する自己の個人情報が誤った情報である場合には、当方が定める手続により、当方に対して個人情報の訂正、追加または削除（以下「訂正等」といいます。）を請求することができます。当方は、利用者から前項の請求を受けてその請求に理由があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">8. 個人情報の利用停止等</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当方は、利用者から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。前項の調査結果に基づき、その請求に理由があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">9. プライバシーポリシーの変更</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、利用者に通知することなく、変更することができるものとします。当方が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">10. お問い合わせ窓口</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>住所：</strong>〒840-2213 佐賀県佐賀市川副町鹿江670-8<br />
                    <strong>電話：</strong>0952-20-8313<br />
                    <strong>メール：</strong>info@nakao-kazuyuki.jp
                  </p>
                </div>

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
