import type { HourlyForecastContainerProps } from "../../Types/WeatherTypes";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

function HourlyForecastContainer( { hours, conditions, temps }: HourlyForecastContainerProps ) {
  const arr = [];
  for (let i = 0; i < 7; i++) {
    arr.push(<HourlyForecast hour={hours[i]} condition={conditions[i]} temp={temps[i]}/>);
  }
  return (
    <div className='bg-gray-600 rounded-2xl border border-red-400 row-start-7 col-span-2 row-span-4'>
      <div>Today's Forecast</div>
      <div className='flex'>{arr}</div>
    </div>
  );
} export default HourlyForecastContainer;