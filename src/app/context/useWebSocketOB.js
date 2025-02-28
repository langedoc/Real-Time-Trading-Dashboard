import { useEffect, useState, useRef } from "react";

const useWebSocketOB = (symbol) => {
    const [ orderBook, setOrderBook ] = useState(null);
    const wsRef = useRef(null);

    useEffect(() => {
        if(!symbol) return;

        const ws = new WebSocket(`wss://fstream.binance.com/ws/${symbol.toLowerCase()}@depth@500ms`); // Can be adjusted to 250 milliseconds, 500 milliseconds, 100 milliseconds (if existing)
        wsRef.current = ws;

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setOrderBook({
                bids: data.b.slice(0, 10), // Showing only first 10 for best readability and performance
                asks: data.a.slice(0, 10),
            });
        };

        ws.onerror = (error) => console.error("WebSocket error:", error);

        return () => ws.close();
    }, [symbol]);

    return { orderBook };
};

export default useWebSocketOB;