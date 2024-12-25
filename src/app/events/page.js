import EventsHero from "../component/EventsHero";
import EventsTop from "../component/EventsTop";

export default function Event() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <EventsHero />
      <EventsTop />
    </div>
  );
}
