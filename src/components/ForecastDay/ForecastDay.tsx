import type { ForecastDayProps } from "../../Types/WeatherTypes";

function ForecastDay( { dayOfWeek, condition, maxTemp, minTemp }: ForecastDayProps ) {
  return (
    <>
      <div>Forecast Day: {dayOfWeek}, {condition}, {maxTemp}, {minTemp}</div>
    </>
  );
} export default ForecastDay;