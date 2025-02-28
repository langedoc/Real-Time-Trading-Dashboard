import { useEffect, useState, useRef } from "react";

const useWebSocketOB = (symbol) => {
    const [ orderBook, setOrderBook ] = useState(null);
    const wsRef = useRef(null);

    useEffect(() => {
        if(!symbol) return;

        const ws = new WebSocket(`wss://fstream.binance.com/ws/${symbol.toLowerCase()}@depth`);
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

    return orderBook;
};

export default useWebSocketOB;