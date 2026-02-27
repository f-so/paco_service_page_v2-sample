import { useTermsModal } from '../../../contexts/TermsModalContext';

export default function WhyPaco() {
  const { openTermsModal } = useTermsModal();

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-16">
          なぜPACOの新着通知ツールがよいのか？
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Reason 1 */}
          <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-teal-100">
            <div className="w-14 h-14 flex items-center justify-center bg-teal-500 rounded-xl mb-4 sm:mb-5">
              <i className="ri-flashlight-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              業界最速<span className="text-xs text-gray-600">※</span>の圧倒的な通知スピード
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              24時間365日、休むことなく監視。新着商品が登録された瞬間にDiscordへ通知。手動チェックでは絶対に追いつけない速度で、ライバルより先に仕入れ判断ができる！
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-teal-100">
            <div className="w-14 h-14 flex items-center justify-center bg-teal-500 rounded-xl mb-4 sm:mb-5">
              <i className="ri-smartphone-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              通知〜仕入れまでスマホで完結
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Discord通知をスマホで受け取り、そのまま　商品ページへアクセス。外出中でも、移動中でも、いつでもどこでも仕入れチャンスを逃す心配はなし！
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-teal-100">
            <div className="w-14 h-14 flex items-center justify-center bg-teal-500 rounded-xl mb-4 sm:mb-5">
              <i className="ri-time-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              時間の節約
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              手動で何度もサイトをリロードする必要は一切なし！PACOの新着通知ツールが24時間稼働し、重要な情報だけをすぐに通知するから、仕入れ判断に集中できる！
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-teal-100">
            <div className="w-14 h-14 flex items-center justify-center bg-teal-500 rounded-xl mb-4 sm:mb-5">
              <i className="ri-money-dollar-circle-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              高コスパ
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              月額1,480円〜で24時間監視。1日あたり約50円で、せどりの効率が劇的に向上。
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-5 sm:mb-6">
            まずは7日間、無料でPACOの新着通知ツールを体験してみてください
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={openTermsModal}
              className="inline-block bg-teal-500 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-teal-600 transition-colors whitespace-nowrap cursor-pointer shadow-lg text-center"
            >
              スタンダードプランを、<br />7日無料で試してみる！
            </button>
            <button
              type="button"
              onClick={openTermsModal}
              className="inline-block bg-gray-900 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer shadow-lg text-center"
            >
              カスタムプランを、<br />7日間無料で試してみる！
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
