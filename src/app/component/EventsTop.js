
import TitlesFlow from "./Titles";
import { FaDrum, } from "react-icons/fa";
import {  Events, offers } from "../data/data";

export default function EventsTop() {

  return (
    <section
      id="offers"
      className="px-10 py-[96px] gap-y-[64px] w-full justify-center flex flex-col "
    >
      {/* eligibility */}
      <div
        id="eligibility"
        className="lg:w-[1376px] mx-auto flex flex-col gap-[64px] "
      >
        <TitlesFlow
          tag={"Events"}
          title={"Upcoming Events"}
          btn={"Get started"}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {Events.map((apply, index) => (
            <div
              key={index}
              className=" flex flex-col p-6 justify-between rounded-[32px] border border-[#F2F2F2]"
            >
              <div className=" flex flex-col justify-between">
                <div className="flex justify-between pt-6 ">
                  <div className={`justify-between gap-8 flex flex-col bg-${apply.image}` }>
                  <img
                        className="w-full h-auto "
                        width={60}
                        height={60}
                        src={apply.image}
                      />
                    <div className="w-full bg-none justify-between gap-4 flex flex-col">
                      <img
                        className="w-[60px] h-[60px] "
                        width={60}
                        height={60}
                        src="logg.PNG"
                      />
                      <p className="text-[16px] lg:text-[36px] font-extrabold leading-[28px] my-[6px] lg:mt-[16px] lg:mb-[12px]">
                        {apply.title}
                      </p>
                      <p className=" text-[13px] lg:text-[20px] leading-[20px] font-normal text-white">
                        {apply.text}
                      </p>
                      <p className=" text-[23px] lg:text-[46px] leading-[20px] font-bold mt-6 text-[#A47660]">
                        {apply.price} /{" "}
                        <span className="text-[13px] text-white lg:text-[16px]">
                          {apply.dration}
                        </span>
                      </p>
                    </div>
                    <a href={apply.link} className="bg-[#A47660] hover:bg-[#dc7545] flex mt-6  gap-4 mb-6 h-[40px] text-[#FFFFFF] px-4 py-6 items-center justify-center text-[20px] font-black rounded-full">
                      Register Now
                      <FaDrum size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* services */}
      <div id="services" className="lg:w-[1376px] mx-auto ">
        <TitlesFlow
          tag={"Expectations"}
          title={"What we Offer"}
          btn={"Get Started"}
        />
        <div className="grid lg:grid-cols-3 gap-[24px] mb-[64px]">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="w-[343px] lg:w-[442px] border-[#EBEBEB] border h-[200px] rounded-[34px] p-[4px]"
            >
              <div className="w-[336px] lg:w-[432.67px] bg-[#F9F9F9] p-[24px] h-[190px] flex flex-col justify-start gap-[16px] rounded-[34px]">
                <img
                  className="w-[34.84px] h-[34.84px] "
                  width={34.84}
                  height={34.84}
                  src="/logg.PNG"
                />
                <p className="text-[20px] leading-[32px] text-black font-semibold">
                  {offer.texts}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
