import TraidingPairsMenu from "./components/dashboard/TraidingPairsMenu/TraidingPairsMenu";
import PriceChart from "./components/dashboard/PriceChart/PriceChart";
import OrderBook from "./components/dashboard/OrderBook/OrderBook";

export default function Home() {
  return (
    <main className="flex flex-col m-[20px] gap-[10px]">
      <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold"> TRADING DASHBOARD</h1>
          <TraidingPairsMenu/>
      </div>
      <PriceChart />
      <OrderBook />
    </main>
  );
}
