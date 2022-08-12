import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  countriesSelector,
  globalDataSelector,
  selectCountryData,
} from "../redux/coviddata/covidDataSlice";

function CountryData() {
  const dispatch = useDispatch();
  const countries = useSelector(countriesSelector);
  const countryData = useSelector(globalDataSelector);
  const [selectedCountry, setSelectedCountry] = useState("Global");

  useEffect(() => {
    dispatch(selectCountryData(selectedCountry));
  }, [dispatch, selectedCountry]);

  const chartData = countryData.map((item) => ({
    name: item[0].split(/(?=[A-Z])/).join(" "),
    value: item[1],
  }));
  const barColors = ["#576bfe", "#fa7077", "#6efa70", "#f3e678"];

  return (
    <div className="country-data-container">
      <select
        name="countries"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {countries?.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <ResponsiveContainer width={"90%"} height={500} min-width={300}>
        <BarChart width={400} height={500} data={chartData}>
          <Bar dataKey="value">
            {chartData.map((item, index) => (
              <Cell
                key={`cell-${index}`}
                fill={barColors[index]}
                textAlign="center"
              />
            ))}
          </Bar>
          <XAxis
            label={{ textAlign: "center" }}
            dataKey="name"
            fontSize={16}
            tickLine={false}
          />
          <YAxis
            dataKey="value"
            type="number"
            domain={[0, Math.max([...chartData.map((item) => item.value)])]}
            interval="preserveStartEnd"
            tickCount={10}
            width={70}
            fontSize={14}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgb(229,229,229,0.3)" }}
            wrapperStyle={{
              width: 150,
              backgroundColor: "#ccc",
              border: "none",
            }}
          />
          <CartesianGrid strokeWidth={0.5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CountryData;
