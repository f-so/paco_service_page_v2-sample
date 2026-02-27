
import { useTermsModal } from '../../../contexts/TermsModalContext';

export default function Speed() {
  const { openTermsModal } = useTermsModal();

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-teal-50 to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          通知の速さが、<span className="text-red-500">せどり</span>を決める
        </h2>

        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
          業界最速<span className="text-xs text-gray-600">※</span>のPACOの新着通知ツールなら、最速で商品を仕入れられます！
        </p>

        {/* CTA Button */}
        <div className="mb-10 sm:mb-12">
          <button
            type="button"
            onClick={openTermsModal}
            className="inline-block bg-teal-500 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-teal-600 transition-colors whitespace-nowrap cursor-pointer shadow-lg"
          >
            7日無料で試してみる
          </button>
        </div>

        {/* Speed Comparison */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
            PACOの新着通知ツール「3つの特徴」
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-flashlight-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">最速通知<span className="text-xs text-gray-600">※</span></h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                新着商品を即座に検知し、リアルタイムで通知します。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-eye-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">24時間稼働</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                休むことなく、常に最新情報をチェックし続けます。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-filter-3-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">精度の高い通知</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                不要な通知を減らし、本当に必要な情報だけをお届けします。
              </p>
            </div>
          </div>

          {/* Speed Flow */}
          <div className="bg-gradient-to-r from-teal-50 to-gray-50 p-6 sm:p-8 rounded-xl">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-6 text-center">
              通知までの流れ
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-lg flex-shrink-0">
                  <i className="ri-shopping-bag-3-line text-xl text-white"></i>
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900">新着商品</span>
                  <p className="text-sm text-gray-600">サイトに掲載</p>
                </div>
              </div>

              <i className="ri-arrow-right-line text-2xl text-teal-500 hidden sm:block"></i>
              <i className="ri-arrow-down-line text-2xl text-teal-500 sm:hidden"></i>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-lg flex-shrink-0">
                  <i className="ri-radar-line text-xl text-white"></i>
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900">即座に検知</span>
                  <p className="text-sm text-gray-600">PACOが監視</p>
                </div>
              </div>

              <i className="ri-arrow-right-line text-2xl text-teal-500 hidden sm:block"></i>
              <i className="ri-arrow-down-line text-2xl text-teal-500 sm:hidden"></i>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-lg flex-shrink-0">
                  <i className="ri-notification-3-line text-xl text-white"></i>
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900">Discord通知</span>
                  <p className="text-sm text-gray-600">リアルタイムで届く</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
