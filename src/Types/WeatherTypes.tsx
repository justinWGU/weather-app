export interface CitySearchBoxProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export interface CurrentWeatherProps {
  temp: number;
  condition: number;  
  city: string;
}

export interface ForecastDayProps {
  dayOfWeek: string;
  condition: number;
  maxTemp: number;
  minTemp: number;
}

export interface HourlyForecastProps {
  hour: number;
  condition: number;
  temp: number;
  border: string;
}

export interface HourlyForecastContainerProps {
  hours: Array<number>;
  conditions: Array<number>;
  temps: Array<number>;
}

export interface WeeklyForecastContainerProps {
  daysOfWeek: Array<string>;
  conditions: Array<number>;
  maxTemps: Array<number>;
  minTemps: Array<number>;
}

export interface AirConditions {
  realFeel: number;
  chOfRain: number;
  wind: number;
  uv: number;
}

export interface WeatherData {
  currentWeatherData: CurrentWeatherProps;
  hourlyForecastData: HourlyForecastContainerProps;
  weeklyForecastData: WeeklyForecastContainerProps;
  airConditions: AirConditions;
}