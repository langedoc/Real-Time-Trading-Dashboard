"use client";
import { useState, useEffect } from "react";
import { useCrypto } from "@/app/context/CryptoContext";
import Chart from "@/app/components/dashboard/PriceChart/Chart";

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
    }, [ selectedPair ]);

    return (
        <div>
            {ohlcvData.length > 0 && <Chart key={selectedPair} ohlcvData={ohlcvData} />}
        </div>
    );
};