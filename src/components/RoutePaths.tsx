import { Navigate, Route, Routes } from "react-router-dom";
import Results from "./Results";

function RoutePaths() {
  return (
    <div className="min-h-[57vh] max-w-full">
      <Routes>
        <Route path="*" element={ 
          <Navigate to="/search" replace={ true }/>
         }/>
         <Route path="/" element={ 
          <Navigate to="/search" replace={ true }/>
         }/>
        <Route path="/">
          <Route path="search" element={ 
            <Results />
          }/>
          <Route path="news" element={ 
            <Results />
          }/>
          <Route path="image" element={ 
            <Results />
          }/>
          <Route path="video" element={ 
            <Results />
          }/>
        </Route>
      </Routes>
    </div>
  )
}

export default RoutePaths;
