import { termsArticles, termsClosing } from '../../content/termsOfService';

interface TermsOfServiceBodyProps {
  className?: string;
}

/**
 * 利用規約の本文表示（モーダル・利用規約ページで共通利用）
 */
export default function TermsOfServiceBody({ className = '' }: TermsOfServiceBodyProps) {
  return (
    <div className={`text-left text-sm sm:text-base text-gray-700 leading-relaxed ${className}`}>
      {termsArticles.map((article) => (
        <section key={article.id} className="mb-5">
          <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
          <div className="space-y-2">
            {article.paragraphs.map((p, i) => (
              <p key={`${article.id}-${i}`}>{p}</p>
            ))}
          </div>
        </section>
      ))}
      <p className="mt-4 font-medium text-gray-900">{termsClosing}</p>
    </div>
  );
}
