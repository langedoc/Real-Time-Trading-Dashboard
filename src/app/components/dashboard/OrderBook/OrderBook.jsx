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
                <div className="flex flex-row">
                    <Table 
                        data={orderBook.bids} 
                        headers={['Price', 'Quantity', 'Total']} 
                    />
                    <Table 
                        data={orderBook.asks} 
                        headers={['Price', 'Quantity', 'Total']} 
                    />
                </div>
            ) : (
                <p>Getting data...</p>
            )}
        </div>
    );
};

