
import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'active' | 'inactive' | 'detecting' | 'warning';

interface StatusIndicatorProps {
  status: StatusType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
  showLabel?: boolean;
}

const statusConfig = {
  active: {
    color: 'bg-green-500',
    pulseColor: 'bg-green-400/40',
    text: 'Active'
  },
  inactive: {
    color: 'bg-gray-400',
    pulseColor: 'bg-gray-300/40',
    text: 'Inactive'
  },
  detecting: {
    color: 'bg-ocean-500',
    pulseColor: 'bg-ocean-400/40',
    text: 'Detecting'
  },
  warning: {
    color: 'bg-amber-500',
    pulseColor: 'bg-amber-400/40',
    text: 'Warning'
  }
};

const sizeConfig = {
  sm: {
    dot: 'w-2 h-2',
    pulse: 'w-4 h-4',
    text: 'text-xs'
  },
  md: {
    dot: 'w-3 h-3',
    pulse: 'w-6 h-6',
    text: 'text-sm'
  },
  lg: {
    dot: 'w-4 h-4',
    pulse: 'w-8 h-8',
    text: 'text-base'
  }
};

export const StatusIndicator = ({
  status,
  size = 'md',
  className,
  label,
  showLabel = true
}: StatusIndicatorProps) => {
  const { color, pulseColor, text } = statusConfig[status];
  const { dot, pulse, text: textSize } = sizeConfig[size];
  const displayText = label || text;
  
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative flex items-center justify-center">
        <span className={cn('absolute rounded-full animate-pulse-soft', pulse, pulseColor)} />
        <span className={cn('relative rounded-full', dot, color)} />
      </div>
      {showLabel && (
        <span className={cn('font-medium', textSize)}>
          {displayText}
        </span>
      )}
    </div>
  );
};

export default StatusIndicator;
