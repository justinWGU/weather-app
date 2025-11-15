import type { CitySearchBoxProps } from "../../Types/WeatherTypes";

function CitySearchBox({ handleSubmit, inputRef }: CitySearchBoxProps) {
  return (
    <div className='rounded-2xl p-3 m-5 bg-gray-800'>
      <form onSubmit={ (e) => handleSubmit(e) }> {/* TODO: How to fit full width input box & label */}
        <input ref={inputRef} className='w-full' placeholder='Search for cities' name='city-name'/>
     </form>
    </div>
  );
} export default CitySearchBox;