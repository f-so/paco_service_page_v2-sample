

export default function Problem() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            疲れる張り付き作業は一切不要
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-red-500 font-bold leading-relaxed">
            新着商品、全て通知で即お知らせ！
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 bg-gray-100 rounded-xl flex items-center justify-center">
                <i className="ri-store-2-line text-2xl sm:text-3xl text-gray-400"></i>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">仕入れ先のサイト</p>
              <p className="text-xs text-gray-500">新着出品</p>
            </div>

            <div className="flex flex-col items-center">
              <i className="ri-arrow-right-line text-2xl sm:text-3xl text-teal-500"></i>
              <span className="text-xs font-medium text-teal-600 whitespace-nowrap">即検知</span>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 bg-teal-50 rounded-xl flex items-center justify-center">
                <i className="ri-notification-badge-line text-2xl sm:text-3xl text-teal-500"></i>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">Paco</p>
              <p className="text-xs text-teal-600">24時間監視</p>
            </div>

            <div className="flex flex-col items-center">
              <i className="ri-arrow-right-line text-2xl sm:text-3xl text-indigo-500"></i>
              <span className="text-xs font-medium text-indigo-600 whitespace-nowrap">即通知</span>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 bg-indigo-50 rounded-xl flex items-center justify-center">
                <i className="ri-discord-line text-2xl sm:text-3xl text-indigo-500"></i>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">Discord</p>
              <p className="text-xs text-indigo-600">スマホ通知</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm font-medium text-gray-500">
                ↓
              </span>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 sm:p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <i className="ri-hand-coin-line text-3xl sm:text-4xl text-red-500"></i>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                利益商品をつかみ取れる！
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 font-medium">
              寝ている間も、仕事中も、PACOの新着ツールが24時間監視通知！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
