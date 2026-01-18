import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'white' | 'slate' | 'current';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', variant = 'primary', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-[3px]',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4'
  };

  const variants = {
    primary: 'border-primary border-t-transparent',
    white: 'border-white border-t-transparent',
    slate: 'border-slate-300 border-t-slate-600',
    current: 'border-current border-t-transparent'
  };

  return (
    <div className={`rounded-full animate-spin ${sizes[size]} ${variants[variant]} ${className}`} />
  );
};

export default Spinner;