import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isTopPage = pathname === '/' || pathname === '';

  const scrollToSection = (id: string) => {
    if (isTopPage) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 sm:col-span-1">
            <div className="text-2xl font-bold mb-3 sm:mb-4">paco</div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  特徴
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("supported-sites")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  対応サイト
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  料金
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">サポート</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                {isTopPage ? (
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    お問い合わせ
                  </button>
                ) : (
                  <Link
                    to="/#contact"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    お問い合わせ
                  </Link>
                )}
              </li>
              <li>
                <a
                  href="https://lin.ee/ORf3l7j"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  公式LINE登録
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
          <p>&copy; 2026 paco. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* <a href="#privacy" className="hover:text-white transition-colors cursor-pointer">
              プライバシーポリシー
            </a> */}
            <Link to="/terms" className="hover:text-white transition-colors cursor-pointer">
              利用規約
            </Link>
            <Link to="/legal" className="hover:text-white transition-colors cursor-pointer">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
