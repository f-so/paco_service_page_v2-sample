import { useEffect } from 'react';
import { TERMS_TITLE } from '../../content/termsOfService';
import TermsOfServiceBody from '../terms/TermsOfServiceBody';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

export default function TermsOfServiceModal({ isOpen, onClose, onAgree }: TermsOfServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      {/* オーバーレイ */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 transition-opacity"
        aria-label="モーダルを閉じる"
      />

      {/* モーダル本体（SP: 高さ70%、PC: 50%） */}
      <div className="relative w-full max-w-2xl max-h-[70vh] sm:max-h-[50vh] flex flex-col bg-white rounded-2xl shadow-xl">
        <div className="flex items-center justify-between flex-shrink-0 px-4 sm:px-6 py-4 border-b border-gray-200">
          <h2 id="terms-modal-title" className="text-lg sm:text-xl font-bold text-gray-900">
            {TERMS_TITLE}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            aria-label="閉じる"
          >
            <i className="ri-close-line text-2xl" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
          <TermsOfServiceBody />
        </div>

        {/* SP: 同意→閉じるの順（閉じるを下に）、PC: 閉じる｜同意の横並び */}
        <div className="flex-shrink-0 flex flex-col-reverse sm:flex-row gap-3 px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
          >
            閉じる
          </button>
          <button
            type="button"
            onClick={onAgree}
            className="flex-1 px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors"
          >
            同意して始める
          </button>
        </div>
      </div>
    </div>
  );
}
