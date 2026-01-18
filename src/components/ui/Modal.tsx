import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-xl animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center shrink-0">
          <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto">
          {children}
        </div>

        {footer && (
          <div className="p-4 border-t border-slate-100 bg-slate-50 shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;