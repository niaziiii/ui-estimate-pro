import React from "react";
import girl from "../../../assets/images/Separates/girl.png";
import peopleIcon from "../../../assets/images/Separates/peopleIcon.png";
import lighticon from "../../../assets/images/Separates/lighticon.png";

export default function Separates() {
  return (
    <div
      id="separtes"
      className="px-4 md:px-[70px] py-6 lg:my-0 lg:px-[130px] mb-10 lg:mb-[143px] overflow-x-hidden"
    >
      <div className="flex flex-col lg:grid grid-cols-2 items-center justify-center h-full gap-y-10 lg:gap-y-0">
        {/* Left Content Section */}
        <div
          className="content w-full lg:max-w-[624px] h-auto"
          data-aos="fade-right"
        >
          <h1 className="font-inter text-[2rem]  lg:text-[48px] font-semibold leading-tight lg:leading-[58px] text-[#2D3340]">
            What Separates Effective From Other
          </h1>

          <p className="font-inter text-[16px] sm:text-[18px] font-normal leading-[24px] lg:leading-[26px] text-left text-[#585C67] mt-4 lg:mt-[30px]">
            Praesent pretium condimentum dolor, quis sollicitudin ligula viverra
            et. Duis vitae tincidunt sapien, ut blandit nunc. Suspendisse
            vestibulum, ipsum vel ullamcorper porta.
          </p>

          <p className="font-inter text-[16px] sm:text-[18px] font-normal leading-[24px] lg:leading-[26px] text-left text-[#585C67] mt-4 lg:mt-[30px]">
            Praesent pretium condimentum dolor, quis sollicitudin ligula viverra
            et. Duis vitae tincidunt sapien, ut blandit nunc.
          </p>

          <div className="flex flex-col sm:flex-row justify-between gap-y-4 sm:gap-y-0 gap-x-6 lg:gap-x-[32px] mt-[30px] lg:mt-[50px]">
            {/* First Feature  */}
            <div className="flex gap-4 px-4 py-5 border cursor-pointer transition-shadow duration-300 hover:shadow-md items-center">
              <div>
                <img
                  src={peopleIcon}
                  alt="People Icon"
                  className="w-[40px] h-auto"
                />
              </div>
              <div className="content">
                <h1 className="font-inter text-[16px] sm:text-[18px] font-semibold leading-[26px] text-left text-[#3D424D]">
                  Unified Case Management
                </h1>
                <p className="font-inter text-[14px] font-normal leading-[22px] mt-2 text-left text-[#585C67]">
                  Praesent id massa suscipit, venenatis velit in,
                </p>
              </div>
            </div>

            {/* Second Feature  */}
            <div className="flex gap-4 px-4 py-5 border cursor-pointer transition-shadow duration-300 hover:shadow-md items-center">
              <div>
                <img
                  src={lighticon}
                  alt="Light Icon"
                  className="w-[40px] h-auto"
                />
              </div>
              <div className="content">
                <h1 className="font-inter text-[16px] sm:text-[18px] font-semibold leading-[26px] text-left text-[#3D424D]">
                  Leading Risk Data
                </h1>
                <p className="font-inter text-[14px] font-normal leading-[22px] mt-2 text-left text-[#585C67]">
                  Praesent id massa suscipit, venenatis velit in,
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  Image Section */}
        <img
          src={girl}
          data-aos="fade-left"
          alt="Girl Image"
          className="w-full max-w-[518px] h-auto m-auto lg:mr-0 lg:ml-auto object-cover"
        />
      </div>
    </div>
  );
}
