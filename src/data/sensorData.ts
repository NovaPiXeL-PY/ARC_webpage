export const sensorConfigs: SensorConfig[] = [
  {
    id: 'SENS_001',
    type: 'Temperature',
    name: 'Ambient Temperature',
    unit: '°C',
    minValue: 20,             // cooler monsoon nights
    maxValue: 35,             // September highs
    warningThreshold: 32,
    criticalThreshold: 35
  },
  {
    id: 'SENS_002',
    type: 'Humidity',
    name: 'Relative Humidity',
    unit: '%',
    minValue: 60,             // September always humid
    maxValue: 95,
    warningThreshold: 85,
    criticalThreshold: 95
  },
  {
    id: 'SENS_003',
    type: 'CO2',
    name: 'Carbon Dioxide',
    unit: 'ppm',
    minValue: 400,
    maxValue: 2000,
    warningThreshold: 1000,
    criticalThreshold: 1500
  },
  {
    id: 'SENS_004',
    type: 'PM2.5',
    name: 'Fine Particulate Matter',
    unit: 'µg/m³',
    minValue: 10,             // rains wash out dust
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
    maxValue: 25,             // higher due to humidity collection
    warningThreshold: 18,
    criticalThreshold: 22
  },
  {
    id: 'SENS_008',
    type: 'Solar Power',
    name: 'Solar Panel Output',
    unit: 'W',
    minValue: 100,            // rainy/cloudy days
    maxValue: 700,            // capped lower due to clouds
    warningThreshold: 600,
    criticalThreshold: 700
  }
];


export const generateMockSensorData = (): SensorReading[] => {
  return sensorConfigs.map(config => {
    let baseValue: number;

    switch (config.type) {
      case 'Temperature':
        baseValue = 27 + (Math.random() - 0.5) * 5; // ~25–30 °C
        break;
      case 'Humidity':
        baseValue = 75 + (Math.random() - 0.5) * 15; // ~65–85%
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
        baseValue = 10 + Math.random() * 8; // ~10–18 L from condensation
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
