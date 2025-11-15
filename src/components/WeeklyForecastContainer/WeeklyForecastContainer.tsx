import type { WeeklyForecastContainerProps } from "../../Types/WeatherTypes";
import ForecastDay from "../ForecastDay/ForecastDay";

function WeeklyForecastContainer( { daysOfWeek, conditions, maxTemps, minTemps }: WeeklyForecastContainerProps ) {
  const arr = [];
  for (let i = 0; i < 7; i++) {
    arr.push(<ForecastDay dayOfWeek={ daysOfWeek[i] } condition={ conditions[i] } maxTemp={ maxTemps[i] } minTemp={ minTemps[i] } />)
  }
  return (
  <div className='flex flex-col self-end grow bg-gray-800 rounded-2xl m-5'>
    <div className='px-5 pt-5'>7-Day Forecast</div>
    <div className='grid grid-rows-7'>{arr}</div>
  </div>      
);
} export default WeeklyForecastContainer;