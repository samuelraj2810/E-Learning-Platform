import React from 'react'
import { Chart } from "react-google-charts";

const CustomDonut = ({
    title,
    chartType,
    data,
    pieSliceText='none',
    is3D,
    pieHole=0.4,
    legendToggle,
    className,
    colors,
    height = "200px",
    width = "fit",
}) => {
    const sliceColors = colors?.map((v,i) => ({offset: i, color: v}))
    const options = {
        pieHole: pieHole,
        is3D: is3D,
        pieSliceText:pieSliceText,
        slices: sliceColors,
        backgroundColor: 'transparent' ,
        chartArea: {
            left: 0,   // No margin on the left side
            top: 0,    // No margin on the top side
            right: 0,  // No margin on the right side
            bottom: 0  // No margin on the bottom side
        },
      };
  return (
    <div className={`shadow rounded-md border ${className}`}>
    <Chart
      chartType={chartType}
      data={data}
      height={height}
      width={width}
      options={options}
      legendToggle={legendToggle}
    />
    </div>
  )
}

export default CustomDonut