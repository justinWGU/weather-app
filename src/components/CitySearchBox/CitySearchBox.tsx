import { useRef } from "react";
import type { CitySearchBoxProps } from "../../Types/WeatherTypes";


function CitySearchBox({ setCity }: CitySearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const city = formData.get('city-name') as string;
    setCity(city);
    if (inputRef.current) inputRef.current.value = '';
  }
  return (
    <div className='border border-red-400 rounded-2xl p-3 col-start-1 col-span-2 row-span-2 bg-gray-600'>
      <form onSubmit={ (e) => handleSubmit(e) }> {/* TODO: How to fit full width input box & label */}
        <input ref={inputRef} className='w-full' placeholder='Search for cities' name='city-name'/>
     </form>
    </div>
  );
} export default CitySearchBox;