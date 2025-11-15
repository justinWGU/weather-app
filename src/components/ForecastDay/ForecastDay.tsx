import type { ForecastDayProps } from "../../Types/WeatherTypes";
import { selectIcon } from "../../utils/selectIcon";

function ForecastDay( { dayOfWeek, condition, maxTemp, minTemp }: ForecastDayProps ) {
  return (
    <>
      <div className='p-5 flex gap-x-3 items-center'>
        <div>{dayOfWeek}</div>
        <img src={selectIcon(condition)} alt={selectIcon(condition)} height={50} width={50}/>
        <div>{maxTemp}/{minTemp}</div>
      </div>
    </>
  );
} export default ForecastDay;