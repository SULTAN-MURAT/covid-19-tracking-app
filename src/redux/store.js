import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./coviddata/covidDataSlice";

export const store = configureStore({
  reducer: {
    covidData: covidReducer,
  },
});
