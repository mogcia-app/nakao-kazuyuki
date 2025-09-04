// src/components/Policies.tsx
import Image from "next/image";

type Policy = {
  key: string;
  title: string;
  lead: string;
  points: string[];
  svgPath: string;
  imagePath: string;
};



const POLICIES: Policy[] = [
  {
    key: "fish",
    title: "産業",
    lead: "デジタル化で地域産業を活性化",
    points: [
      "一次産業や商工業に積極的にデジタル化を導入し効率化や、省力化を推進",
      "有明海再生のために全力を尽くします",
      "新規就農者支援、担い手育成",
      "ものづくり産業の振興と中小規模事業者への支援",
      "物価高騰対策",
    ],
    svgPath: "/images/25996.svg",
    imagePath: "/images/386778439.jpeg",
  },
  {
    key: "kids",
    title: "子育て・教育",
    lead: "安心して産み育てられる地域づくりへ",
    points: [
      "道徳教育や体験活動による人材育成",
      "教育格差の是正",
      "切れ目のない子育て支援",
      "子育て相談員の拡充",
    ],
    svgPath: "/images/0123.svg",
    imagePath: "/images/2218514183.jpg",
  },
  {
    key: "medical",
    title: "医療・福祉の充実",
    lead: "誰もが安心して暮らせる医療・福祉",
    points: [
      "高齢者や障害者が安心して暮らせるように医療・福祉の充実",
      "緊急時対応型施設の新設",
      "医療往診サービスの支援（デジタル化）",
      "一人暮らし高齢者様のサポート",
    ],
    svgPath: "/images/24386.svg",
    imagePath: "/images/1140723256.jpg",
  },
  {
    key: "city",
    title: "ひと",
    lead: "多様性を活かした地域づくり",
    points: [
      "女性活躍の推進",
      "スポーツや文化芸術活動への支援",
      "高齢者を思いやり、優しい行政支援",
      "子供が元気に楽しく思える環境づくり",
    ],
    svgPath: "/images/18210.svg",
    imagePath: "/images/1371306648.jpg",
  },
  {
    key: "human",
    title: "暮らし",
    lead: "安全で安心な街づくり",
    points: [
      "佐賀駐屯地への自衛隊車両の通過に伴う道路の安全確保",
      "災害に強い街づくり",
      "防犯カメラや防犯灯(街路灯)の増設",
      "交通安全対策",
    ],
    svgPath: "/images/23390.svg",
    imagePath: "/images/2218547916.jpg",
  },
];

export default function Policies() {
  return (
    <section id="policy" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center mb-16">
          {/* 左側：テキスト */}
          <div className="text-left">
                      <p className="text-lg md:text-[20px] text-red-600 font-bold leading-relaxed mb-4">
              想いをかたちにする　〜市民と共に〜
            </p>
                                        <h2 className="text-3xl md:text-[40px] lg:text-5xl font-black text-gray-900 mb-4">
              なかお和幸が目指す<br />
              <span className="text-yellow-400 text-5xl md:text-[80px]">５</span>つのチャレンジ
              </h2>
           
          </div>
          
          {/* 右側：画像 */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden">
              <Image
                src="/images/nakao04.jpg"
                alt="中尾和幸の政策ビジョン"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-20">
          {POLICIES.map((p, idx) => {
            const reverse = idx % 2 === 1; // 奇数行で左右反転
            return (
              <article
                key={p.key}
                className="grid gap-10 md:grid-cols-2 md:items-start border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-300 transition-colors duration-300"
              >
                {/* 画像エリア */}
                <div
                  className={`${
                    reverse ? "md:order-2" : "md:order-1"
                  } self-start`}
                >
                  <div className="relative w-full">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={p.imagePath}
                        alt={p.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* テキストエリア */}
                <div
                  className={`${
                    reverse ? "md:order-1" : "md:order-2"
                  } self-start`}
                >
                  <div className="space-y-6">
                    {/* 見出しとアイコン */}
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                        <Image
                          src={p.svgPath}
                          alt={p.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        {p.title}
                      </h3>
                    </div>

                    {/* リード文 */}
                    {p.lead && (
                      <p className="text-lg text-gray-600">
                        {p.lead}
                      </p>
                    )}

                    {/* 政策ポイント */}
                    <ul className="space-y-3">
                      {p.points.map((pt, pointIdx) => (
                        <li key={pt} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}