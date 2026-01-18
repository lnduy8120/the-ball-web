import React from 'react';
import { Toast, ToastType } from '../../context/ToastContext';

interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: Toast; onRemove: () => void }> = ({ toast, onRemove }) => {
  const styles: Record<ToastType, string> = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    warning: 'bg-orange-50 text-orange-800 border-orange-200',
  };

  const icons: Record<ToastType, string> = {
    success: 'check_circle',
    error: 'error',
    info: 'info',
    warning: 'warning',
  };

  return (
    <div 
      className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg shadow-slate-200/50 min-w-[300px] animate-in slide-in-from-top-2 fade-in duration-300 ${styles[toast.type]}`}
    >
      <span className="material-symbols-outlined text-xl">{icons[toast.type]}</span>
      <p className="text-sm font-semibold flex-1">{toast.message}</p>
      <button onClick={onRemove} className="opacity-60 hover:opacity-100 transition-opacity">
        <span className="material-symbols-outlined text-lg">close</span>
      </button>
    </div>
  );
};

export default ToastContainer;