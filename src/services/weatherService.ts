import type { HourlyForecastContainerProps, WeatherData, WeeklyForecastContainerProps } from "../Types/WeatherTypes";

export async function weatherService(city: string): Promise<WeatherData> {
  const { lat, long } = await getGeoLocation(city);
  const current = await getCurrentWeather(lat, long, city);
  const hourly = await getHourlyWeather(lat, long);
  const weekly = await getWeeklyWeather(lat, long);
  return { currentWeatherData: current, hourlyForecastData: hourly, weeklyForecastData: weekly };
}

async function getWeeklyWeather(lat: number, long: number): Promise<WeeklyForecastContainerProps> {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max&timezone=America/Los_Angeles&daily=temperature_2m_min&temperature_unit=fahrenheit&forecast_days=7&hourly&daily=weather_code`);
  const result = await response.json();
  const {temperature_2m_max: maxTemps, temperature_2m_min: minTemps, time: daysOfWeek, weather_code: conditions } = result.daily;
  return { maxTemps, minTemps, daysOfWeek, conditions };
}

async function getHourlyWeather(lat: number, long: number): Promise<HourlyForecastContainerProps> {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&temperature_unit=fahrenheit&forecast_days=1&hourly=temperature,weather_code,wind_speed_10m`);
  const result = await response.json();
  const { time: hours, weather_code: conditions, temperature: temps } = result.hourly;
  return { hours, conditions, temps };
}

async function getCurrentWeather(lat: number, long: number, city: string): Promise<{ temp: number, condition: number, city: string }> {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&temperature_unit=fahrenheit&current=temperature,weather_code,wind_speed_10m`)
  const result = await response.json();
  const { current: { temperature: temp, weather_code: condition } } = result;
  return { temp, condition, city };
}

async function getGeoLocation(city: string): Promise<{lat: number, long: number}> {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
    if (!response.ok) throw new Error(`response status: ${response.status}`);
    const result = await response.json();
    const lat = result.results[0].latitude;
    const long = result.results[0].longitude;
    return { lat, long };
}

