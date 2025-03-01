import TraidingPairsMenu from "./components/dashboard/TraidingPairsMenu/TraidingPairsMenu";
import PriceChart from "./components/dashboard/PriceChart/PriceChart";
import OrderBook from "./components/dashboard/OrderBook/OrderBook";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold"> Trading Dashboard</h1>
            <TraidingPairsMenu className="mb-4"/>
        </div>
        <PriceChart className="mb-4" />
        <OrderBook className="mb-4" />
      </main> 
    </div>
  );
}
