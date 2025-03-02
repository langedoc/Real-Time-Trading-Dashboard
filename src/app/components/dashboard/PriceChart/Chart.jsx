"use client";
import { useEffect, useRef } from "react";
import { CandlestickSeries, createChart } from 'lightweight-charts';

export default function Chart({ ohlcvData }) {
    const chartContainerRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        };
        const chartOptions = {
            layout: {textColor: 'white',
            background: {type: 'solid', color: 'oklch(0.129 0.042 264.695)'}},
            width: chartContainerRef.current.clientWidth,
            height: 300
        };
        const chart = createChart(chartContainerRef.current, chartOptions);
        chart.timeScale().fitContent();

        //Validate & sort ohlcvData
        const validOhlcvData = ohlcvData.sort((a, b) => a.time - b.time) // Sort by time in ascending order
        .filter((item, index, self) => 
            index === self.findIndex((t) => (
                t.time === item.time
            ))
        ); // Remove duplicates based on time
        
        const candleStickSeries = chart.addSeries(CandlestickSeries, { upColor: '#05df72', downColor: '#ff2056', borderVisible: false, wickUpColor: '#05df72', wickDownColor: '#ff2056'});
        candleStickSeries.setData(validOhlcvData);
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };

    }, [ ohlcvData ]);

    return (
        <div ref={chartContainerRef}></div>
    );
};
