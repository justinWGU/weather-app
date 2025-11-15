interface AirConditionsProps {
  feelsLike: number;
  wind: number;
  rainChance: number;
  uv: number;
}
function AirConditions({ feelsLike, wind, rainChance, uv}: AirConditionsProps) {
  return (
    <div className='m-5 pl-5 py-7 bg-gray-800 rounded-2xl'>
      <div className='mb-2'>Air Conditions</div>
      <div className='pl-2 grid grid-cols-2 gap-x-2 gap-y-3'>
      <div>
        <div className='text-gray-400'>🌡️ Real Feel</div>
        <div className='text-2xl text-white'>{feelsLike}°</div>
      </div>
      <div>
        <div className='text-gray-400'>💨 Wind</div>
        <div className='text-2xl text-white'>{wind} mph</div>
      </div>
      <div>
        <div className='text-gray-400'>💧 Chance of rain</div>
        <div className='text-2xl text-white'>{rainChance}%</div>
      </div>
      <div>
        <div className='text-gray-400'>☼ UV Index</div>
        <div className='text-2xl text-white'>{uv}</div>
      </div>
    </div>
    </div>
  );
} export default AirConditions;