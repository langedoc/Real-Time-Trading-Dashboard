"use client";
import { createContext, useContext, useState } from "react";

const CryptoContext = createContext(null);

export const useCrypto = () => {
    return useContext(CryptoContext);
}

export const CryptoProvider = (({ children }) => {
    const [ selectedPair, setSelectedPair ] = useState("BTCUSDT");
    const currency = selectedPair.slice(0,3);

    return (
        <CryptoContext.Provider value={{ selectedPair, currency, setSelectedPair }}>
            { children }
        </CryptoContext.Provider>
    );
});
