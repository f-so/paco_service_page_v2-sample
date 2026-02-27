import { useTermsModal } from '../../../contexts/TermsModalContext';

export default function Hero() {
  const { openTermsModal } = useTermsModal();

  return (
    <section className="relative py-16 sm:py-24 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=E-commerce%20product%20reselling%20business%20scene%20with%20cardboard%20shipping%20boxes%2C%20barcode%20scanner%2C%20smartphone%20showing%20product%20listings%2C%20warehouse%20shelving%20with%20retail%20merchandise%2C%20inventory%20management%20setup%2C%20professional%20online%20selling%20workspace%2C%20organized%20product%20packaging%20area%2C%20modern%20logistics%20environment%20with%20soft%20lighting%2C%20teal%20and%20neutral%20color%20scheme%2C%20clean%20minimalist%20aesthetic%20for%20resale%20business%20operations&width=1920&height=1080&seq=hero-bg-physical-products-002&orientation=landscape')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-12 sm:pt-24 sm:pb-16 text-center text-white">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="block sm:inline"><span className="text-red-400">せどり</span>の勝敗は</span>
          <span className="block sm:inline"><span className="text-red-400">速さ</span>で決まる</span>
        </h1>

        <div className="mb-8 sm:mb-12 flex flex-col items-center justify-center">
          <p className="text-sm sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
            業界最速<span className="text-xs text-white/80">※</span>の<strong>PACOの新着通知</strong>で、<br />
            24時間監視 → Discordへリアルタイム通知。<br />
            スマホで通知を見て、そのまま仕入れ判断。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <button
            type="button"
            onClick={openTermsModal}
            className="w-full sm:w-auto bg-white text-gray-900 px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            7日無料で試す
          </button>
          <a
            href="https://lin.ee/ORf3l7j"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white px-5 sm:px-8 py-3.5 sm:py-4 rounded-lg text-xs sm:text-lg font-semibold hover:bg-white/20 transition-colors whitespace-nowrap cursor-pointer"
          >
            まずはLINEで相談する（無料）
          </a>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-base sm:text-xl font-bold mb-3 sm:mb-4 text-white/90">PACO新着通知ツール 3つの特徴</p>
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-teal-500 rounded-lg mb-2 sm:mb-4 mx-auto">
                <i className="ri-time-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">24時間監視</h3>
              <p className="text-xs sm:text-sm text-white/80">寝てても回る</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-teal-500 rounded-lg mb-2 sm:mb-4 mx-auto">
                <i className="ri-notification-3-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">リアルタイム通知</h3>
              <p className="text-xs sm:text-sm text-white/80">Discordに届く</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-teal-500 rounded-lg mb-2 sm:mb-4 mx-auto">
                <i className="ri-gift-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">7日無料</h3>
              <p className="text-xs sm:text-sm text-white/80">合わなければ解約</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-0 w-full flex justify-center animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-white/60"></i>
      </div>
    </section>
  );
}
