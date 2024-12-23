import Image from "next/image";
import FlowThree from "./FlowThree";
import TitlesFlow from "./Titles";
import { LuMail } from "react-icons/lu";
import { FaPlay, FaPlayCircle } from "react-icons/fa";
import { Benefits, Eligibility, offers } from "../data/data";

export default function InfoTop() {
  return (
    <section
      id="offers"
      className="px-10 py-[96px] gap-y-[64px] w-full justify-center flex flex-col "
    >
      <div className="hidden w-full lg:w-[1376px]  lg:h-[474px] justify-center items-center rounded-[36px] m-auto py-[44px] px-[58px] bg-[url('/assets/self.png')] md:bg-[url('/assets/self.jpg')] bg-black">
        <div className="flex w-full m-auto justify-center items-center gap-4 lg:w-[730px] lg:h-[286px]">
          <p className="text-[#A47660] text-xl lg:text-5xl font-bold ">
            Play Video
          </p>
          <FaPlayCircle color={"#A47660"} size={70} />
        </div>
      </div>
      {/* services */}
      <div id="services" className="lg:w-[1376px] mx-auto ">
        <TitlesFlow
          tag={"What You’ll Get:"}
          title={"What You’ll Get from the camp"}
          btn={"Get Started"}
        />
        <div className="grid lg:grid-cols-3 gap-[24px] mb-[64px]">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="w-[343px] lg:w-[442px] border-[#EBEBEB] border h-[200px] rounded-[34px] p-[4px]"
            >
              <div className="w-[336px] lg:w-[432.67px] bg-[#F9F9F9] p-[24px] h-[190px] flex flex-col justify-start gap-[16px] rounded-[34px]">
                <Image
                  className="w-[34.84px] h-[34.84px] "
                  width={34.84}
                  height={34.84}
                  src="logg.PNG"
                />
                <p className="text-[20px] leading-[32px] text-black font-semibold">
                  {offer.texts}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* benefits */}

      <div
        id="benefits"
        className=" lg:w-[1376px] lg:h-[786px] rounded-[36px] flex justify-center mx-auto py-[44px] px-[14px] lg:px-[58px]  bg-black border border-white"
      >
        <div className="flex flex-col justify-between   ">
          <div className="flex justify-center text-center flex-col">
            <h3 className="text-[30px] lg:text-[32px] items-center leading-[36px] lg:leading-[42px] font-bold text-white">
              Our Benefits
            </h3>
            <p className="my-[24px] w-[90%] text-center mx-auto items-center text-[16px] lg:text-[24px] font-[300] leading-[30px] text-white">
              This isn't just another drum camp. It's a carefully designed
              program to push your boundaries, refine your technique, and unlock
              new levels of creativity. Whether you're a beginner or an advanced
              drummer, you'll leave with the skills, knowledge, and confidence
              to perform and create with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-[24px]">
            {Benefits.map((benefit, index) => (
              <div
                key={index}
                className=" w-[280px] mx-auto lg:w-[410.67px] lg:h-[228px] rounded-[21px] flex flex-col shadow-sm  shadow-white gap-[16px] bg-black border border-white p-[20px]"
              >
                <div className="flex gap-[8px] ">
                  <Image
                    className="w-[28px] h-[28px] "
                    width={28}
                    height={28}
                    src="logg.PNG"
                  />
                  <p className="text-white text-[14px] lg:text-[18px] leading-[28px] font-semibold ">
                    {benefit.title}
                  </p>
                </div>
                <p className="text-[#929899] text-[12px] lg:text-[16px] leading-[20px] font-normal ">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* eligibility */}
      <div
        id="eligibility"
        className="lg:w-[1376px] mx-auto flex flex-col gap-[64px] "
      >
        <TitlesFlow
          tag={"Eligibility"}
          title={"Who can Apply"}
          btn={"Get started"}
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {Eligibility.map((apply) => (
            <div className="  flex flex-col pl-6 py-8 justify-between rounded-[32px] border border-[#F2F2F2]">
              <div className=" flex flex-col justify-between">
                <div className="flex justify-between ">
                  <div className="justify-between  flex flex-col">
                    <div className="w-full">
                      <Image
                        className="w-[60px] h-[60px] "
                        width={60}
                        height={60}
                        src="logg.PNG"
                      />
                      <p className="text-[16px] lg:text-[24px] leading-[28px] font-medium my-[6px] lg:mt-[16px] lg:mb-[12px]">
                        {apply.title}
                      </p>
                      <p className=" text-[13px] lg:text-[16px] leading-[20px] font-normal text-[#929899]">
                        {apply.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
