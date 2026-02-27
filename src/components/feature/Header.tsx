import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTermsModal } from '../../contexts/TermsModalContext';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openTermsModal } = useTermsModal();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isTopPage = pathname === '/' || pathname === '';
  /** トップページ以外、またはスクロール済み・メニュー開きのときは不透明スタイル */
  const showSolidStyle = !isTopPage || isScrolled || mobileOpen;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup in case the component unmounts while the menu is open
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (isTopPage) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  // Labels for the desktop navigation
  const desktopLabels: Record<string, string> = {
    features: '特徴',
    'supported-sites': '対応サイト',
    pricing: '料金',
    faq: 'FAQ',
  };

  // Items for the mobile navigation
  const mobileNavItems = [
    { id: 'features', label: '特徴' },
    { id: 'supported-sites', label: '対応サイト' },
    { id: 'pricing', label: '料金' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidStyle ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className={`text-2xl font-bold ${showSolidStyle ? 'text-gray-900' : 'text-white'}`}>
          paco
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {Object.keys(desktopLabels).map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                showSolidStyle ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              {desktopLabels[id]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openTermsModal}
            className="hidden sm:inline-block bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            7日無料で試す
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors ${
              showSolidStyle ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="メニュー"
          >
            <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          mobileOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {mobileNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openTermsModal();
            }}
            className="mt-2 block w-full bg-gray-900 text-white text-center px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            7日無料で試す
          </button>
        </nav>
      </div>
    </header>
  );
}
