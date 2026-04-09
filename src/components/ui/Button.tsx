import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-primary-container text-deep-navy hover:scale-95 shadow-md focus:ring-primary-container hover:bg-amber-400',
    secondary: 'bg-secondary text-white hover:bg-deep-navy focus:ring-secondary',
    tertiary: 'bg-transparent text-primary hover:underline hover:bg-surface-container-low focus:ring-primary',
    outline: 'border-2 border-white/30 text-white hover:bg-white hover:text-secondary focus:ring-white',
    gradient: 'text-white gradient-cta hover:shadow-lg hover:-translate-y-1 focus:ring-primary',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
