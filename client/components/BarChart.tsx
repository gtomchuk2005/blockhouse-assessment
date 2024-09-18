import { Bar } from "react-chartjs-2";
import registerCharts from "@/utils/ChartRegister";

registerCharts();

interface barChartData {
    labels: string[];
    dataPoints: number[];
}

interface barChartObject {
    data: barChartData;
}

export default function BarChart({ data }: barChartObject) {

    const { labels, dataPoints } = data;

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Bar Chart',
            data: dataPoints,
            backgroundColor: '#000080',
            borderColor: '#000080',
        }]
    };

    return <Bar data={chartData}></Bar>
}
