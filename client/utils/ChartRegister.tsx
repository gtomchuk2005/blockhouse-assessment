import { Chart as ChartJS, registerables } from 'chart.js';
import { BarController, LineController, PieController } from 'chart.js';
import { CandlestickController, OhlcController, CandlestickElement, OhlcElement } from 'chartjs-chart-financial';
import { CategoryScale, LinearScale, TimeScale, Tooltip, Legend, ArcElement, BarElement, LineElement, PointElement } from 'chart.js';

export default function registerCharts() {
	ChartJS.register(
		...registerables,
		CategoryScale,
		LinearScale,
		TimeScale,
		BarController,
		LineController,
		PieController,
		CandlestickController,
		OhlcController,
		BarElement,
		LineElement,
		PointElement,
		ArcElement,
		CandlestickElement,
		OhlcElement,
		Tooltip,
		Legend
	);
};
