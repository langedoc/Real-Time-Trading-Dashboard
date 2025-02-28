"use client";
import { useCrypto } from "@/app/context/CryptoContext";
import useWebSocketOB from "@/app/context/useWebSocketOB";

export default function OrderBook() {
    const { selectedPair } = useCrypto();
    const { orderBook } = useWebSocketOB(selectedPair);

    if (!orderBook) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <h3>BIDS</h3>
                {orderBook.bids.map(([price, quantity], i) => (
                    <div key={i}>
                        {price} : {quantity}
                    </div>
                ))}
            </div>
            <div>
                <h3>ASKS</h3>
                {orderBook.asks.map(([price, quantity], i) => (
                    <div key={i}>
                        {price} : {quantity}
                    </div>
                ))}
            </div>
        </div>
    );
};

