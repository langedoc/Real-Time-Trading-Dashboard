"use client";
import { useCrypto } from "@/app/context/CryptoContext";
import useWebSocketOB from '../../../context/useWebSocketOB'; // Import the hook

export default function OrderBook() {
    const { selectedPair } = useCrypto();
    const { orderBook } = useWebSocketOB(selectedPair); // Use the hook to get order book data

    // Function to render the order book table
    const renderOrderBookTable = () => {
        if (!orderBook) return null;

        return (
            <div>
                <h2>Order Book</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderBook.bids.map((bid) => (
                            <tr key={bid.price}>
                                <td>{bid.price}</td>
                                <td>{bid.quantity}</td>
                                <td>{(bid.price * bid.quantity).toFixed(5)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Asks</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderBook.asks.map((ask) => (
                            <tr key={ask.price}>
                                <td>{ask.price}</td>
                                <td>{ask.quantity}</td>
                                <td>{(ask.price * ask.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            {renderOrderBookTable()}
        </div>
    );
};

