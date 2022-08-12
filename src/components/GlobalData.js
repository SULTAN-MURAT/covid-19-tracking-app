import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countrySelector,
  dateSelector,
  errorSelector,
  fetchCovidDataAsync,
  globalDataSelector,
} from "../redux/coviddata/covidDataSlice";
import DataColumn from "./DataColumn";

function GlobalData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidDataAsync("summary"));
  }, [dispatch]);

  const error = useSelector(errorSelector);
  const date = useSelector(dateSelector);
  const country = useSelector(countrySelector);
  const globalData = useSelector(globalDataSelector);

  if (error) return <div>{error}</div>;
  return (
    <div className="data-container">
      {globalData.map((item) => (
        <DataColumn
          key={Math.random() * 10000}
          {...item}
          date={date}
          country={country}
        />
      ))}
    </div>
  );
}

export default GlobalData;
