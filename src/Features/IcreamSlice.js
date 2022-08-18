import { createSlice } from "@reduxjs/toolkit";
// const initialstate = {
//     noOfIcecreams : 10,
// }
const icecreamSlice = createSlice({
    name:"icecream",
    initialState :{
        no : 10,
        name:"sravan"
    },
    reducers:{
        ordered: (state)=>{
            state.no--;
        },
        restock:(state,payload)=>{
            state.no+=payload.payload
        }
        
      
    }
})
export default icecreamSlice.reducer;
export const {ordered,restock}= icecreamSlice.actions;
