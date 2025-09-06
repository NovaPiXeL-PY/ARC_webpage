import { SensorReading, SensorConfig } from '../types/sensor';

// 📊 Sensor configurations for Hyderabad (September)
export const sensorConfigs: SensorConfig[] = [
  {
    id: 'SENS_001',
    type: 'Temperature',
    name: 'Ambient Temperature',
    unit: '°C',
    minValue: 20,
    maxValue: 35,
    warningThreshold: 32,
    criticalThreshold: 35
  },
  {
    id: 'SENS_002',
    type: 'Humidity',
    name: 'Relative Humidity',
    unit: '%',
    minValue: 60,
    maxValue: 95,
    warningThreshold: 85,
    criticalThreshold: 95
  },
  {
    id: 'SENS_003',
    type: 'CO2',
    name: 'Carbon Dioxide',
    unit: 'ppm',
    minValue: 0,
    maxValue: 2000,
    warningThreshold: 400,
    criticalThreshold: 1000
  },
  {
    id: 'SENS_004',
    type: 'PM2.5',
    name: 'Fine Particulate Matter',
    unit: 'µg/m³',
    minValue: 10,
    maxValue: 150,
    warningThreshold: 60,
    criticalThreshold: 100
  },
  {
    id: 'SENS_005',
    type: 'PM10',
    name: 'Coarse Particulate Matter',
    unit: 'µg/m³',
    minValue: 20,
    maxValue: 200,
    warningThreshold: 80,
    criticalThreshold: 150
  },
  {
    id: 'SENS_006',
    type: 'Air Quality Index',
    name: 'Overall Air Quality',
    unit: 'AQI',
    minValue: 0,
    maxValue: 200,
    warningThreshold: 100,
    criticalThreshold: 150
  },
  {
    id: 'SENS_007',
    type: 'Water Level',
    name: 'Generated Water',
    unit: 'L',
    minValue: 0,
    maxValue: 25,
    warningThreshold: 18,
    criticalThreshold: 22
  },
  {
    id: 'SENS_008',
    type: 'Solar Power',
    name: 'Solar Panel Output',
    unit: 'W',
    minValue: 100,
    maxValue: 700,
    warningThreshold: 600,
    criticalThreshold: 700
  }
];

// 🌦️ Generate mock September sensor readings
export const generateMockSensorData = (): SensorReading[] => {
  return sensorConfigs.map(config => {
    let baseValue: number;

    switch (config.type) {
      case 'Temperature':
        baseValue = 27 + (Math.random() - 0.5) * 5; // ~25–30 °C
        break;
      case 'Humidity':
        baseValue = 30 + (Math.random() - 0.5) * 15; // ~65–85%
        break;
      case 'PM2.5':
        baseValue = 30 + (Math.random() - 0.5) * 20; // ~20–40 µg/m³
        break;
      case 'PM10':
        baseValue = 60 + (Math.random() - 0.5) * 30; // ~45–75 µg/m³
        break;
      case 'Air Quality Index':
        baseValue = 70 + (Math.random() - 0.5) * 30; // ~60–90 AQI
        break;
      case 'Solar Power':
        baseValue = 400 + (Math.random() - 0.5) * 200; // ~300–500 W
        break;
      case 'Water Level':
        baseValue = 10 + Math.random() * 8; // ~10–18 L
        break;
      default:
        baseValue = (config.minValue + config.maxValue) / 2;
    }

    return {
      id: config.id,
      sensorType: config.type,
      value: Math.round(
        Math.max(config.minValue, Math.min(config.maxValue, baseValue)) * 100
      ) / 100,
      unit: config.unit,
      timestamp: new Date(),
      location: 'Main Unit - Hyderabad',
      status: Math.random() > 0.05 ? 'active' : 'error'
    };
  });
};

// ⚡ Sensor Data Manager
export class SensorDataManager {
  private data: Map<string, SensorReading> = new Map();
  private listeners: ((data: SensorReading[]) => void)[] = [];
  private updateInterval: NodeJS.Timeout | null = null;

  constructor() {
    const initialData = generateMockSensorData();
    initialData.forEach(reading => {
      this.data.set(reading.id, reading);
    });
  }

  subscribe(callback: (data: SensorReading[]) => void) {
    this.listeners.push(callback);
    callback(Array.from(this.data.values()));

    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  startRealTimeUpdates(intervalMs: number = 5000) {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    this.updateInterval = setInterval(() => {
      this.updateRandomSensor();
    }, intervalMs);
  }

  stopRealTimeUpdates() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

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

  getAllData(): SensorReading[] {
    return Array.from(this.data.values());
  }

  getSensorById(id: string): SensorReading | undefined {
    return this.data.get(id);
  }

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

// ✅ Export singleton instance so imports work
export const sensorManager = new SensorDataManager();
