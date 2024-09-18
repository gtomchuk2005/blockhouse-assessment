"use client";
import { useEffect, useState } from "react";
import CandlestickChart from "@/components/CandlestickChart";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";

interface dataObject {
    labels: string[];
    dataPoints: number[];
}

interface candlestickObject {
    dataPoints: [];
}

export default function Dashboard() {

    const [candlestickData, setCandlestickData] = useState<candlestickObject>({
        dataPoints: []
    });

    const [barChartData, setBarChartData] = useState<dataObject>({
        labels: [],
        dataPoints: []
    });

    const [lineChartData, setLineChartData] = useState<dataObject>({
        labels: [],
        dataPoints: []
    });

    const [pieChartData, setPieChartData] = useState<dataObject>({
        labels: [],
        dataPoints: []
    });

    useEffect(() => {
        const fetchCandlestickData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/candlestick-data/');
                const data = await response.json();
                setCandlestickData(data);
            }
            catch {
                console.log("Error retrieving candlestick data");
            }
        };

        const fetchLineChartData = async() => {
            try {
                const response = await fetch('http://localhost:8000/api/line-chart-data/');
                const data = await response.json();
                setLineChartData(data);
            }
            catch {
                console.log("Error retrieving line chart data");
            }
        };

        const fetchBarChartData = async() => {
            try {
                const response = await fetch('http://localhost:8000/api/bar-chart-data/');
                const data = await response.json();
                setBarChartData(data);
            }
            catch {
                console.log("Error retrieving bar chart data");
            }
        };

        const fetchPieChartData = async() => {
            try {
                const response = await fetch('http://localhost:8000/api/pie-chart-data/');
                const data = await response.json();
                setPieChartData(data);
            }
            catch {
                console.log("Error retrieving pie chart data");
            }
        };

        fetchCandlestickData();
        fetchLineChartData();
        fetchBarChartData();
        fetchPieChartData();

    }, [])

    return (
        <div className="w-full h-full bg-gray-300 min-h-screen">
            <div className="grid grid-cols-2 place-items-center pt-10 gap-4">
                <div className="w-[70%] flex justify-center items-center">
                    <CandlestickChart data={candlestickData}></CandlestickChart>
                </div>
                <div className="w-[70%] flex justify-center items-center">
                    <LineChart data={lineChartData}></LineChart>
                </div>
                <div className="w-[70%] flex justify-center items-center">
                    <BarChart data={barChartData}></BarChart>
                </div>
                <div className="w-[50%] flex justify-center items-center">
                    <PieChart data={pieChartData}></PieChart>
                </div>
            </div>
        </div>
    );
}
