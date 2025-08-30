// src/components/Policies.tsx
import Image from "next/image";

type Policy = {
  key: string;
  title: string;
  lead: string;
  points: string[];
  image: string;
};

const POLICIES: Policy[] = [
  {
    key: "fish",
    title: "漁業・農業を次世代へつなぐ",
    lead: "",
    points: [
      "取り戻す！日本一のり！有明再生",
      "若手漁業者の就労支援",
      "新規就農者の支援、担い手の育成",
      "学校給食の地元食材率アップ",
    ],
    image: "/images/policy-fish.jpg",
  },
  {
    key: "kids",
    title: "子育て・教育",
    lead: "安心して産み育てられる地域づくりへ",
    points: [
      "空き家の子育て世帯向け利活用（改修費補助）",
      "0歳〜3歳までの一番大変な時期の子育て支援",
    ],
    image: "/images/policy-kids.jpg",
  },
  {
    key: "medical",
    title: "医療・福祉の充実",
    lead: "",
    points: [
      "高齢者様が病院に行かずに自宅での医療往診サービスの強化",
      "高齢者様の緊急時対応型施設を作る",
      "高齢者様を支える家族負担の軽減",
      "一人暮らし高齢者様のサポート",
      "医療・介護に働き方サポート",
    ],
    image: "/images/policy-medical.jpg",
  },
  {
    key: "city",
    title: "街づくり",
    lead: "",
    points: [
      "老朽化した公共インフラの点検と計画的更新",
      "オスプレイ配備による自衛隊員車両の通貨に伴う",
      "道路補修・保全・防音対策",
     
    ],
    image: "/images/policy-city.jpg",
  },
];

export default function Policies() {
  return (
    <section id="policy" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center text-4xl font-black text-gray-900 md:text-5xl">
          政策・ビジョン
        </h2>

        <div className="space-y-20">
          {POLICIES.map((p, idx) => {
            const reverse = idx % 2 === 1; // 奇数行で左右反転
            return (
              <article
                key={p.key}
                className="grid gap-10 md:grid-cols-2 md:items-start"
              >
                {/* 画像 */}
                <div
                  className={`${
                    reverse ? "md:order-2" : "md:order-1"
                  } self-start`}
                >
                  <div className="relative w-full overflow-hidden border border-gray-200 bg-gray-100 shadow-xl">
                    {/* 固定比率で高さを安定化 → 上揃えが効く */}
                    <div className="relative w-full aspect-[16/9] lg:aspect-[21/9]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                        priority={idx === 0}
                      />
                      {/* ほんのり黒でコントラスト補助（任意） */}
                      <div className="pointer-events-none absolute inset-0 bg-black/10" />
                    </div>
                  </div>
                </div>

                {/* テキスト */}
                <div
                  className={`${
                    reverse ? "md:order-1" : "md:order-2"
                  } self-start`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-gray-600">
                    {p.lead}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-yellow-500" />
                        <span className="text-gray-700">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}