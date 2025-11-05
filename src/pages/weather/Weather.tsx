import CitySearchBox from "../../components/CitySearchBox/CitySearchBox";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import { useState } from "react";
import HourlyForecastContainer from "../../components/HourlyForecastContainer/HourlyForecastContainer";
import WeeklyForecastContainer from "../../components/WeeklyForecastContainer/WeeklyForecastContainer";
import { useWeather } from "../../hooks/useWeather";
import AirConditions from "../../components/CurrentConditions/AirConditions";

function Weather() {
  const [city, setCity] = useState('Los Angeles');
  const { data, loading, error } = useWeather(city);

  if (error) return <div>There's been an error</div>; // <Error />
  else if (loading) return <div>Loading Weather</div>;
  else if (data) {
    const { currentWeatherData, hourlyForecastData, weeklyForecastData } = data;
    return (
      <div className='grid grid-cols-3 grid-rows-20 gap-4 p-4 border border-red-400 h-full bg-gray-900 text-white'>
        <CitySearchBox setCity={ setCity } />
        <CurrentWeather temp={ currentWeatherData.temp } city={ currentWeatherData.city } condition={ currentWeatherData.condition } />
        <HourlyForecastContainer hours={ hourlyForecastData.hours } conditions={ hourlyForecastData.conditions } temps={ hourlyForecastData.temps } />
        <AirConditions feelsLike={60} wind={10} rainChance={5} uv={5} />
        <WeeklyForecastContainer daysOfWeek={ weeklyForecastData.daysOfWeek } conditions={ weeklyForecastData.conditions } maxTemps={ weeklyForecastData.maxTemps } minTemps={ weeklyForecastData.minTemps } />
      </div>
    );
  }
} export default Weather;