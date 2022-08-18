import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Features/IcreamSlice";
import Retail from "./Features/RetailSlice";
import people   from "./Features/PeopleSclice";
const store = configureStore({
    reducer:{
        icecream:Reducer,
        Retail:Retail,
        people:people,
    }
})
export default store;