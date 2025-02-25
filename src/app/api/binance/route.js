import { NextResponce } from "next/server";

export async function GET() {
    try {
        const res = await fetch (
            "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h"
        );

        if (!res.ok) {
            throw new Error("Getting data from Binance failed.");
        }

        const data = await res.json();

        const formattedData = data.map((candle) => ({
            time: candle[0] / 1000,
            open: parseFloat(candle[1]),
            hight: parseFloat(candle[2]),
            low: parseFloat(candle[3]),
            close: parseFloat(candle[4]),
            volume: parseFloat(candle[5]),
        }))

        return NextResponce.json(formattedData);
    } catch (error) {
        return NextResponce.json(
            { error: "Data fetching failed"},
            { status: 500 }
        );
    }      
}