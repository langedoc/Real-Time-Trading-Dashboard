"use client";
import { useCrypto } from "@/app/context/CryptoContext";

export default function TraidingPairsMenu() {
    const { selectedPair, setSelectedPair } = useCrypto();

    const handleChange = ( event ) => {
        setSelectedPair(event.target.value);
    };

    return (
        <div>
            <label htmlFor="pair-menu">Select currency:</label>
            <select 
                id="pair-menu"
                value={selectedPair}
                onChange={handleChange}
            >
                <option value="BTCUSDT">BTC/USDT</option>
                <option value="ETHUSDT">ETH/USDT</option>
                <option value="SOLUSDT">SOL/USDT</option>
                <option value="LTCUSDT">LTC/USDT</option>
            </select>
        </div>
    );
};