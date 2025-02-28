import TraidingPairsMenu from "./components/dashboard/TraidingPairsMenu/TraidingPairsMenu";
import PriceChart from "./components/dashboard/PriceChart/PriceChart";
import OrderBook from "./components/dashboard/OrderBook/OrderBook";

export default function Home() {
  return (
    <div>
      <main>
        <TraidingPairsMenu />
        <PriceChart />
        <OrderBook />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
