import { createSlice } from "@reduxjs/toolkit";
import Feature1 from "../../assets/EDGE_EFD.jpeg";
import Feature2 from "../../assets/EDGE_ERH.jpeg";
import Feature3 from "../../assets/feature.webp";
import Feature4 from "../../assets/offers.webp";
import Feature5 from "../../assets/ratings.webp";

const initialState = {
  featureimg: [
    { id: 1, image: Feature1 },
    { id: 2, image: Feature2 },
    { id: 3, image: Feature3 },
    { id: 4, image: Feature4 },
    { id: 5, image: Feature5 },
  ],
};

const FeaturesSlice = createSlice({
  name: "features",
  initialState
});

export default FeaturesSlice.reducer;
export const features = state=>state.features.featureimg
