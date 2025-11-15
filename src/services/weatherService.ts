import type { HourlyForecastContainerProps, WeatherData, WeeklyForecastContainerProps, AirConditions } from "../Types/WeatherTypes";

export async function weatherService(city: string): Promise<WeatherData> {
  const { lat, long } = await getGeoLocation(city);
  const current = await getCurrentWeather(lat, long, city);
  const hourly = await getHourlyWeather(lat, long);
  const weekly = await getWeeklyWeather(lat, long);
  const airConds = await getAirConditions(lat, long);
  return { currentWeatherData: current, hourlyForecastData: hourly, weeklyForecastData: weekly, airConditions: airConds }; // how to type/change var names here
}

async function getWeeklyWeather(lat: number, long: number): Promise<WeeklyForecastContainerProps> {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max&timezone=America/Los_Angeles&daily=temperature_2m_min&temperature_unit=fahrenheit&forecast_days=7&hourly&daily=weather_code`);
  if (!response.ok) throw new Error(`response status: ${response.status}`);  
  const result = await response.json();
  const {temperature_2m_max: maxTemps, temperature_2m_min: minTemps, time, weather_code: conditions } = result.daily;
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  const today = d.getDay();
  const daysOfWeek: Array<string> = time.map((d: string) => {
    const newD = new Date(d);
    const day = newD.getDay();
    if (day == today) return 'Today';
    else return weekdays[day];
  });
  return { maxTemps, minTemps, daysOfWeek, conditions };
}

async function getHourlyWeather(lat: number, long: number): Promise<HourlyForecastContainerProps> {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&temperature_unit=fahrenheit&forecast_days=1&hourly=temperature,weather_code,wind_speed_10m`);
  if (!response.ok) throw new Error(`response status: ${response.status}`);  
  const result = await response.json();
  const { time, weather_code: conditions, temperature: temps } = result.hourly; // how to type destructured objs  
  // parse returned string to extract the hour only
  const hours: Array<number> = time.map((str: string) => {
      const hour: number = Number(str.slice(11, 13)) + 1;
      return hour;
  })
  return { hours, conditions, temps };
}

async function getCurrentWeather(lat: number, long: number, city: string): Promise<{ temp: number, condition: number, city: string }> {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&temperature_unit=fahrenheit&current=temperature,weather_code,wind_speed_10m`)
  if (!response.ok) throw new Error(`response status: ${response.status}`);
  console.log('Got current weather data!');
  const result = await response.json();
  const { current: { temperature: temp, weather_code: condition } } = result;
  return { temp, condition, city };
}

async function getGeoLocation(city: string): Promise<{lat: number, long: number}> {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
    if (!response.ok) throw new Error(`response status: ${response.status}`);
    console.log('Got geolocation data!');
    const result = await response.json();
    const lat = result.results[0].latitude; // how to see error object thrown when it occurs.
    const long = result.results[0].longitude;
    return { lat, long };
}

async function getAirConditions(lat: number, long: number): Promise<AirConditions> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&current=apparent_temperature,wind_speed_10m&daily=uv_index_max,precipitation_probability_max`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`response status: ${response.status}`);
  const result = await response.json();
  const { current: { apparent_temperature: realFeel, wind_speed_10m: wind }, daily: { uv_index_max, precipitation_probability_max } } = result; // how to type destructured vars
  const uv = uv_index_max[0];
  const chOfRain = precipitation_probability_max[0];
  return { realFeel, chOfRain, wind, uv };
}