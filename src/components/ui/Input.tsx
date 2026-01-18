import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  leftIcon,
  rightIcon,
  className = '',
  containerClassName = '',
  id,
  ...props
}, ref) => {
  const inputId = id || props.name;

  return (
    <div className={`space-y-1.5 ${containerClassName}`}>
      {label && (
        <label htmlFor={inputId} className="block text-xs font-semibold text-slate-500 ml-1 uppercase tracking-wide">
          {label}
        </label>
      )}
      <div className="relative group">
        {leftIcon && (
          <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-colors flex items-center pointer-events-none ${error ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>
            {leftIcon}
          </div>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`w-full bg-white border rounded-2xl text-sm outline-none transition-all placeholder:text-slate-400 text-slate-900 
            ${leftIcon ? 'pl-11' : 'pl-4'} 
            ${rightIcon ? 'pr-12' : 'pr-4'} 
            py-4
            ${error 
              ? 'border-red-300 focus:ring-2 focus:ring-red-200 focus:border-red-400' 
              : 'border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent'
            } ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500 ml-1 font-medium animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;