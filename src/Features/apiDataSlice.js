import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getPeople = createAsyncThunk('people/getPeople', async (username) => {
  console.log("in getp");
 
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);

  console.log("response"+ response.data.map((d)=>d.name));
  return response.data;
});

const initialState = {
  data: [],
  loading: false,
  status: "",
};
 const PeopleSlice = createSlice({
  name: "People",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPeople.pending, (state, action) => {
      state.loading = true;
      state.status = "Pending";
    });
    builder.addCase(getPeople.fulfilled, (state, action) => {
      state.data=action.payload;      state.loading = false;
      state.status = "Fullfilled";
    
    });
    builder.addCase(getPeople.rejected, (state, action) => {
      state.loading = "false";
      state.status = "Rejected";
    });
  },
});
export const {loading,status}= PeopleSlice.actions;
export default PeopleSlice.reducer;