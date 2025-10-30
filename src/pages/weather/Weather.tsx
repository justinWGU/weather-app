import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";

function Weather(/*{ city }*/) {
  // const { data, loading, error } = useWeather( !city && 'Los Angeles'); // object to encapsulate ALL data
  return (
    <>
      <CurrentWeather /* { temp, city, condition } only CurrentWeather data*/ />
    </>
  );
} export default Weather;