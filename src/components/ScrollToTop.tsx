import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET = 80;

/**
 * ルート変更時のスクロール制御
 * - トップ以外: 常に最上部へ
 * - トップでハッシュあり（/#features 等）: 該当セクションへスクロール
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const isTopPage = pathname === '/' || pathname === '';

  useEffect(() => {
    if (!isTopPage) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash ? hash.slice(1) : null;
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
