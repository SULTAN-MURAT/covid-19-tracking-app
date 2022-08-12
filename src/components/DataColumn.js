import React from "react";
import CountUp from "react-countup";
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");

function DataColumn(props) {
  const colors = { backGroundColor: "", borderColor: "" };
  switch (props[0]) {
    case "TotalConfirmed":
      colors.backGroundColor = "#b1d7fe";
      colors.borderColor = "#576bfe";
      break;
    case "TotalDeaths":
      colors.backGroundColor = "#f4d7d7";
      colors.borderColor = "#fa7077";
      break;
    case "NewConfirmed":
      colors.backGroundColor = "#ddf6e2";
      colors.borderColor = "#6efa70";
      break;
    case "NewDeaths":
      colors.backGroundColor = "#f5e1ca";
      colors.borderColor = "#f3e678";
      break;
    default:
  }
  return (
    <div
      className="data-column"
      style={{
        backgroundColor: colors.backGroundColor,
        borderBottom: "10px solid",
        borderBlockColor: colors.borderColor,
      }}
    >
      <p>
        Number of<strong>{` ${props[0].split(/(?=[A-Z])/).join(" ")} `}</strong>
        Cases of Covid-19
      </p>
      <p>Number of Cases:</p>
      <p>
        <strong>
          <CountUp
            start={0}
            end={props[1]}
            duration={1.5}
            separator="."
            decimal=","
          />
        </strong>
      </p>
      <p>Last Updated At:</p>
      <p>
        <strong>{` ${moment(props.date).format(
          "DD MMMM YYYY, hh:mm"
        )}`}</strong>
      </p>
      <p>{props.country}</p>
    </div>
  );
}

export default DataColumn;
