import type { HourlyForecastContainerProps } from "../../Types/WeatherTypes";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

function HourlyForecastContainer( { hours, conditions, temps }: HourlyForecastContainerProps ) {
  const arr = [];
  for (let i = 5; i < 21; i += 3) {
    arr.push(<HourlyForecast hour={hours[i]} condition={conditions[i]} temp={temps[i]} border={i < 20 ? 'border-r' : ''} />);
  }
  return (
    <div className='m-5 p-5 bg-gray-800 rounded-2xl'>
      <div className='text-gray-400 pl-5'>Today's Forecast</div>
      <div className='flex p-5'>{arr}</div>
    </div>
  );
} export default HourlyForecastContainer;