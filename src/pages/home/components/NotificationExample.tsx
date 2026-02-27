export default function NotificationExample() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            実際の通知画面
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Discordの通知イメージ
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Discord notification screenshot */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <img
                  src="https://static.readdy.ai/image/d154fb49d5434dc122e23f6c0fa54a38/9b7553f738252a07c46fe8737a93c80a.jpeg"
                  alt="Discord通知の実際の例"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              {/* Info below image */}
              <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-lg flex-shrink-0">
                    <i className="ri-information-line text-xl text-white"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      通知に含まれる情報
                    </h3>
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-teal-500"></i>
                        <span>商品画像</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-teal-500"></i>
                        <span>通知時刻</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage image */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
              <div className="relative w-full flex-1" style={{ minHeight: '300px' }}>
                <img
                  src="https://readdy.ai/api/search-image?query=Person%20holding%20smartphone%20checking%20product%20notification%20alert%20on%20screen%2C%20resale%20business%20seller%20looking%20at%20phone%20with%20excited%20expression%2C%20warm%20indoor%20lighting%2C%20packages%20and%20shipping%20boxes%20in%20soft%20blurred%20background%2C%20lifestyle%20photography%20showing%20e-commerce%20seller%20receiving%20deal%20alert%20on%20mobile%20device%2C%20clean%20modern%20aesthetic%20with%20warm%20tones&width=600&height=800&seq=notification-usage-image-001&orientation=portrait"
                  alt="スマホで通知を確認するイメージ"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
                <p className="text-sm sm:text-base font-semibold text-gray-900 text-center">
                  スマホですぐに確認・即仕入れ
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              通知をタップしてそのまま商品ページへ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
