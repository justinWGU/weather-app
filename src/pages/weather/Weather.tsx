import CitySearchBox from "../../components/CitySearchBox/CitySearchBox";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import { useState, useRef } from "react";
import HourlyForecastContainer from "../../components/HourlyForecastContainer/HourlyForecastContainer";
import WeeklyForecastContainer from "../../components/WeeklyForecastContainer/WeeklyForecastContainer";
import { useWeather } from "../../hooks/useWeather";
import AirConditions from "../../components/CurrentConditions/AirConditions";

function Weather() {
  const [city, setCity] = useState('Los Angeles');
  const { data, loading, error } = useWeather(city);
  const inputRef = useRef<HTMLInputElement>(null);
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const city = formData.get('city-name') as string;
    console.log('Settting city to ', city);
    setCity(city);
    if (inputRef.current) inputRef.current.value = '';
  }

  if (error) return <div>There's been an error</div>; // TODO: Add  <Error /> comp
  else if (loading) return <div>Loading Weather</div>; // TODO: Add <Loading /> comp
  else if (data) {
    const { currentWeatherData, hourlyForecastData, weeklyForecastData, airConditions } = data;
    return (
      <div className='flex border min-h-full bg-gray-900 text-white'>
        <div>
        <CitySearchBox handleSubmit={handleSubmit} inputRef={inputRef} />
        <CurrentWeather temp={ currentWeatherData.temp } city={ currentWeatherData.city } condition={ currentWeatherData.condition } />
        <HourlyForecastContainer hours={ hourlyForecastData.hours } conditions={ hourlyForecastData.conditions } temps={ hourlyForecastData.temps } />
        <AirConditions feelsLike={airConditions.realFeel} wind={airConditions.wind} rainChance={airConditions.chOfRain} uv={airConditions.uv} />
        </div>
        <WeeklyForecastContainer daysOfWeek={ weeklyForecastData.daysOfWeek } conditions={ weeklyForecastData.conditions } maxTemps={ weeklyForecastData.maxTemps } minTemps={ weeklyForecastData.minTemps } />
      </div>
    );
  }
} export default Weather;