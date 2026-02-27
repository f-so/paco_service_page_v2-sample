import { useState } from 'react';
import { useTermsModal } from '../../../contexts/TermsModalContext';

export default function Pricing() {
  const { openTermsModal } = useTermsModal();
  const [selectedSites, setSelectedSites] = useState<string[]>([]);

  const sites = [
    { id: 'secondstreet', name: 'セカスト', price: 2000 },
    { id: 'trefac', name: 'トレファク', price: 500 },
    { id: 'offmall', name: 'オフモール', price: 500 },
  ];

  const toggleSite = (siteId: string) => {
    setSelectedSites((prev) =>
      prev.includes(siteId) ? prev.filter((id) => id !== siteId) : [...prev, siteId]
    );
  };

  const calculateCustomPrice = () => {
    const basePrice = 980;
    const sitesPrice = selectedSites.reduce((sum, siteId) => {
      const site = sites.find((s) => s.id === siteId);
      return sum + (site?.price ?? 0);
    }, 0);
    return basePrice + sitesPrice;
  };

  const getCustomPlanUrl = (): string | null => {
    const hasSecondstreet = selectedSites.includes('secondstreet');
    const hasTrefac = selectedSites.includes('trefac');
    const hasOffmall = selectedSites.includes('offmall');

    if (hasSecondstreet && hasTrefac && hasOffmall) {
      return 'https://buy.stripe.com/test_eVq00k5vNcobdoW8qmcbC09';
    } else if (hasSecondstreet && hasTrefac) {
      return 'https://buy.stripe.com/test_eVq9AU3nF9bZ1Ge6iecbC0b';
    } else if (hasSecondstreet && hasOffmall) {
      return 'https://buy.stripe.com/test_7sYcN68HZ4VJ84CfSOcbC0c';
    } else if (hasTrefac && hasOffmall) {
      return 'https://buy.stripe.com/test_aFa3cwf6ncobckS8qmcbC0d';
    } else if (hasSecondstreet) {
      return 'https://buy.stripe.com/test_5kQ8wQ2jBgEr0Ca9uqcbC0e';
    } else if (hasTrefac) {
      return 'https://buy.stripe.com/test_bJe4gA1fx9bZ98G0XUcbC0a';
    } else if (hasOffmall) {
      return 'https://buy.stripe.com/test_6oU6oIcYf3RFacK0XUcbC0f';
    }
    return null;
  };

  const handleCustomPlanClick = () => {
    const url = getCustomPlanUrl();
    openTermsModal(url ?? undefined);
  };

  return (
    <section id="pricing" className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
          料金プラン
        </h2>
        <p className="text-lg sm:text-xl text-teal-600 text-center mb-10 sm:mb-16 font-semibold">
          7日間無料トライアル
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {/* Standard Plan */}
          <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-10 rounded-2xl shadow-lg border-2 border-teal-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
              おすすめ
            </div>
            {/* 今だけ！吹き出し */}
            <div className="absolute top-0 right-2 sm:top-4 sm:right-4 z-10">
              <div className="relative bg-red-500 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-2xl text-sm sm:text-xl font-bold shadow-2xl animate-bounce whitespace-nowrap">
                🔥 今だけ！
                <div className="absolute -bottom-2 left-4 sm:left-6 w-4 h-4 bg-red-500 rotate-45"></div>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 mt-2">
              スタンダードプラン
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6">業界トップのセカストに特化したプラン</p>

            <div className="mb-4 sm:mb-5">
              <div className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
                1,480円〜
              </div>
              <p className="text-sm sm:text-base text-gray-600">月額（先着価格）</p>
            </div>

            {/* 先着10名限定エリア */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  先着10名限定
                </span>
                <span className="text-xs sm:text-sm text-orange-700 font-semibold">今だけの立ち上げ限定価格</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <i className="ri-lock-line text-sm text-orange-500 flex-shrink-0 mt-0.5"></i>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <strong className="text-gray-900">契約時の価格がずっと据え置き</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-arrow-up-line text-sm text-orange-500 flex-shrink-0 mt-0.5"></i>
                  <p className="text-xs sm:text-sm text-gray-700">
                    順次値上げするため、この価格は今だけ！
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-time-line text-sm text-orange-500 flex-shrink-0 mt-0.5"></i>
                  <p className="text-xs sm:text-sm text-gray-700">
                    7日間の無料期間をお試しください！
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-lg sm:text-xl text-teal-500 flex-shrink-0 mt-0.5"></i>
                <span className="text-sm sm:text-base text-gray-700">
                  セカスト新着の24時間監視
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-lg sm:text-xl text-teal-500 flex-shrink-0 mt-0.5"></i>
                <span className="text-sm sm:text-base text-gray-700">Discord通知</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-lg sm:text-xl text-teal-500 flex-shrink-0 mt-0.5"></i>
                <span className="text-sm sm:text-base text-gray-700">
                  追加サイトのアナウンス（LINE/Discord）
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openTermsModal()}
              className="block w-full bg-teal-500 text-white text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold hover:bg-teal-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              スタンダードを7日無料で試してみる
            </button>
          </div>

          {/* Custom Plan */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              カスタムプラン
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6">必要なサイトのみ選択できるカスタムプラン</p>

            <div className="mb-6 sm:mb-8">
              <div className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
                1,480円〜
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                月額（基本料金：980円 + サイト追加料金）
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-lg sm:text-xl text-teal-500 flex-shrink-0 mt-0.5"></i>
                <span className="text-sm sm:text-base text-gray-700">
                  選択したサイトの24時間監視
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-lg sm:text-xl text-teal-500 flex-shrink-0 mt-0.5"></i>
                <span className="text-sm sm:text-base text-gray-700">Discord通知</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                サイト追加料金
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {sites.map((site) => (
                  <label
                    key={site.id}
                    className="flex items-center justify-between p-2.5 sm:p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedSites.includes(site.id)}
                        onChange={() => toggleSite(site.id)}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 cursor-pointer"
                      />
                      <span className="text-sm sm:text-base text-gray-900">{site.name}</span>
                    </div>
                    <span className="text-sm sm:text-base text-gray-600 font-semibold">
                      +{site.price.toLocaleString()}円
                    </span>
                  </label>
                ))}
              </div>
              {selectedSites.length > 0 && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-base sm:text-lg font-bold">
                    <span className="text-gray-900">合計</span>
                    <span className="text-teal-600">
                      {calculateCustomPrice().toLocaleString()}円/月
                    </span>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleCustomPlanClick}
              className="block w-full bg-gray-900 text-white text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              カスタムプランを7日無料で試してみる
            </button>
          </div>
        </div>

        {/* Custom Pricing Examples */}
        <div className="mt-8 sm:mt-12 bg-gray-50 p-5 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Custom料金例
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
            <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg">
              <span className="text-gray-700">オフモールのみ</span>
              <span className="font-semibold text-gray-900">1,480円</span>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg">
              <span className="text-gray-700">セカストのみ</span>
              <span className="font-semibold text-gray-900">2,980円</span>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg">
              <span className="text-gray-700">全サイト</span>
              <span className="font-semibold text-gray-900">3,980円</span>
            </div>
          </div>
        </div>

        {/* LINE CTA Box */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-[#06C755]/10 to-[#06C755]/5 border-2 border-[#06C755]/30 p-6 sm:p-8 rounded-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <i className="ri-question-line text-xl text-[#06C755]"></i>
            <p className="text-base sm:text-lg font-bold text-gray-900">
              どのプランが合うかわからない？
            </p>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-5">
            お気軽に公式LINEからご相談ください。あなたに最適なプランをご提案します。
          </p>
          <a
            href="https://lin.ee/ORf3l7j"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#05b34c] transition-colors whitespace-nowrap cursor-pointer shadow-lg"
          >
            <i className="ri-line-fill text-xl"></i>
            公式LINEで無料相談してみる
          </a>
        </div>

        {/* Pricing Guide */}
        <div className="mt-8 sm:mt-12 bg-teal-50 p-8 sm:p-12 rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            PACOの新着通知は、自分に必要なプランを選べます
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                まずセカストで勝ちたい
              </h4>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base flex items-center gap-2">
                → スタンダードプラン
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                  おすすめ！
                </span>
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">最もコスパが良い</p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-3">
                <p className="text-xs sm:text-sm text-orange-800 font-medium">
                  <i className="ri-star-fill text-orange-500 mr-1"></i>
                  最も出品数が多い
                </p>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                セカスト以外の通知ツールを使いたい
              </h4>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                → カスタムプラン（1,480円〜）
              </p>
              <p className="text-xs sm:text-sm text-gray-500">柔軟に選択可能</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                複数サイトの通知ツールを使いたい
              </h4>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">→ カスタムプラン（1,480円〜）</p>
              <p className="text-xs sm:text-sm text-gray-500">必要なサイトだけを選択！</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
