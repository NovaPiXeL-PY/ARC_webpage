import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Zap, 
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  Database
} from 'lucide-react';
import { SensorReading } from '../types/sensor';
import { sensorManager, sensorConfigs } from '../data/sensorData';

const SensorDashboard: React.FC = () => {
  const [sensorData, setSensorData] = useState<SensorReading[]>([]);
  const [isRealTime, setIsRealTime] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    const unsubscribe = sensorManager.subscribe((data) => {
      setSensorData(data);
      setLastUpdate(new Date());
    });

    return unsubscribe;
  }, []);

  const toggleRealTime = () => {
    if (isRealTime) {
      sensorManager.stopRealTimeUpdates();
    } else {
      sensorManager.startRealTimeUpdates(3000);
    }
    setIsRealTime(!isRealTime);
  };

  const getSensorIcon = (type: string) => {
    switch (type) {
      case 'Temperature': return <Thermometer className="h-6 w-6" />;
      case 'Humidity': return <Droplets className="h-6 w-6" />;
      case 'CO2': case 'PM2.5': case 'PM10': case 'Air Quality Index': return <Wind className="h-6 w-6" />;
      case 'Solar Power': return <Zap className="h-6 w-6" />;
      default: return <Activity className="h-6 w-6" />;
    }
  };

  const getStatusColor = (reading: SensorReading) => {
    if (reading.status === 'error') return 'text-red-600 bg-red-100';
    
    const config = sensorConfigs.find(c => c.id === reading.id);
    if (!config) return 'text-gray-600 bg-gray-100';

    if (config.criticalThreshold && reading.value >= config.criticalThreshold) {
      return 'text-red-600 bg-red-100';
    }
    if (config.warningThreshold && reading.value >= config.warningThreshold) {
      return 'text-yellow-600 bg-yellow-100';
    }
    return 'text-green-600 bg-green-100';
  };

  const getStatusIcon = (reading: SensorReading) => {
    if (reading.status === 'error') return <XCircle className="h-5 w-5" />;
    
    const config = sensorConfigs.find(c => c.id === reading.id);
    if (!config) return <CheckCircle className="h-5 w-5" />;

    if (config.criticalThreshold && reading.value >= config.criticalThreshold) {
      return <XCircle className="h-5 w-5" />;
    }
    if (config.warningThreshold && reading.value >= config.warningThreshold) {
      return <AlertTriangle className="h-5 w-5" />;
    }
    return <CheckCircle className="h-5 w-5" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <Database className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sensor Dashboard</h2>
            <p className="text-gray-600">Real-time environmental monitoring</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Last update: {lastUpdate.toLocaleTimeString()}
          </div>
          <button
            onClick={toggleRealTime}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isRealTime 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
            }`}
          >
            <RefreshCw className={`h-4 w-4 ${isRealTime ? 'animate-spin' : ''}`} />
            <span>{isRealTime ? 'Stop Live' : 'Start Live'}</span>
          </button>
        </div>
      </div>

      {/* Sensor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sensorData.map((reading, index) => (
          <motion.div
            key={reading.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-emerald-600">
                {getSensorIcon(reading.sensorType)}
              </div>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(reading)}`}>
                {getStatusIcon(reading)}
                <span className="ml-1">
                  {reading.status === 'error' ? 'Error' : 
                   reading.value >= (sensorConfigs.find(c => c.id === reading.id)?.criticalThreshold || Infinity) ? 'Critical' :
                   reading.value >= (sensorConfigs.find(c => c.id === reading.id)?.warningThreshold || Infinity) ? 'Warning' : 'Normal'}
                </span>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="text-sm font-medium text-gray-600">{reading.id}</div>
              <div className="text-xs text-gray-500">{reading.sensorType}</div>
            </div>
            
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-gray-900">
                {reading.status === 'error' ? '--' : reading.value}
              </span>
              <span className="text-sm text-gray-600">{reading.unit}</span>
            </div>
            
            <div className="mt-2 text-xs text-gray-500">
              {reading.timestamp.toLocaleTimeString()}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Data Table */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sensor Data Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-emerald-50">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Sensor ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Sensor Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Value</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Unit</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {sensorData.map((reading) => (
                <tr key={reading.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">{reading.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{reading.sensorType}</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    {reading.status === 'error' ? '--' : reading.value}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{reading.unit}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(reading)}`}>
                      {getStatusIcon(reading)}
                      <span className="ml-1">
                        {reading.status === 'error' ? 'Error' : 
                         reading.value >= (sensorConfigs.find(c => c.id === reading.id)?.criticalThreshold || Infinity) ? 'Critical' :
                         reading.value >= (sensorConfigs.find(c => c.id === reading.id)?.warningThreshold || Infinity) ? 'Warning' : 'Normal'}
                      </span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                    {reading.timestamp.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-emerald-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-emerald-600">
            {sensorData.filter(s => s.status === 'active').length}
          </div>
          <div className="text-sm text-emerald-700">Active Sensors</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {sensorData.filter(s => {
              const config = sensorConfigs.find(c => c.id === s.id);
              return config?.warningThreshold && s.value >= config.warningThreshold && s.value < (config.criticalThreshold || Infinity);
            }).length}
          </div>
          <div className="text-sm text-yellow-700">Warnings</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-600">
            {sensorData.filter(s => {
              const config = sensorConfigs.find(c => c.id === s.id);
              return s.status === 'error' || (config?.criticalThreshold && s.value >= config.criticalThreshold);
            }).length}
          </div>
          <div className="text-sm text-red-700">Critical/Errors</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">
            {sensorData.length}
          </div>
          <div className="text-sm text-blue-700">Total Sensors</div>
        </div>
      </div>
    </div>
  );
};

export default SensorDashboard;