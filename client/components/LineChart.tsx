import { Line } from "react-chartjs-2";
import registerCharts from "@/utils/ChartRegister";

registerCharts();

interface LineChartData {
    labels: string[];
    dataPoints: number[];
}

interface LineChartObject {
    data: LineChartData;
}

export default function LineChart({ data }: LineChartObject) {

    const { labels, dataPoints } = data;

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Line Chart',
            data: dataPoints,
            backgroundColor: '#89cff0',
            borderColor: '#89cff0',
        }]
    };

    return <Line data={chartData}></Line>
}
