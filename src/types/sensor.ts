export interface SensorReading {
  id: string;
  sensorType: string;
  value: number;
  unit: string;
  timestamp: Date;
  location?: string;
  status: 'active' | 'inactive' | 'error';
}

export interface SensorConfig {
  id: string;
  type: string;
  name: string;
  unit: string;
  minValue: number;
  maxValue: number;
  warningThreshold?: number;
  criticalThreshold?: number;
}

export type SensorType = 
  | 'Temperature'
  | 'Humidity' 
  | 'CO2'
  | 'PM2.5'
  | 'PM10'
  | 'Air Quality Index'
  | 'Water Level'
  | 'Solar Power';