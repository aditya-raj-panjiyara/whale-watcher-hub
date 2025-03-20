import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle, ArrowRight, Fish, MapPin, Filter } from 'lucide-react';
import { Badge } from './ui/badge';
import { StatusIndicator } from './ui/StatusIndicator';

const mockData = [
  { time: '00:00', count: 3 },
  { time: '02:00', count: 2 },
  { time: '04:00', count: 4 },
  { time: '06:00', count: 6 },
  { time: '08:00', count: 8 },
  { time: '10:00', count: 12 },
  { time: '12:00', count: 10 },
  { time: '14:00', count: 15 },
  { time: '16:00', count: 12 },
  { time: '18:00', count: 8 },
  { time: '20:00', count: 5 },
  { time: '22:00', count: 4 },
];

const recentDetections = [
  { id: 1, time: '14:32', location: 'North Pacific', species: 'Humpback Whale', confidence: 0.98 },
  { id: 2, time: '13:47', location: 'Bering Sea', species: 'Blue Whale', confidence: 0.94 },
  { id: 3, time: '11:15', location: 'Gulf of Alaska', species: 'Orca', confidence: 0.97 },
  { id: 4, time: '09:23', location: 'Aleutian Islands', species: 'Minke Whale', confidence: 0.89 },
];

interface DashboardProps {
  className?: string;
}

const Dashboard = ({ className }: DashboardProps) => {
  const [timeRange, setTimeRange] = useState('24h');
  
  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-md mx-auto md:max-w-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Live Dashboard</h2>
              <p className="text-gray-500">Real-time monitoring and whale detection data</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <StatusIndicator status="detecting" />
              
              <div className="bg-white rounded-lg shadow-sm p-1 flex">
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded ${timeRange === '24h' ? 'bg-ocean-100 text-ocean-700' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setTimeRange('24h')}
                >
                  24h
                </button>
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded ${timeRange === '7d' ? 'bg-ocean-100 text-ocean-700' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setTimeRange('7d')}
                >
                  7d
                </button>
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded ${timeRange === '30d' ? 'bg-ocean-100 text-ocean-700' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setTimeRange('30d')}
                >
                  30d
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-soft p-6 animate-slide-up">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Detection Activity</h3>
                <button className="text-sm text-ocean-600 hover:text-ocean-700 flex items-center">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={mockData}
                    margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0A84FF" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0A84FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="time" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.8)', 
                        border: 'none', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(8px)'
                      }}
                      labelStyle={{ fontWeight: 'bold', color: '#333' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="count" 
                      stroke="#0A84FF" 
                      fillOpacity={1} 
                      fill="url(#colorCount)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6 animate-slide-up [animation-delay:200ms]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recent Detections</h3>
                <button className="flex items-center text-sm text-gray-400 hover:text-gray-600">
                  <Filter className="h-4 w-4 mr-1" /> Filter
                </button>
              </div>
              
              <div className="space-y-4">
                {recentDetections.map((detection) => (
                  <div key={detection.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div className="flex space-x-3">
                        <div className="bg-ocean-100 rounded-full p-2 text-ocean-500">
                          <Fish className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">{detection.species}</div>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" /> {detection.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">{detection.time}</div>
                        <div className="mt-1">
                          <Badge 
                            variant={detection.confidence > 0.95 ? "success" : "secondary"} 
                            size="sm"
                          >
                            {Math.round(detection.confidence * 100)}% Confidence
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 text-center py-2 text-sm font-medium text-ocean-600 bg-ocean-50 hover:bg-ocean-100 rounded-lg transition-colors">
                View All Detections
              </button>
            </div>
          </div>
          
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start animate-slide-up [animation-delay:400ms]">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-amber-800">Unusual Migration Pattern Detected</h4>
              <p className="text-sm text-amber-700 mt-1">Higher than normal whale activity detected in the North Pacific region. Potential migration pattern shift observed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
