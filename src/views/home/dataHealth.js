import health from '../../../assets/images/health';

const data = [
  {
    icon: health.ic_blood_press,
    title: 'Blood pressure',
    param: 120,
    unit: 'mmhg',
    status: 'Normal',
  },
  {
    icon: health.ic_heart_rate,
    title: 'Heart rate',
    param: 78,
    unit: 'bpm',
    status: 'Normal',
  },
  {
    icon: health.ic_hrv,
    title: 'Heart rate variability',
    param: 82,
    unit: 'ms',
    status: 'Low',
  },
  {
    icon: health.ic_respiration,
    title: 'Respiratory rate',
    param: 18,
    unit: 'breaths/min',
    status: 'Normal',
  },
  {
    icon: health.ic_spo2,
    title: 'SPo2',
    param: 97,
    unit: '%',
    status: 'Normal',
  },
  {
    icon: health.ic_vo2,
    title: 'Vo2',
    param: 35.7,
    unit: 'ml/kg/min',
    status: 'Normal',
  },
  {
    icon: health.ic_temp,
    title: 'Body temperature',
    param: 37.9,
    unit: '°C',
    status: 'High',
  },
  {
    icon: health.ic_calo,
    title: 'Calories',
    param: 294,
    unit: 'kcal',
    status: 'Normal',
  },
  {
    icon: health.ic_sleep,
    title: 'Sleep',
    param: 7,
    unit: 'hrs',
    param2: 38,
    unit2: 'mins',
    status: 'Normal',
  },
  {
    icon: health.ic_step,
    title: 'Step Counter',
    param: '10,489',
    unit: 'steps',
    status: 'Normal',
  },
];

export default data;
