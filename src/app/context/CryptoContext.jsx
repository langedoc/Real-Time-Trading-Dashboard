"use client";
import { createContext, useContext, useState } from "react";

const CryptoContext = createContext(null);

export const useCrypto = () => {
    return useContext(CryptoContext);
}

export const CryptoProvider = (({ children }) => {
    const [ selectedPair, setSelectedPair ] = useState("BTCUSDT");

    return (
        <CryptoContext.Provider value={{ selectedPair, setSelectedPair }}>
            { children }
        </CryptoContext.Provider>
    );
});
