import { SensorReading, SensorConfig } from '../types/sensor';

// Sensor configurations
export const sensorConfigs: SensorConfig[] = [
  {
    id: 'SENS_001',
    type: 'Temperature',
    name: 'Ambient Temperature',
    unit: '°C',
    minValue: -10,
    maxValue: 50,
    warningThreshold: 35,
    criticalThreshold: 40
  },
  {
    id: 'SENS_002',
    type: 'Humidity',
    name: 'Relative Humidity',
    unit: '%',
    minValue: 0,
    maxValue: 100,
    warningThreshold: 80,
    criticalThreshold: 90
  },
  {
    id: 'SENS_003',
    type: 'CO2',
    name: 'Carbon Dioxide',
    unit: 'ppm',
    minValue: 300,
    maxValue: 2000,
    warningThreshold: 1000,
    criticalThreshold: 1500
  },
  {
    id: 'SENS_004',
    type: 'PM2.5',
    name: 'Fine Particulate Matter',
    unit: 'μg/m³',
    minValue: 0,
    maxValue: 500,
    warningThreshold: 35,
    criticalThreshold: 75
  },
  {
    id: 'SENS_005',
    type: 'PM10',
    name: 'Coarse Particulate Matter',
    unit: 'μg/m³',
    minValue: 0,
    maxValue: 600,
    warningThreshold: 50,
    criticalThreshold: 150
  },
  {
    id: 'SENS_006',
    type: 'Air Quality Index',
    name: 'Overall Air Quality',
    unit: 'AQI',
    minValue: 0,
    maxValue: 500,
    warningThreshold: 100,
    criticalThreshold: 200
  },
  {
    id: 'SENS_007',
    type: 'Water Level',
    name: 'Generated Water',
    unit: 'L',
    minValue: 0,
    maxValue: 20,
    warningThreshold: 15,
    criticalThreshold: 18
  },
  {
    id: 'SENS_008',
    type: 'Solar Power',
    name: 'Solar Panel Output',
    unit: 'W',
    minValue: 0,
    maxValue: 1000,
    warningThreshold: 800,
    criticalThreshold: 950
  }
];

// Generate mock sensor readings
export const generateMockSensorData = (): SensorReading[] => {
  return sensorConfigs.map(config => {
    const baseValue = (config.minValue + config.maxValue) / 2;
    const variation = (config.maxValue - config.minValue) * 0.2;
    const randomValue = baseValue + (Math.random() - 0.5) * variation;
    
    return {
      id: config.id,
      sensorType: config.type,
      value: Math.round(randomValue * 100) / 100,
      unit: config.unit,
      timestamp: new Date(),
      location: 'Main Unit',
      status: Math.random() > 0.1 ? 'active' : 'error'
    };
  });
};

// Simulate real-time data updates
export class SensorDataManager {
  private data: Map<string, SensorReading> = new Map();
  private listeners: ((data: SensorReading[]) => void)[] = [];
  private updateInterval: NodeJS.Timeout | null = null;

  constructor() {
    // Initialize with mock data
    const initialData = generateMockSensorData();
    initialData.forEach(reading => {
      this.data.set(reading.id, reading);
    });
  }

  // Subscribe to data updates
  subscribe(callback: (data: SensorReading[]) => void) {
    this.listeners.push(callback);
    // Send initial data
    callback(Array.from(this.data.values()));
    
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Start real-time updates
  startRealTimeUpdates(intervalMs: number = 5000) {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }

    this.updateInterval = setInterval(() => {
      this.updateRandomSensor();
    }, intervalMs);
  }

  // Stop real-time updates
  stopRealTimeUpdates() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  // Update a specific sensor
  updateSensor(sensorId: string, value: number) {
    const existing = this.data.get(sensorId);
    if (existing) {
      const updated: SensorReading = {
        ...existing,
        value,
        timestamp: new Date(),
        status: 'active'
      };
      this.data.set(sensorId, updated);
      this.notifyListeners();
    }
  }

  // Update random sensor (for simulation)
  private updateRandomSensor() {
    const sensors = Array.from(this.data.keys());
    const randomSensorId = sensors[Math.floor(Math.random() * sensors.length)];
    const config = sensorConfigs.find(c => c.id === randomSensorId);
    
    if (config) {
      const baseValue = (config.minValue + config.maxValue) / 2;
      const variation = (config.maxValue - config.minValue) * 0.3;
      const newValue = Math.max(
        config.minValue,
        Math.min(
          config.maxValue,
          baseValue + (Math.random() - 0.5) * variation
        )
      );
      
      this.updateSensor(randomSensorId, Math.round(newValue * 100) / 100);
    }
  }

  // Get all sensor data
  getAllData(): SensorReading[] {
    return Array.from(this.data.values());
  }

  // Get sensor by ID
  getSensorById(id: string): SensorReading | undefined {
    return this.data.get(id);
  }

  // Get sensors by type
  getSensorsByType(type: string): SensorReading[] {
    return Array.from(this.data.values()).filter(
      reading => reading.sensorType === type
    );
  }

  private notifyListeners() {
    const data = Array.from(this.data.values());
    this.listeners.forEach(callback => callback(data));
  }
}

// Export singleton instance
export const sensorManager = new SensorDataManager();