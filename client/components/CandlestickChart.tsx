import { Chart } from "react-chartjs-2";
import "chartjs-chart-financial";
import registerCharts from "@/utils/ChartRegister";
import 'chartjs-adapter-date-fns';

registerCharts();

interface CandlestickDataPoint {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

interface CandlestickObject {
    data: {
        dataPoints: CandlestickDataPoint[];
    };
}

export default function CandlestickChart({ data }: CandlestickObject) {

    const labels = data.dataPoints.map(data => data.x);
    const candlestickData = data.dataPoints.map(data => ({x:new Date(data.x), o:data.open, h: data.high, l:data.low, c:data.close}));

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Candlestick Chart',
            data: candlestickData,
            backgroundColor: '#39ff14',
            borderColor: '#39ff14',
            barThickness: 80
        }]
    };

    return <Chart type="candlestick" data={chartData}></Chart>
}
