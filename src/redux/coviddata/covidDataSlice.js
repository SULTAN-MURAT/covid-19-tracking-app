import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  initialData: [],
  globalData: [],
  countries: [],
  date: "",
  countryData: [],
  selectedCountry: "Global",
  status: "idle",
  error: null,
};

export const fetchCovidDataAsync = createAsyncThunk(
  "fetchCovidDataAsync",
  async (endPoint) => {
    const response = await axios(`https://api.covid19api.com/${endPoint}`);
    console.log(response.data);
    return response.data;
  }
);

export const covidDataSlice = createSlice({
  name: "covidData",
  initialState,
  reducers: {
    selectCountryData: (state, action) => {
      const country = action.payload;
      if (country !== "Global") {
        state.selectedCountry = state.countries.find(
          (item) => item.toLowerCase() === country.toLowerCase()
        );
        const selected = state.countryData.find(
          (item) => item.Country.toLowerCase() === country.toLowerCase()
        );
        state.globalData = Object.entries(selected)
          .filter(
            (item) => item[0] !== "Premium" && typeof item[1] !== "string"
          )
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4);
      } else {
        state.selectedCountry = "Global";
        state.globalData = state.initialData;
      }
    },
  },
  extraReducers: {
    [fetchCovidDataAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCovidDataAsync.fulfilled]: (state, action) => {
      const { Date, Global, Countries } = action.payload;
      state.initialData = Object.entries(Global)
        .filter((item) => Number(item[1]) && item[1] !== 0)
        .sort((a, b) => b[1] - a[1]);
      state.globalData = Object.entries(Global)
        .filter((item) => Number(item[1]) && item[1] !== 0)
        .sort((a, b) => b[1] - a[1]);
      state.date = Date;
      state.countryData = Countries;
      state.countries = ["Global"].concat(
        Countries.map((item) => {
          const { Country } = item;
          return Country;
        })
      );
      state.status = "succeeded";
    },
    [fetchCovidDataAsync.rejected]: (state, action) => {
      state.isLoading = "failed";
      state.error = action.error.message;
    },
  },
});

export const { selectCountryData } = covidDataSlice.actions;

export const globalDataSelector = (state) => state.covidData.globalData;

export const errorSelector = (state) => state.covidData.error;
export const dateSelector = (state) => state.covidData.date;
export const countrySelector = (state) => state.covidData.selectedCountry;

export const countriesSelector = (state) => state.covidData.countries;

export default covidDataSlice.reducer;
