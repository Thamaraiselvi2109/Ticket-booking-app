import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getDatas = createAsyncThunk("get/getDatas", async (thunkAPI) => {
  return axios
    .get(
      `https://my-json-server.typicode.com/thamaraiselvi2109/busdataapi/Buses`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return console.log(err);
    });
});


const initialState = {
  data: [],
  FilteredArray: [],
  loading: 'idle',
  error:null
};
export const BusdataSlice = createSlice({
  name: "buses",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getDatas.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(getDatas.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
        state.FilteredArray = action.payload;
      })
      .addCase(getDatas.rejected, (state,action) => {
        state.loading = 'failed';
        state.error=action.error.message
      })
  },
  reducers: {
    FilterFunction: (state, action) => {
      const { source, destination } = action.payload;
      state.FilteredArray = state.data.filter(
        (f) =>
          f.source.toLowerCase().includes(source) &&
          f.destination.toLowerCase().includes(destination)
      );
    },
  },
});

export default BusdataSlice.reducer;
export const datas = (state) => state.buses.data;
export const loadings = (state) => state.buses.loading;
export const errors = (state) => state.buses.error;
export const detail = (state) => state.buses.detail;
export const { filter, FilterFunction } = BusdataSlice.actions;
export const BusesArray = (state) => state.buses.FilteredArray;
