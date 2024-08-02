import React from 'react'
import { ReactChart } from 'chartjs-react';
import { 
    Chart,
    BarController,
    LinearScale,
    BarElement,
    TimeScale,
    Tooltip, 
    CategoryScale,
    PieController,
    ArcElement
} from 'chart.js';
import { pieData } from '@/utils/data';

const DashboardPie = () => {
    ReactChart.register(BarController, LinearScale, BarElement, TimeScale, Tooltip, CategoryScale, PieController, ArcElement);

    const chartData = {
        labels: pieData.map((data) => data.title),
        datasets: [
            {
                label: "No of Patient",
                data: pieData.map((data) => data.count),
                backgroundColor: [
                    "#2bc14c",
                    "#d29e17",
                    "#c12b61"
                ],
                borderWidth: 0,
            }
        ]
    }

    const chartOptions = {
    }
  return (
    <>
        <ReactChart
            id="pie"
            type="pie"
            data={chartData}
            height={50}
            options={chartOptions}
        />
    </>
  )
}

export default DashboardPie