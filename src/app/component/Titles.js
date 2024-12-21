import React from "react";
import { LuMoveRight } from "react-icons/lu";

export default function TitlesFlow({ tag, title, btn }) {
  return (
    <div className="flex flex-col gap-8 lg:justify-between items-start lg:flex-row my-6 w-full justify-around ">
      <div className="w-full  flex justify-between flex-col gap-[32px] ">
        <div  className="flex w-full  h-[40px]">
          <div className="border border-[#F0F0F0] rounded-full px-[16px] flex justify-center items-center">
            <div className="w-[7.16px] h-[7.16px] bg-white rounded-full"></div>
            <p className=" text-xl font-normal  text-white px-[10px] p-1 text-center ">
              {tag}
            </p>
            <div className="w-[7.16px] h-[7.16px] bg-white rounded-full"></div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-6 lg:flex-row justify-between">
          <p className="text-[36px] w-full lg:w-[40%] lg:text-[48] leading-[54px] ">
            {title}
          </p>

          
         
        </div>
      </div>
    </div>
  );
}
