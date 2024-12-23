import Image from "next/image";
import { Eligibility, store } from "../data/data";
import TitlesFlow from "./Titles";
import { FaDrum } from "react-icons/fa";

export default function StoreComp({ children }) {
  return (
    <section
      id="offers"
      className="px-10 py-[96px] gap-y-[64px] w-full justify-center flex flex-col "
    >
      <div
        className="lg:w-[1376px] mx-auto flex flex-col gap-[64px] "
      >
        <TitlesFlow
          tag={"Our Store"}
          title={"Pick from our kits"}
          btn={"Get started"}
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {store.map((apply, index) => (
            <div
              key={index}
              className="  flex flex-col pl-6 justify-between rounded-[32px] border border-[#F2F2F2]"
            >
              <div className=" flex flex-col justify-between">
                <div className="flex justify-between pt-6 ">
                  <div className="justify-between gap-8 flex flex-col">
                    <Image src={apply.image}  width={60} height={60} className="w-full h-[550px] object-cover " />
                    <div className="w-full justify-between gap-4 flex flex-col">
                      <Image
                        className="w-[60px] h-[60px] "
                        width={60}
                        height={60}
                        src="/logg.png"
                      />
                      <p className="text-[16px] lg:text-[36px] font-extrabold leading-[28px] my-[6px] lg:mt-[16px] lg:mb-[12px]">
                        {apply.title}
                      </p>
                      <p className=" text-[13px] lg:text-[20px] leading-[20px] font-normal text-white">
                        {apply.text}
                      </p>
                      <p className=" text-[23px] lg:text-[46px] leading-[20px] font-bold mt-6 text-[#A47660]">
                        {apply.price}
                      </p>
                    </div>
                    <a
                      href={apply.link}
                      className="bg-[#A47660] hover:bg-[#dc7545] flex mt-6  gap-4 mb-6 h-[40px] text-[#FFFFFF] px-4 py-6 items-center justify-center text-[20px] font-black rounded-full"
                    >
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
    </section>
  );
}
