import Hero from "./component/Herosection";
import InfoTop from "./component/InfoTop";

export default function Home() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <Hero />
      <InfoTop />
    </div>
  );
}
