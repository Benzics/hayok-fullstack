import { pregnancyMonthData } from '@/utils/data'
import React from 'react'
import { ReactChart } from 'chartjs-react';
import { 
    Chart,
    BarController,
    LinearScale,
    BarElement,
    TimeScale,
    Tooltip, 
    CategoryScale
} from 'chart.js';


const PregnancyChart = () => {

    ReactChart.register(BarController, LinearScale, BarElement, TimeScale, Tooltip, CategoryScale);

    const chartData = {
        labels: pregnancyMonthData.map((data) => data.month),
        datasets: [
            {
                label: "No of Patient",
                data: pregnancyMonthData.map((data) => data.count),
                backgroundColor: [
                    "#5d657e",
                ]
            }
        ]
    }

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

  return (
    <>
        <ReactChart
            id="pregMonth"
            type="bar"
            data={chartData}
            options={chartOptions}
        />
    </>
  )
}

export default PregnancyChart