import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LEGAL_PAGE_TITLE, legalInfo } from '../../content/legal';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function LegalPage() {
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            {LEGAL_PAGE_TITLE}
          </h1>

          <section className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-[300px] w-full border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full border-collapse text-sm sm:text-base">
                <tbody>
                  {legalInfo.tableData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-b-0">
                      <th className="p-3 sm:p-4 text-left w-1/4 bg-gray-50 font-semibold text-gray-900">
                        {item.label}
                      </th>
                      <td className="p-3 sm:p-4 text-gray-700">
                        {Array.isArray(item.value)
                          ? item.value.map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < item.value.length - 1 && <br />}
                              </span>
                            ))
                          : item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
