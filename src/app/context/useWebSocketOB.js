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
                // Showing only first 10 for best readability and performance
                bids: data.b.slice(0, 10).map(([price, quantity]) => ({price: parseFloat(price), quantity: parseFloat(quantity) })),
                asks: data.a.slice(0, 10).map(([price, quantity]) => ({price: parseFloat(price), quantity: parseFloat(quantity) })),
            });
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
            setOrderBook(null);
        };

        ws.onclose = () => {
            console.warn("WebSocket connection closed. Attempting to reconnect...");
            setOrderBook(null);
        };

        return () => ws.close();
    }, [symbol]);
    
    return { orderBook };
};

export default useWebSocketOB;