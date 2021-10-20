import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
    const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
    const dataMaxValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar
          key={label}
          value={value}
          maxValue={dataMaxValue}
          label={label}
        />
      ))}
    </div>
  );
};

export default Chart;
