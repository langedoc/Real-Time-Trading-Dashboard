"use client";
import { useState, useEffect } from "react";
import { useCrypto } from "@/app/context/CryptoContext";
import useWebSocketPC from "@/app/context/useWebSocketPC";
import Chart from "@/app/components/dashboard/PriceChart/Chart";

export default function PriceChart() {
    const { selectedPair, currency } = useCrypto();
    const [ ohlcvData, setOhlcvData ] = useState([]);
    const { ohlcvData: wsOhlcvData } = useWebSocketPC(selectedPair); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/binance?symbol=${selectedPair}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setOhlcvData(data); 
            } catch(error) {
                console.error("Data fetching error:", error);
                setOhlcvData([]);
            }
        };

        fetchData();
    }, [ selectedPair ]);

    useEffect(() => {
        if(wsOhlcvData) {
            setOhlcvData(prevData => [...prevData, wsOhlcvData]);
        }
    }, [selectedPair]);

    return (
        <div className="">
            <h2>Price Chart - {currency}/USDT</h2>
            <div>
                {ohlcvData.length > 0 ? <Chart key={selectedPair} ohlcvData={ohlcvData} /> : (
                <p>Getting data...</p>
            )}
            </div>

        </div>
    );
};