import { configureStore } from "@reduxjs/toolkit";

import people   from "./Features/apiDataSlice";
const store = configureStore({
    reducer:{
    
        people:people,
    }
})
export default store;