import { Link } from 'react-router-dom';
import { TERMS_TITLE } from '../../content/termsOfService';
import TermsOfServiceBody from '../../components/terms/TermsOfServiceBody';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useState, useEffect } from 'react';

export default function TermsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-6"
          >
            <i className="ri-arrow-left-line text-xl" aria-hidden />
            トップへ戻る
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{TERMS_TITLE}</h1>
          <TermsOfServiceBody className="mb-12" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
