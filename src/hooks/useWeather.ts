import { useEffect, useState } from "react";

export function useWeather( city: string ) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState/*<WeatherData | null>*/(null);

  // weatherService()
  useEffect( () => {
    try {
      // const data = weatherService(city);
    } 
    catch(err) {
      console.error(err)
    }
  }, []);

  // return { data, loading, error }
}