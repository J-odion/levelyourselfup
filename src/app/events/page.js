import EventsHero from "../component/EventsHero";
import EventsTop from "../component/EventsTop";

export default function Event() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* <EventsHero />
      <EventsTop /> */}

      <div className=" flex flex-col justify-center items-center h-[100vh] ">
        <h2 className="text-white text-3xl ">Your sever is down</h2>
        <p className="">contact vercel webmaster for support</p>
      </div>
    </div>
  );
}
