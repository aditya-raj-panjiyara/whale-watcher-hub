
import React from 'react';
import { cn } from '@/lib/utils';

interface WaveAnimationProps {
  className?: string;
  color?: string;
  speed?: 'slow' | 'normal' | 'fast';
  opacity?: number;
  height?: number;
}

export const WaveAnimation = ({
  className,
  color = 'rgba(10, 132, 255, 0.2)',
  speed = 'normal',
  opacity = 0.2,
  height = 200
}: WaveAnimationProps) => {
  const speedMap = {
    slow: 'animate-[wave_30s_linear_infinite]',
    normal: 'animate-[wave_15s_linear_infinite]',
    fast: 'animate-[wave_8s_linear_infinite]'
  };

  const delayMap = {
    slow: 'animation-delay-[10s]',
    normal: 'animation-delay-[5s]',
    fast: 'animation-delay-[2s]'
  };

  return (
    <div className={cn('absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none', className)} style={{ height: `${height}px` }}>
      <svg
        className={cn('absolute bottom-0 left-0 w-full', speedMap[speed])}
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,176C840,181,960,235,1080,240C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill={color}
          fillOpacity={opacity}
        />
      </svg>
      
      <svg
        className={cn('absolute bottom-0 left-0 w-full', speedMap[speed], delayMap[speed])}
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,186.7C672,181,768,171,864,165.3C960,160,1056,160,1152,160C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill={color}
          fillOpacity={opacity * 0.7}
        />
      </svg>
    </div>
  );
};

export default WaveAnimation;
