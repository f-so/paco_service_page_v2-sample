
export default function FinalCTA() {
  return (
    <section
      id="trial"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-teal-500 to-teal-600"
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
          7日無料で、<br />
          まず&quot;通知の速さ&quot;を体感してください。
        </h2>

        <p className="text-base sm:text-xl mb-8 sm:mb-12 leading-relaxed">
          リスクなし。合わなければ期間内に解約OK。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-white text-teal-600 px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-bold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer shadow-lg"
          >
            申し込みプランを確認する！
          </a>
          <a
            href="https://lin.ee/ORf3l7j"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full sm:w-auto bg-teal-700 text-white border-2 border-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-xl font-bold hover:bg-teal-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            まずはLINEで問い合わせる！
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <i className="ri-check-line text-xl sm:text-2xl"></i>
            <span className="text-base sm:text-lg">7日間無料</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <i className="ri-check-line text-xl sm:text-2xl"></i>
            <span className="text-base sm:text-lg">いつでも解約OK</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <i className="ri-check-line text-xl sm:text-2xl"></i>
            <span className="text-base sm:text-lg">価格据え置き保証</span>
          </div>
        </div>
      </div>
    </section>
  );
}
