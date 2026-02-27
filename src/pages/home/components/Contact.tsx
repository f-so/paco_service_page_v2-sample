
export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-white relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            お問い合わせ
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            ご質問やご要望がございましたら、公式LINEからお気軽にお問い合わせください。
          </p>
        </div>

        <div className="bg-gray-50 p-8 sm:p-12 rounded-2xl text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-[#06C755] rounded-2xl mx-auto mb-6">
            <i className="ri-line-fill text-4xl text-white"></i>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            公式LINEで簡単お問い合わせ
          </h3>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            LINEなら24時間いつでもメッセージOK！<br />
            お気軽にご質問・ご相談ください。
          </p>

          <div className="flex justify-center">
            <a
              href="https://lin.ee/ORf3l7j"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#05b34c] transition-colors whitespace-nowrap cursor-pointer shadow-lg"
            >
              <i className="ri-line-fill text-2xl"></i>
              公式LINEで問い合わせる
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <i className="ri-time-line text-teal-500"></i>
                <span>24時間受付</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-chat-smile-2-line text-teal-500"></i>
                <span>お気軽にどうぞ</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line text-teal-500"></i>
                <span>無料相談OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
        <p className="text-xs text-gray-400">
          ※当社にて、速度検証を行った結果
        </p>
      </div>
    </section>
  );
}
