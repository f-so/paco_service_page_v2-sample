
export default function SupportedSites() {
  return (
    <section id="supported-sites" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
          対応サイト
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 max-w-3xl mx-auto">
          {/* 今すぐ使える */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-teal-500 rounded-full mr-2.5"></span>
              今すぐ使える
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <a href="#secondstreet" className="flex items-center gap-2.5 bg-teal-50 border border-teal-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                <i className="ri-store-2-line text-lg text-teal-600"></i>
                <span className="font-medium text-sm sm:text-base text-gray-900">セカスト</span>
              </a>
              <a href="#trefac" className="flex items-center gap-2.5 bg-teal-50 border border-teal-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                <i className="ri-treasure-map-line text-lg text-teal-600"></i>
                <span className="font-medium text-sm sm:text-base text-gray-900">トレファク</span>
              </a>
              <a href="#offmall" className="flex items-center gap-2.5 bg-teal-50 border border-teal-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                <i className="ri-shopping-bag-3-line text-lg text-teal-600"></i>
                <span className="font-medium text-sm sm:text-base text-gray-900">オフモール</span>
              </a>
            </div>
          </div>

          {/* 近日対応 */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-2.5"></span>
              近日対応
              <span className="ml-2 text-sm font-normal text-gray-500">Coming soon</span>
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full opacity-60">
                <i className="ri-store-3-line text-lg text-gray-400"></i>
                <span className="font-medium text-sm sm:text-base text-gray-600">買取王国</span>
              </div>
              <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full opacity-60">
                <i className="ri-store-3-line text-lg text-gray-400"></i>
                <span className="font-medium text-sm sm:text-base text-gray-600">カインドオル</span>
              </div>
              <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full opacity-60">
                <i className="ri-store-3-line text-lg text-gray-400"></i>
                <span className="font-medium text-sm sm:text-base text-gray-600">オフハウス</span>
              </div>
              <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full opacity-60">
                <i className="ri-more-line text-lg text-gray-400"></i>
                <span className="font-medium text-sm sm:text-base text-gray-600">その他</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
