import React from "react-dom";
import {Provider} from "react-redux";
import Store from "./Store";
import Counter from "./Counter";
import People from "./People";
import Fallback from "./Fallback";
import { ErrorBoundary } from "react-error-boundary";


function App() {
 const errorHandler = (error,errorinfo)=>{
   console.log(error,errorinfo);
 }
  return (
    <Provider store={Store}>
    
<div>
<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
  <Counter/>
  <People/>
   </ErrorBoundary>
 
</div>
    </Provider>
  
  )
}
React.render(<App/>,document.getElementById("root"))
export default App