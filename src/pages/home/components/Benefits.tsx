
export default function Benefits() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center mb-3 sm:mb-4">
          取りこぼしを減らす。
        </h2>
        <p className="text-base sm:text-xl text-gray-700 text-center mb-10 sm:mb-12">
          速さに特化した、シンプルな設計。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-teal-500 rounded-xl mb-4 sm:mb-5">
              <i className="ri-checkbox-circle-line text-2xl sm:text-3xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              取りこぼしが減る
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              張り付き不要で、新着を拾える。
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-teal-500 rounded-xl mb-4 sm:mb-5">
              <i className="ri-emotion-happy-line text-2xl sm:text-3xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              疲れない
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              監視作業を手放す。
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-teal-500 rounded-xl mb-4 sm:mb-5">
              <i className="ri-flashlight-line text-2xl sm:text-3xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              判断が速くなる
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              通知→即チェックの習慣が作れる。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
