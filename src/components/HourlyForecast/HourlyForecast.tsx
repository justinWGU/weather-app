import type { HourlyForecastProps } from "../../Types/WeatherTypes";

function HourlyForecast( { hour, condition, temp }: HourlyForecastProps ) {
  return (
    <>
      <div className='flex-row'>
        <div>{hour}</div>
        <div>{condition}</div>
        <div>{temp}</div>
      </div>
    </>
  );
} export default HourlyForecast;