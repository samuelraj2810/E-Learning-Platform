import React from 'react'
import { Chart } from 'primereact/chart';

const CustomDonut = ({
    type = "doughnut",
    labels,
    data,
    legendDisplay = false, 
    className,
}) => {
    const chartData = {
        labels:labels,
        datasets: [
            {
                data: data,
                backgroundColor: ["#ede9fe","#4338ca","#6d28d9"],
                hoverBackgroundColor: ["#ede9fe","#4f46e5","#7c3aed"],
            }
        ]
    };
    const options = {
        cutout: '60%',
        plugins: {
            legend: {
                display: legendDisplay,
            },
        }
    };
  return (
    <div className={`shadow rounded-md border h-full w-full`}>
    <Chart type={type} data={chartData} options={options} className={className}/>     
    </div>
  )
}

export default CustomDonut