import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";

export default function EventsHero() {
  return (
    <section
      id=""
      className="flex my-2 gap-6 lg:py-[100px] flex-col justify-center items-center relative md:flex-row w-full "
    >
      <div className="w-full lg:w-[1376px] lg:h-[447px] bg-black bg-no-repeat p-4 bg-contain rounded-[36px] flex flex-col gap-6 lg:flex-row justify-center items-center">
        <div className="w-full h-[300px] rounded-lg overflow-hidden ">
          <Image
            src="self.jpg"
            width={200}
            height={38}
            className=" w-full  object-cover object-bottom lg:w-[500px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-[#A5BBC0] text-[14px]  lg:text-[18px] leading-[28px] ">
            Welcome to{" "}
            <span className="font-black text-[#A47660] ">
              NextLevelYourself
            </span>
          </p>
          <h1 className="text-[36px] lg:text-[72px] text-[#FFFFFF] mt-[24px] mb-[36px] text-center leading-[44px] lg:leading-[84px] w-[311px] lg:w-[888px]  ">
          We organise events targeted to build you up
          </h1>
          <p className=" lg:text-[24px] lg:leading-[46px] w-[311px] lg:w-[697px] font-[300] lg:font-[400] text-center  mb-[39px] text-[#C4D3D6]">
          This is your exclusive opportunity to immerse yourself in a transformative drum experience like no other.
          </p>
          {/* <div className="flex lg:flex-row flex-col gap-[24px] w-[311px] lg:w-[888px] justify-center ">
            <button className="bg-[#A47660] hover:bg-[#dc7545] w-full  justify-center lg:w-[200px] h-[52px] text-[17px] font-black flex items-center gap-2 text-white px-6 py-2 rounded-full">
              Register Now <LuMoveRight color={"white"} size={24} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
