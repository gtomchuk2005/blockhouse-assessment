import { Pie } from "react-chartjs-2";
import registerCharts from "@/utils/ChartRegister";

registerCharts();

interface PieChartData {
    labels: string[];
    dataPoints: number[];
}

interface PieChartObject {
    data: PieChartData;
}

export default function PieChart({ data }: PieChartObject) {

    const { labels, dataPoints } = data;

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Line Chart',
            data: dataPoints,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
    };

    return <Pie data={chartData}></Pie>
}
