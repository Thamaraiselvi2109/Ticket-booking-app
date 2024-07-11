import { configureStore } from "@reduxjs/toolkit";
import RouteSlice from "./slices/RouteSlice";
import  BusdataSlice from "./slices/BusDataSlice";
import  SingleBusSlice from "./slices/SingleBus";
import FeaturesSlice from "./slices/FeaturesSlice";

export const store = configureStore({
    reducer:{
        route:RouteSlice,
        buses:BusdataSlice,
        singleBus:SingleBusSlice,
        features:FeaturesSlice
    }
})