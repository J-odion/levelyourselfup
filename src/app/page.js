import Hero from "./component/Herosection";
import InfoTop from "./component/InfoTop";

export default function Home() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* <Hero />
      <InfoTop /> */}

      <div className=" flex flex-col justify-center items-center h-[100vh] ">
        <h2 className="text-white text-3xl ">
          Your sever is down
        </h2>
        <p className="">
          contact vercel webmaster for support
        </p>
      </div>
    </div>
  );
}
