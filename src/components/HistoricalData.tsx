import React, { useState } from 'react';
import { Calendar, ChevronDown, Search, Download, Filter, ArrowUpDown } from 'lucide-react';
import { Badge } from './ui/badge';

// Mock historical data
const mockHistoricalData = [
  { 
    id: 1, 
    date: 'Aug 15, 2023', 
    time: '14:32', 
    location: 'North Pacific', 
    coordinates: '41.7° N, 134.3° W',
    species: 'Humpback Whale', 
    confidence: 0.98,
    acousticSignature: 'HW-9873',
    detectionDuration: '47s'
  },
  { 
    id: 2, 
    date: 'Aug 14, 2023', 
    time: '09:15', 
    location: 'Bering Sea', 
    coordinates: '58.6° N, 174.8° W',
    species: 'Blue Whale', 
    confidence: 0.94,
    acousticSignature: 'BW-4526',
    detectionDuration: '2m 13s'
  },
  { 
    id: 3, 
    date: 'Aug 12, 2023', 
    time: '17:42', 
    location: 'Gulf of Alaska', 
    coordinates: '57.2° N, 148.5° W',
    species: 'Orca', 
    confidence: 0.97,
    acousticSignature: 'OR-3381',
    detectionDuration: '1m 36s'
  },
  { 
    id: 4, 
    date: 'Aug 10, 2023', 
    time: '11:03', 
    location: 'Aleutian Islands', 
    coordinates: '52.1° N, 176.7° E',
    species: 'Minke Whale', 
    confidence: 0.89,
    acousticSignature: 'MW-7719',
    detectionDuration: '28s'
  },
  { 
    id: 5, 
    date: 'Aug 08, 2023', 
    time: '06:51', 
    location: 'North Pacific', 
    coordinates: '44.5° N, 150.2° W',
    species: 'Gray Whale', 
    confidence: 0.92,
    acousticSignature: 'GW-5940',
    detectionDuration: '53s'
  },
];

interface HistoricalDataProps {
  className?: string;
}

const HistoricalData = ({ className }: HistoricalDataProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <section id="historical-data" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-md mx-auto md:max-w-none">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Historical Detection Data</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive archive of past whale detections with detailed acoustic signatures and location data
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft overflow-hidden animate-slide-up">
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all"
                    placeholder="Search by species, location or signature..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setShowFilters(!showFilters)} 
                    className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                    <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <button className="flex items-center px-4 py-2 bg-ocean-100 hover:bg-ocean-200 text-ocean-700 rounded-lg transition-colors">
                    <Calendar className="h-4 w-4 mr-2" />
                    Date Range
                  </button>
                  
                  <button className="hidden md:flex items-center px-4 py-2 bg-ocean-500 hover:bg-ocean-600 text-white rounded-lg transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>
                </div>
              </div>
              
              {showFilters && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Species</label>
                    <select className="block w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500">
                      <option value="">All Species</option>
                      <option value="humpback">Humpback Whale</option>
                      <option value="blue">Blue Whale</option>
                      <option value="orca">Orca</option>
                      <option value="minke">Minke Whale</option>
                      <option value="gray">Gray Whale</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <select className="block w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500">
                      <option value="">All Locations</option>
                      <option value="north-pacific">North Pacific</option>
                      <option value="bering-sea">Bering Sea</option>
                      <option value="gulf-alaska">Gulf of Alaska</option>
                      <option value="aleutian">Aleutian Islands</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confidence</label>
                    <select className="block w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500">
                      <option value="">Any Confidence</option>
                      <option value="high">High (95%+)</option>
                      <option value="medium">Medium (80-95%)</option>
                      <option value="low">Low (Below 80%)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-6 py-3 font-medium">
                      <div className="flex items-center">
                        Date/Time
                        <ArrowUpDown className="h-4 w-4 ml-1 text-gray-400" />
                      </div>
                    </th>
                    <th className="px-6 py-3 font-medium">
                      <div className="flex items-center">
                        Species
                        <ArrowUpDown className="h-4 w-4 ml-1 text-gray-400" />
                      </div>
                    </th>
                    <th className="px-6 py-3 font-medium">Location</th>
                    <th className="px-6 py-3 font-medium">Acoustic Signature</th>
                    <th className="px-6 py-3 font-medium">Duration</th>
                    <th className="px-6 py-3 font-medium">Confidence</th>
                    <th className="px-6 py-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {mockHistoricalData.map((item) => (
                    <tr 
                      key={item.id} 
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium">{item.date}</div>
                        <div className="text-gray-500">{item.time}</div>
                      </td>
                      <td className="px-6 py-4">{item.species}</td>
                      <td className="px-6 py-4">
                        <div>{item.location}</div>
                        <div className="text-xs text-gray-500">{item.coordinates}</div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary" size="sm">{item.acousticSignature}</Badge>
                      </td>
                      <td className="px-6 py-4">{item.detectionDuration}</td>
                      <td className="px-6 py-4">
                        <Badge 
                          variant={item.confidence > 0.95 ? "success" : "secondary"} 
                          size="sm"
                        >
                          {Math.round(item.confidence * 100)}%
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-ocean-600 hover:text-ocean-700 font-medium">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 5 of 134 results
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Previous
                </button>
                <button className="px-3 py-1 text-sm bg-ocean-500 text-white rounded-md hover:bg-ocean-600">
                  1
                </button>
                <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalData;
