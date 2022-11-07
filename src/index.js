import React from "react-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Data from "./apiData";
import Fallback from "./Fallback";
import { ErrorBoundary } from "react-error-boundary";
import Repo from "./Components/Repo";
import ViewRep from "./Components/ViewRep";
import Description from "./Components/Description";

function App() {
  const errorHandler = (error, errorinfo) => {
    console.log(error, errorinfo);
  };
  return (
    <Provider store={Store}>
      <div>
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Data/>}/>
            <Route path="/repo" element={<Repo/>}/>
            <Route path="/view" element={<ViewRep/>}/>
            <Route path="/*" element={<Description/>}></Route>
            
          </Routes>
        </BrowserRouter>
       
        </ErrorBoundary>
      </div>
    </Provider>
  );
}
React.render(<App />, document.getElementById("root"));
export default App;
