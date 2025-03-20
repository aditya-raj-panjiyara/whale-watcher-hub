
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'destructive' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) => {
  const variantClasses = {
    default: 'bg-ocean-500 text-white hover:bg-ocean-600',
    outline: 'border border-ocean-500 text-ocean-500 bg-transparent hover:bg-ocean-50',
    secondary: 'bg-ocean-100 text-ocean-700 hover:bg-ocean-200',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-teal-400 text-white hover:bg-teal-500',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
