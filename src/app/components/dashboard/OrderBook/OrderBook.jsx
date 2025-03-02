"use client";
import { useCrypto } from "@/app/context/CryptoContext";
import useWebSocketOB from '../../../context/useWebSocketOB';
import Table from './Table';

export default function OrderBook() {
    const { selectedPair } = useCrypto();
    const { orderBook } = useWebSocketOB(selectedPair);

    return (
        <div className="w-full">
            <h2>Order Book</h2>
            {orderBook ? (
                <div className="flex flex-row gap-[10px]">
                    <Table 
                        data={orderBook.bids} 
                        name={"Buy Orders"}
                        />
                    <Table 
                        data={orderBook.asks} 
                        name={"Sell Orders"}
                    />
                </div>
            ) : (
                <p>Getting data...</p>
            )}
        </div>
    );
};

