import { 
  Children, 
  createContext, 
  ReactNode, 
  useContext, 
  useState 
} from "react";

import options from "../options";
import URLS from "../URLS";

interface ResultsContext {
  fetchResults: (path: string) => void,
  results: {} | null,
  searchingValue: string,
  setSearchingValue: (searchingValue: string) => void,
  loading: boolean,
}

type Props = {
  children: typeof Children | ReactNode,
}

const RequestResultsContext = createContext<ResultsContext | null>(null);

function RequestResultsContextProvider(props: Props) {
  const [results, setResults] = useState<{} | null>(null);
  const [searchingValue, setSearchingValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchResults = async (path: string) => {
    try {
      setLoading(true);

      const response = await fetch(`${ URLS.GOOGLE_SEARCH }${ path }/q=${ encodeURIComponent(searchingValue) }`, options);
      const json = await response.json();

      setResults(json);

      setLoading(false);
    } catch(error) {
      console.log(error);
    }
  } 

  return (
    <RequestResultsContext.Provider value={{ fetchResults, results, searchingValue, setSearchingValue, loading }}>
      <>
      { props.children }
      </>
    </RequestResultsContext.Provider>
  )
}

export default RequestResultsContextProvider;

export const useResultContext = () => useContext(RequestResultsContext);
