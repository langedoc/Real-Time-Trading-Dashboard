import { useEffect, useState, useRef } from "react";

const useWebSocketOB = (symbol) => {
    const [ orderBook, setOrderBook ] = useState(null);
    const wsRef = useRef(null);
    const reconnectDelay = 1000; // Delay in 1 second before attempting to reconnect

    useEffect(() => {
        if(!symbol) return;

        const connectWebSocket = () => {
            const ws = new WebSocket(`wss://fstream.binance.com/ws/${symbol.toLowerCase()}@depth@500ms`);
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
                setTimeout(connectWebSocket, reconnectDelay); // Attempt to reconnect
            };
        };

        connectWebSocket(); // Initial connection

        return () => wsRef.current && wsRef.current.close();
    }, [symbol]);
    
    return { orderBook };
};

export default useWebSocketOB;