import React, { ButtonHTMLAttributes } from 'react';
import Spinner from './Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 active:scale-[0.98]',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-[0.98]',
    outline: 'bg-transparent border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-600',
    danger: 'bg-red-50 hover:bg-red-100 text-red-500',
    white: 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm hover:scale-[1.02]'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded-lg',
    md: 'text-sm px-5 py-2.5 rounded-xl',
    lg: 'text-base px-6 py-4 rounded-2xl',
    icon: 'p-2 rounded-full'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="mr-2">
            <Spinner size="sm" variant="current" />
        </span>
      )}
      {!isLoading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </button>
  );
};

export default Button;