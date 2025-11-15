import { useEffect, useState } from "react";
import type { WeatherData } from "../Types/WeatherTypes";
import { weatherService } from "../services/weatherService";

export interface UseWeatherData {
  error: boolean;
  loading: boolean;
  data: WeatherData | null;
}

export function useWeather( city: string ): UseWeatherData {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect( () => {
    async function getData() {
      setLoading(true);
      try {
        const data = await weatherService(city);
        setLoading(false);
        setData(data);
      }
      catch (err) {
        setLoading(false);
        setError(true);
        console.error(err);
      }    
    }
    getData();
  }, [city]);

  return { error, loading, data };
}

    // const id = setInterval( async () => {
    //   console.log('Getting data...');
    //   let attempts = 0;
    //   console.log('Attemps: ', attempts);
    //   try {
    //     const data = await weatherService(city);
    //     setLoading(false);
    //     setData(data);
    //   } 
    //   catch(err) {
    //     if (attempts++ > 3) setError(true); 
    //     console.error(err)
    //   }
    //   return;
    // }, 2000);
    // return () => clearInterval(id);