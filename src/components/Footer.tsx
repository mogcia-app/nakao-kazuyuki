export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* メインフッター */}
      <div className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 基本情報 */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">中</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">中尾 和幸</h3>
                  <p className="text-gray-300">なかお　かずゆき</p>
                </div>
              </div>
              <p className=" text-white">
        すべては「まちに<strong className='text-red-600 font-semibold'>和</strong>を、人に<strong className='text-red-600 font-semibold'>幸</strong>を」──
      </p>
             
            </div>

            {/* クイックリンク */}
            <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">クイックリンク</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#policy" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    5つのチャレンジ
                  </a>
                </li>
               
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    お問い合わせ
                  </a>
                </li>
               
              </ul>
            </div>

            {/* お問い合わせ情報 */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-yellow-400">お問い合わせ</h4>
              <div className="space-y-3 text-gray-300">
                <p>〒840-2213</p>
                <p>佐賀県佐賀市川副町鹿江670-8</p>
                
                <p className="mt-4">
                  <span className="text-yellow-400">TEL:</span> 0952-20-8313
                </p>
                <p className="mt-4">
                  <span className="text-yellow-400">FAX:</span> 0952-20-8315
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ボトムフッター */}
      <div className="py-8 bg-gray-900 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2025 Nakao Kazuyuki. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-yellow-400 transition-colors duration-300">
                プライバシーポリシー
              </a>
              <a href="/terms" className="hover:text-yellow-400 transition-colors duration-300">
                利用規約
              </a>
              <a href="/contact" className="hover:text-yellow-400 transition-colors duration-300">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
