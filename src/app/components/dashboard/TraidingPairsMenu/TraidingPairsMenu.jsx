"use client";
import { useCrypto } from "@/app/context/CryptoContext";

export default function TraidingPairsMenu() {
    const { selectedPair, setSelectedPair } = useCrypto();

    const handleChange = ( event ) => {
        setSelectedPair(event.target.value);
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="pair-menu" className="mb-2">CURRENCY</label>
            <select 
                id="pair-menu"
                value={selectedPair}
                onChange={handleChange}
                className="bg-slate-950 text-slate-50 border-none opacity-90"
            >
                <option value="BTCUSDT">BTC/USDT</option>
                <option value="ETHUSDT">ETH/USDT</option>
                <option value="SOLUSDT">SOL/USDT</option>
                <option value="LTCUSDT">LTC/USDT</option>
            </select>
        </div>
    );
};