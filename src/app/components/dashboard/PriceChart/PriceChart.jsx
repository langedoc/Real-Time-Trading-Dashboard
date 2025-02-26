"use client";
import { useState, useEffect } from "react";
import { useCrypto } from "@/app/context/CryptoContext";

export default function PriceChart() {
    const { selectedPair } = useCrypto();
    const [ ohlcvData, setOhlcvData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/binance?symbol=${selectedPair}`);
                const data = await res.json();
                setOhlcvData(data); 
            } catch(error) {
                console.error("Data fetching error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {ohlcvData.length > 0 && (
                <ul>
                    {ohlcvData.map((candle, index) => (
                        <li key={index}>
                            Time: {new Date(candle.time).toLocaleString()}, 
                            Open: {candle.open}, 
                            High: {candle.hight}, 
                            Low: {candle.low}, 
                            Close: {candle.close}, 
                            Volume: {candle.volume}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};