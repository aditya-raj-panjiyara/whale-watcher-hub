
import React from 'react';
import { WaveAnimation } from './WaveAnimation';
import { Radar, Radio, Waves, Users, PieChart, FileAudio } from 'lucide-react';

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section id="about" className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-md mx-auto md:max-w-none">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Our Methodology</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Learn how Team GECR's whale detection system uses advanced acoustic 
              monitoring and machine learning algorithms to track marine mammals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologyItems.map((item, index) => (
              <MethodologyCard 
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h3 className="text-2xl font-bold tracking-tight mb-4">About Team GECR</h3>
                <p className="text-gray-600 mb-6">
                  Team GECR is a multidisciplinary group of marine biologists, data scientists, 
                  and engineers dedicated to developing innovative solutions for monitoring and 
                  protecting marine ecosystems.
                </p>
                <p className="text-gray-600 mb-6">
                  Our whale detection system represents the culmination of years of research and 
                  development, combining cutting-edge acoustic technology with sophisticated 
                  artificial intelligence to provide unprecedented insights into cetacean behavior 
                  and migration patterns.
                </p>
                <p className="text-gray-600">
                  By making this data widely accessible, we aim to support conservation efforts, 
                  enhance maritime safety, and deepen our collective understanding of these 
                  magnificent marine mammals.
                </p>
              </div>
              
              <div className="relative h-full min-h-[400px] bg-gradient-ocean rounded-2xl overflow-hidden animate-slide-up [animation-delay:200ms]">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-white text-center p-8">
                    <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
                    <p className="text-white/90 mb-6">
                      Help us protect and study these magnificent marine creatures 
                      through technology and innovation.
                    </p>
                    <button className="bg-white text-ocean-600 hover:bg-ocean-50 font-medium px-6 py-3 rounded-lg transition-colors">
                      Contact Team GECR
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-ocean-700/30 z-0"></div>
                <WaveAnimation color="rgba(255, 255, 255, 0.2)" height={400} opacity={0.3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WaveAnimation color="rgba(10, 132, 255, 0.05)" height={200} speed="slow" />
    </section>
  );
};

interface MethodologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const MethodologyCard = ({ icon, title, description, delay = 0 }: MethodologyCardProps) => (
  <div 
    className="bg-white rounded-xl shadow-soft p-6 animate-slide-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-ocean-50 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-ocean-600">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const methodologyItems = [
  {
    icon: <Radio className="h-6 w-6" />,
    title: 'Acoustic Sensors',
    description: 'Our network of highly sensitive hydrophones captures underwater sounds across a wide frequency range, specifically optimized for cetacean vocalizations.'
  },
  {
    icon: <Waves className="h-6 w-6" />,
    title: 'Signal Processing',
    description: 'Advanced digital signal processing techniques filter ambient noise and isolate distinct acoustic signatures characteristic of different whale species.'
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: 'Machine Learning',
    description: 'Custom neural networks trained on thousands of hours of marine recordings analyze sound patterns to identify species with remarkable accuracy.'
  },
  {
    icon: <Radar className="h-6 w-6" />,
    title: 'Spatial Tracking',
    description: 'Triangulation between multiple sensors enables precise localization and tracking of whale movements throughout the monitored region.'
  },
  {
    icon: <FileAudio className="h-6 w-6" />,
    title: 'Acoustic Library',
    description: 'Our continuously expanding database of whale vocalizations improves detection algorithms and contributes to scientific research on communication patterns.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Collaborative Research',
    description: 'We partner with marine research institutions and conservation organizations to share findings and enhance collective knowledge of cetacean behavior.'
  }
];

export default AboutSection;
