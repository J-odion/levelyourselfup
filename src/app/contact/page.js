import ContactForm from "../component/ContactForm";
import ContactHero from "../component/ContactHero";


export default function ContactPage() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
        <ContactHero />
      <div className="w-[60%] mx-auto">
      <ContactForm />
      </div>
    </div>
  );
}
