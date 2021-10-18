import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar id={label} value={value} maxValue={null} label={label} />
      ))}
    </div>
  );
};

export default Chart;
