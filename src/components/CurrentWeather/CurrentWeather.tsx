import type { CurrentWeatherProps } from "../../Types/WeatherTypes";

function CurrentWeather( { temp, city, condition }: CurrentWeatherProps) {
  return (
    <div className=' bg-gray-600 rounded-2xl border border-red-400 col-span-2 row-start-3 row-span-4 grid grid-rows-2 grid-col-3'>
      <div className='col-start-1'>{city}</div>
      <div className='col-start-2'>{temp}</div>
      <div className='row-span-2'>{condition}</div>
    </div>
  );
} export default CurrentWeather; 