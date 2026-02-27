import { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TermsOfServiceModal from '../components/feature/TermsOfServiceModal';

interface TermsModalContextValue {
  openTermsModal: (redirectUrl?: string) => void;
}

const TermsModalContext = createContext<TermsModalContextValue | null>(null);

export function TermsModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const openTermsModal = useCallback((redirectUrl?: string) => {
    setPendingUrl(typeof redirectUrl === 'string' ? redirectUrl : 'https://buy.stripe.com/test_9B66oI3nF9bZ0CadKGcbC0g');
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setPendingUrl(null);
  }, []);

  const handleAgree = useCallback(() => {
    setIsOpen(false);
    if (pendingUrl) {
      window.open(pendingUrl, '_blank', 'noopener,noreferrer');
      setPendingUrl(null);
      return;
    }
    const stripeCheckoutUrl = import.meta.env.VITE_STRIPE_CHECKOUT_URL;
    if (stripeCheckoutUrl) {
      window.location.href = stripeCheckoutUrl;
      return;
    }
    const el = document.getElementById('trial');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/#trial');
    }
  }, [navigate, pendingUrl]);

  return (
    <TermsModalContext.Provider value={{ openTermsModal }}>
      {children}
      <TermsOfServiceModal isOpen={isOpen} onClose={closeModal} onAgree={handleAgree} />
    </TermsModalContext.Provider>
  );
}

export function useTermsModal(): TermsModalContextValue {
  const ctx = useContext(TermsModalContext);
  if (!ctx) {
    throw new Error('useTermsModal must be used within TermsModalProvider');
  }
  return ctx;
}
