
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: '7日無料って本当?',
      answer: 'はい。スタンダードプラン・カスタムプランを7日間無料で試せます。合わなければ期間内に解約可能です。'
    },
    {
      question: '通知はどこに届く?',
      answer: 'Discordに届きます（スマホで受け取れます）。'
    },
    {
      question: 'なんでセカストが高いの?',
      answer: 'セカストは他のサイトと比べ、商品の更新量が多く、せどりで勝負するには、欠かせない仕入れ先であり、より高度なスピード感で通知を提供しています。'
    },
    {
      question: '途中で値上げされたらどうなる?',
      answer: '途中で価格が変更となった場合も、限定価格でご契約いただいた方は、解約するまで価格は変わりません。'
    },
    {
      question: '対応サイトは増える?',
      answer: '随時、対応サイトは追加していきます。新しいサイトの通知ツールを追加する際は、公式LINE/Discordにて告知いたします。'
    },
    {
      question: '解約はいつでもできる?',
      answer: 'はい、いつでも解約可能です。違約金などは一切ありません。'
    },
    {
      question: 'Discordを使ったことがないのですが...',
      answer: 'Discordは無料で使えるチャットアプリです。スマホでもPCでも使えるため、通知をどこでも確認できます。DIscordの登録方法はお申し込みいただいた後に、公式LINEよりご案内いたします。'
    },
    {
      question: '複数のサイトを同時に監視できる?',
      answer: 'カスタムランで複数サイトを選択できます。必要なサイトだけを追加してください。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10 sm:mb-16">
          よくある質問
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <i
                  className={`ri-arrow-down-s-line text-xl sm:text-2xl text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 py-4 sm:px-6 sm:pb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
