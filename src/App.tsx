import { useState } from "react";
import RequestResultsContextProvider from "./assets/contexts/RequestResultsContextProvider";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Results from "./components/Results";
import RoutePaths from "./components/RoutePaths";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  return (
    <RequestResultsContextProvider>
      <div className={ darkTheme ? 'dark' : '' }>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
          <Header darkTheme={ darkTheme } setDarkTheme={ setDarkTheme } />
          <RoutePaths />
          <Footer />
        </div>
      </div>
    </RequestResultsContextProvider>
  )
}

export default App;
