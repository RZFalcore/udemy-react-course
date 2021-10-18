import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map(({ value, maxValue, label }) => (
        <ChartBar id={label} value={value} maxValue={maxValue} label={label} />
      ))}
    </div>
  );
};

export default Chart;
