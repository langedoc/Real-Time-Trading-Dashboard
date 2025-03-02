"use client";
import { useCrypto } from "@/app/context/CryptoContext";

export default function Table({ data, name }) {
    const { selectedPair } = useCrypto();
    const currency = selectedPair.slice(0,4);
    const borderColor = name === "Buy Orders" ? "border-green-400" : name === "Sell Orders" ? "border-rose-500" : "border-slate-50";

    return (
        <table className="w-1/2 border-collapse">
            <caption className="my-[5px]">
                <h3>{name}</h3>
            </caption>
            <thead className="mb-4">
                <tr className={`border-b ${borderColor} py-2`}>
                    <th className="w-1/3">Price (USDT)</th>
                    <th className="w-1/3">Quantity ({currency})</th>
                    <th className="w-1/3">Total (USDT)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, id) => (
                    <tr key={id}>
                        <td className="w-1/3">{item.price}</td>
                        <td className="w-1/3">{item.quantity}</td>
                        <td className="w-1/3">{item.quantity * item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
