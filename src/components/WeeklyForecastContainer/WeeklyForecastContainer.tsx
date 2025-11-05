import type { WeeklyForecastContainerProps } from "../../Types/WeatherTypes";
import ForecastDay from "../ForecastDay/ForecastDay";

function WeeklyForecastContainer( { daysOfWeek, conditions, maxTemps, minTemps }: WeeklyForecastContainerProps ) {
  const arr = [];
  for (let i = 0; i < 7; i++) {
    arr.push(<ForecastDay dayOfWeek={ daysOfWeek[i] } condition={ conditions[i] } maxTemp={ maxTemps[i] } minTemp={ minTemps[i] } />)
  }
  return (
  <div className=' bg-gray-600 border rounded-2xl border-red-400 row-start-3 row-span-12'>
    <div>Weekly Forecast Container</div>
    <div className='h-full grid grid-rows-7 ali'>{arr}</div>
  </div>      
);
} export default WeeklyForecastContainer;