import type { HourlyForecastProps } from "../../Types/WeatherTypes";
import { selectIcon } from "../../utils/selectIcon";

function HourlyForecast( { hour, condition, temp, border }: HourlyForecastProps ) {
  return (
    <>
      <div className={`flex flex-col items-center px-5 border-gray-400 ${border}`}>
        <div className='text-gray-400'>{(hour > 12) ? hour % 12 : hour}:00 {hour > 11 ? 'PM' : 'AM'}</div>
        <img src={selectIcon(condition)} height={50} width={50}/>
        <div>{temp}°</div>
      </div>
    </>
  );
} export default HourlyForecast;