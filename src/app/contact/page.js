import ContactForm from "../component/ContactForm";
import ContactHero from "../component/ContactHero";

export default function ContactPage() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* <ContactHero />
      <div className="w-[60%] mx-auto">
        <ContactForm />
      </div> */}

      <div className=" flex flex-col justify-center items-center h-[100vh] ">
        <h2 className="text-white text-3xl ">Your sever is down</h2>
        <p className="">contact vercel webmaster for support</p>
      </div>
    </div>
  );
}
