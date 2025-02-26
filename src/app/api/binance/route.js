import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get("symbol");
    
    try {
        const res = await fetch (
            `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h`
        );

        if (!res.ok) {
            throw new Error("Getting data from Binance failed.");
        }

        const data = await res.json();

        const formattedData = data.map((candle) => ({
            time: candle[0],
            open: parseFloat(candle[1]),
            high: parseFloat(candle[2]),
            low: parseFloat(candle[3]),
            close: parseFloat(candle[4]),
            volume: parseFloat(candle[5]),
        }))

        return NextResponse.json(formattedData);

    } catch (error) {
        return NextResponse.json(
            { error: "Data fetching failed"},
            { status: 500 }
        );
    }      
}