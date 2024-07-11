import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataById = createAsyncThunk(
  "get/getDataById",
  async (id, thunkAPI) => {
    return axios
      .get(`https://my-json-server.typicode.com/thamaraiselvi2109/busdataapi/Buses/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);

const initialState = {
  singleBus: [],
  busStatus:'idle',
  error:null
};

export const SingleBusSlice = createSlice({
  name: "singlebus",
  initialState,
  extraReducers(builder) {
    builder
    .addCase(getDataById.pending, (state) => {
        state.busStatus = 'loading';
      })
      .addCase(getDataById.fulfilled, (state, action) => {
        state.busStatus = 'succeeded';
        state.singleBus = action.payload;
      })
      .addCase(getDataById.rejected, (state,action) => {
        state.busStatus = 'failed';
        state.error=action.error.message
      })
  },
});

export default SingleBusSlice.reducer;
export const singleBus = (state) => state.singleBus.singleBus;
export const busStatus = (state) => state.singleBus.busStatus;
