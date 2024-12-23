import Image from "next/image";
import { LuMail, LuMoveRight } from "react-icons/lu";

export default function FooterSection() {
  return (
    <section id="contact" className="relative pt-10 w-full bg-black text-black">
      <div className=" bg-white  flex flex-col lg:flex-row items-center justify-center lg:justify-between p-[48px] mx-auto w-[90%] lg:w-[60%] rounded-[32px]">
        <h1 className=" lg:w-[411px] text-center lg:text-left gap-4 font-bold leading-[38px] lg:leading-[48px] text-black text-[30px] lg:text-[36px]">
          Sign up for our newsletter
        </h1>
        <div className="bg-[#122023] pl-4 lg:w-[474px] gap-6 p-2 mt-[32px] lg:h-[60px] rounded-[42px] flex flex-col lg:flex-row justify-between items-center ">
          <div className="flex items-center ">
            <LuMail color="white" size={24} />
            <input
              placeholder="Enter you email"
              className="text-[20px] flex-1 bg-transparent h-[54px] ml-2 outline-none leading-[24px] text-black font-normal  "
            />
          </div>
          <button className="text-[#132124] w-full lg:w-[132px] h-[54px] bg-[#F7F8FA] px-4 py-1 text-[16px] rounded-full">
            Contact Us
          </button>
        </div>
      </div>
      <div className="relative my-2  w-full lg:w-[1376px] pt-10 bg-[] rounded-3xl flex flex-col justify-between items-center  mx-auto ">
        <div className="relative text-[#5C5C5C] flex flex-col justify-between w-full lg:w-[1280px]  h-full py-6 items-center z-10 ">
          <div className="relative w-full mt-8 gap-6 px-14 backdrop-blur-sm ">
            {/* bottom */}
            <div className="mt-16 relative ">
              <div className="z-50 flex flex-col lg:flex-row w-full justify-center items-center lg:justify-between text-[#5C5C5C]">
                <a href="/">
                  <Image src="logg.png" width={100} height={38} />
                </a>
                <div className="flex flex-col lg:flex-row justify-center items-center text-white gap-8 ">
                  <p className=" z-50 text-[16px] leading-[20px] font-normal ">
                    Privacy Policy
                  </p>
                  <p className=" z-50 text-[16px] leading-[20px] font-normal ">
                    Terms and conditions
                  </p>
                  <p className="z-50 text-[16px] leading-[20px] font-normal text-center">
                    © 2024 NextLevelYourself. All rights reserved.
                  </p>
                  <p className=" z-50 text-[10px] leading-[20px] font-normal ">
                    Built by <a target="blank"></a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/emmanuel-jafaru"
                    >
                      Emmanuel Jafaru
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
