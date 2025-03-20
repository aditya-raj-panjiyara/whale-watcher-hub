import React from 'react';
import { ChevronDown, Radar, Waves } from 'lucide-react';
import { WaveAnimation } from './WaveAnimation';
import { Badge } from './ui/badge';
import { StatusIndicator } from './ui/StatusIndicator';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-white to-ocean-50 pt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10 animate-fade-in">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-6 animate-slide-up">Advanced Marine Technology</Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance bg-clip-text text-transparent bg-gradient-ocean animate-slide-up [animation-delay:200ms]">
            Whale Detection System
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance animate-slide-up [animation-delay:400ms]">
            Cutting-edge acoustic monitoring technology for real-time detection and tracking of cetacean activity in marine environments.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-12 animate-slide-up [animation-delay:600ms]">
            <StatusIndicator status="active" size="md" label="System Active" />
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-ocean-700">
              <Radar className="h-5 w-5" />
              <span className="font-medium text-sm">Live Monitoring</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl animate-slide-up [animation-delay:800ms]">
            <StatCard 
              icon={<Waves className="h-8 w-8 text-ocean-500" />} 
              label="Active Sensors" 
              value="32" 
            />
            <StatCard 
              icon={<Radar className="h-8 w-8 text-ocean-500" />} 
              label="Detection Range" 
              value="150 km" 
            />
            <StatCard 
              icon={<div className="flex space-x-1">
                <div className="w-2 h-8 bg-ocean-400 rounded-full"></div>
                <div className="w-2 h-6 bg-ocean-500 rounded-full"></div>
                <div className="w-2 h-10 bg-ocean-600 rounded-full"></div>
                <div className="w-2 h-4 bg-ocean-300 rounded-full"></div>
              </div>} 
              label="Accuracy Rate" 
              value="98.5%" 
            />
          </div>
        </div>
        
        <a 
          href="#dashboard" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-ocean-600 animate-float"
        >
          <span className="text-sm font-medium mb-2">Explore Data</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-full transform -translate-y-1/2 opacity-5">
          <div className="w-full h-full bg-ocean-500 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <WaveAnimation 
        color="rgba(10, 132, 255, 0.1)" 
        height={300} 
        speed="slow" 
      />
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatCard = ({ icon, label, value }: StatCardProps) => (
  <div className="glass rounded-xl p-4 flex flex-col items-center justify-center">
    <div className="mb-2">{icon}</div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

export default Hero;
