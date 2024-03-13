import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../assets/contexts/RequestResultsContextProvider";

import All from "./pages/All";
import Images from "./pages/Images";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Loader from "./Loader";

function Results() {
  const locations = useLocation();
  const context = useResultContext();

  const path = locations.pathname;
  const results = context?.results;
  const loading = context?.loading;
  const searchingValue = context?.searchingValue;

  useEffect(() => {
    context?.fetchResults(path);
  }, [path, searchingValue]);

  if (loading) {
    return (
      <Loader />
    )
  }

  switch (path) {
    case '/search':
      return (
        <All results={ results } />
      )
    case '/news':
      return (
        <News results={ results } />
      )
    case '/image':
      return (
        <Images results={ results } />
      )
    case '/video':
      return (
        <Videos results={ results } />
      )
    default:
      return (
        <div>
          Unknown
        </div>  
      )
  }
}

export default Results;
