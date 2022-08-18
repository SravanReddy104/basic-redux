import { createSlice } from "@reduxjs/toolkit";
// const initialstate = {
//     noOfIcecreams : 10,
// }
const RetailSlice = createSlice({
    name:"Retail",
    initialState :{
        items : 100,
        name:"sravan"
    },
    reducers:{
        selled: (state)=>{
            state.items--;
        },
        added:(state,payload)=>{
            state.items+=payload.payload
        }
        
      
    }
})
export default RetailSlice.reducer;
export const {selled,added}= RetailSlice.actions;