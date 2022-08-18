


import { ordered,restock } from "./Features/IcreamSlice";
import {  selled,added} from "./Features/RetailSlice";
import { useDispatch,useSelector} from "react-redux";
import  "./counter.css";

function Counter() {


const dispatch = useDispatch();
const counter = useSelector((state)=>state.icecream)
const retail = useSelector((state)=>state.Retail)
  return (
    <div className="App">
        <p>{`the value is ${counter.no}`}</p>
        <p>{`thename is ${counter.name}`}</p>
        <button className="button" onClick={()=>dispatch(ordered())}>order icecream</button>
        <button className="button" onClick={()=>dispatch(restock(3))}>Restock icecream</button>
        <p>{`the Retail name is ${retail.name}`}</p> 
         <p>{`Retail items count: ${retail.items}`}</p>
        <button className="button" onClick={()=>dispatch(selled())}>order items</button>
        <button className="button" onClick={()=>dispatch(added(3))}>Restock items</button>
  
    </div>
  );
}
// }
// ReactDom.render(<App/>,document.getElementById("root"))

export default Counter;
