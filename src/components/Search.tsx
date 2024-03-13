import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../assets/contexts/RequestResultsContextProvider";

function Search() {
  const [text, setText] = useState<string>('');
  const [debouncedText] = useDebounce(text, 500);
  const context = useResultContext();

  // const searchingValue = context?.searchingValue;
  const setSearchingValue = context?.setSearchingValue;

  useEffect(() => {
    if (setSearchingValue) {
      setSearchingValue(debouncedText);
    }
  }, [debouncedText]);

  return (
    <form className="-mt-10 sm:w-96 w-48">
      <input 
        type="search"
        value={ text }
        onChange={ (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value) } 
        className="w-full h-12 pl-6 pr-3 dark:text-gray-800 bg-gray-100 rounded-full dark:border-0 border border-gray-300"
      />
    </form>
  )
}

export default Search;
