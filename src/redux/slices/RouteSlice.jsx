import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fromto: [
    { id: 1, place: "coimbatore" },
    { id: 2, place: "madurai" },
    { id: 3, place: "trichy" },
    { id: 4, place: "vellore" },
    { id: 5, place: "erode" },
    { id: 6, place: "salem" },
    { id: 7, place: "chennai" },
    { id: 8, place: "bangalore" },
    { id: 9, place: "trivandrum" },
    { id: 10, place: "pondicherry" },

  ],
  from:"",
  to:"",
};
export const RouteSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    FromValue:(state,action)=>{
      state.from =action.payload
    },
    ToValue:(state,action)=>{
      state.to =action.payload
    }
  },
});

export default RouteSlice.reducer;
export const {FromValue, ToValue,sourceFilter} = RouteSlice.actions;
export const places = (state) => state.route.fromto;
export const from = (state) => state.route.from;
export const to = (state) => state.route.to;
