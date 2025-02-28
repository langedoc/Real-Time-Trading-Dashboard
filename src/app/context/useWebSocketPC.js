import { useEffect, useState, useRef } from "react";

const useWebSocketPC = (symbol) => {
    const [ ohlcvData, setOhlcvData ] = useState(null);
    const wsRef = useRef(null);

    useEffect(() => {
        if(!symbol) return;

        const ws = new WebSocket(`wss://fstream.binance.com/ws/${symbol.toLowerCase()}@kline_1h`);
        wsRef.current = ws;

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.e === "kline") {
                const kline = data.k;
                setOhlcvData({
                    time: kline.t,
                    open: parseFloat(kline.o),
                    high: parseFloat(kline.h),
                    low: parseFloat(kline.l),
                    close: parseFloat(kline.c),
                    volume: parseFloat(kline.v),
                });
            }
        };

        ws.onerror = (error) => console.error("WebSocket error:", error);

        return () => ws.close();
    }, [ symbol ]);

    return { ohlcvData };
};

export default useWebSocketPC;