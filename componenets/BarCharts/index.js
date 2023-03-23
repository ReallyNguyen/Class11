import { useState, useEffect } from "react"
import styles from './BarChart.module.css'

import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Sales $',
                    data: [13253, 15435, 19283, 14163, 24124, 16924, 25253],
                    borderColor: 'rgb(20,20,20)',
                    backgroundColor: 'rgba(0,0,0,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    positioon: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return (
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}