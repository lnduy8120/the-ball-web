import React from 'react';
import Spinner from './Spinner';

const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 gap-4">
      <Spinner size="lg" variant="primary" />
      <p className="text-slate-400 text-sm font-medium animate-pulse">Đang tải...</p>
    </div>
  );
};

export default PageLoader;