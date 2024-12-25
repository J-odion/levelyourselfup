import StoreComp from "../component/storecard";
import StoreHero from "../component/StoreHero";

export default function Event() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <StoreHero />
      <StoreComp />
    </div>
  );
}
