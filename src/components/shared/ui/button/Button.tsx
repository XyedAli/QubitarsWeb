import React from 'react';
import Link from 'next/link';
import { MoveRight, MoveUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
  /** When true, shows MoveUpRight that swaps to MoveRight on hover */
  showArrow?: boolean;
  /** When set, renders as Next.js Link instead of button (for CTAs) */
  href?: string;
}

const arrowIconClasses = 'w-5 h-5 mx-1 transition-opacity duration-300 group-hover:opacity-0';
const arrowIconClassesHover = 'w-5 h-5 mx-1 font-bold absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  showArrow = false,
  href,
}) => {
  const baseClasses = 'group inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white hover:opacity-90 focus:ring-[#F05C22]',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary',
    accent: 'bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white hover:opacity-90 cursor-pointer',
    outline: 'border-2 font-semibold border-darkGray text-darkGray rounded-sm',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-2 lg:px-4 py-2 text-base',
    lg: 'px-4 lg:px-6 py-2 lg:py-3 text-base lg:text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim();

  const arrowEl = showArrow && (
    <div className="relative" aria-hidden>
      <MoveUpRight className={`${arrowIconClasses} text-current`} />
      <MoveRight className={`${arrowIconClassesHover} text-current`} />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
        {arrowEl}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {arrowEl}
    </button>
  );
};

export default Button;
