interface AirConditionsProps {
  feelsLike: number;
  wind: number;
  rainChance: number;
  uv: number;
}
function AirConditions({ feelsLike, wind, rainChance, uv}: AirConditionsProps) {
  return (
    <div className=' bg-gray-600 rounded-2xl grid grid-rows-2 grid-cols-2 border border-red-400 row-start-11 row-span-4 col-span-2'>
      <div>{feelsLike}</div>
      <div>{wind}</div>
      <div>{rainChance}</div>
      <div>{uv}</div>
    </div>
  );
} export default AirConditions;