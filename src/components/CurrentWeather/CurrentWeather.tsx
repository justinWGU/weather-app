import type { CurrentWeatherProps } from "../../Types/WeatherTypes";
import { selectIcon } from "../../utils/selectIcon.ts";

function CurrentWeather( { temp, city, condition }: CurrentWeatherProps) {
  
  return (
    <>
    <div className='m-5 rounded-2xl p-[25px] flex items-center justify-between'>
      <div className='text-4xl ml-5 flex flex-col'>
        <div className='my-5'>{city}</div>
        <div className='my-5'>{temp}°</div>
      </div>
      <img className='mr-25' src={selectIcon(condition)} alt={selectIcon(condition)} height={150} width={150}/>
    </div>
    </>
  );
} export default CurrentWeather; 