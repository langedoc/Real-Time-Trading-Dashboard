import TraidingPairsMenu from "./components/dashboard/TraidingPairsMenu/TraidingPairsMenu";
import PriceChart from "./components/dashboard/PriceChart/PriceChart";

export default function Home() {
  return (
    <div>
      <main>
        <TraidingPairsMenu />
        <PriceChart />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
