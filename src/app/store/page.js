import StoreComp from "../component/storecard";
import StoreHero from "../component/StoreHero";

export default function Event() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* <StoreHero />
      <StoreComp /> */}

      <div className=" flex flex-col justify-center items-center h-[100vh] ">
        <h2 className="text-white text-3xl ">Your sever is down</h2>
        <p className="">contact vercel webmaster for support</p>
      </div>
    </div>
  );
}
