import Image from "next/image";
import { Courses, Eligibility } from "../data/data";
import TitlesFlow from "./Titles";

export default function CourseComp({ children }) {
  return (
    <section
      id="offers"
      className="px-10 py-[96px] gap-y-[64px] w-full justify-center flex flex-col "
    >
      <div
        id="eligibility"
        className="lg:w-[1376px] mx-auto flex flex-col gap-[64px] "
      >
        <TitlesFlow
          tag={"Courses"}
          title={"Pick from our course"}
          btn={"Get started"}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {Courses.map((apply) => (
            <div className="  flex flex-col pl-6 justify-between rounded-[32px] border border-[#F2F2F2]">
              <div className=" flex flex-col justify-between">
                <div className="flex justify-between pt-6 ">
                  <div className="justify-between  flex flex-col">
                    <div className="w-full h-full">
                      <Image
                        className="w-[80px] h-[80px] "
                        width={60}
                        height={60}
                        src="/assets/logg.png"
                      />
                      <p className="text-[16px] lg:text-[38px]  leading-[28px] font-black my-[6px] lg:mt-[16px] lg:mb-[12px]">
                        {apply.title}
                      </p>
                      <p className=" text-[13px] lg:text-[16px] leading-[20px] font-normal text-white">
                        {apply.text}
                      </p>
                      <p className=" text-[23px] lg:text-[46px] leading-[20px] font-bold mt-6 text-[#A47660]">
                        {apply.price} / <span className="text-[13px] text-white lg:text-[16px]">{apply.dration}</span>
                      </p>

                      <div className="flex justify-center w-full items-center  gap-6 mt-8"> 
                        {apply.categories.map((tag) =>(
                          <div className="border border-white w-full rounded-full p-2"> 
                            <p className=" text-[8px] lg:text-[10px] text-center font-extrabold leading-[20px]text-[#929899]">
                            {tag}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <a href={apply.link} className="bg-[#A47660] hover:bg-[#dc7545] mt-6 w-[132px] mb-8 h-[40px] text-[#FFFFFF] px-4 py-2 text-[16px] rounded-full">
                      Apply Now
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
