import React from "react";
import RocketSvg from "../../../assets/images/helps30/RocketSvg.png";
import TimeSvg from "../../../assets/images/helps30/TimeSvg.png";
import Profilesvg from "../../../assets/images/helps30/Profilesvg.png";

export default function Estimate() {
  const content = [
    {
      image: RocketSvg,
      heading: "Built for flexibility, speed, and scale",
      paragraph:
        "Pupils work at their own pace, initially bridging knowledge gaps before picking up more quickly.",
    },
    {
      image: Profilesvg,
      heading: "Industry-leading data security",
      paragraph:
        "Expert-created, schoolarli offers a library of reliable practice and lessons in math, science, and other subjects. Always free for both educators and students.",
    },
    {
      image: TimeSvg,
      heading: "Accelerate time to value from day one",
      paragraph:
        "Teachers can use Schoolarli to match each student's needs, customize their lessons, and find comprehension gaps in their pupils.",
    },
  ];
  return (
    <div
      className="px-4 md:px-[70px] lg:px-[135px] pt-[50px] sm:pt-[60px] lg:pt-[87px]"
      style={{
        background:
          "linear-gradient(112.12deg, #0066CC -1.86%, #003366 110.3%)",
      }}
    >
      {/* Heading */}
      <h1
        data-aos="fade-down"
        className="font-inter w-full max-w-[800px] xl:max-w-[1020px]  text-[2rem] lg:text-[48px] font-semibold leading-tight lg:leading-[58px] text-center text-white mx-auto"
      >
        Project Estimate Pro helps 30% of Fortune 300 companies Grow their
        Business.
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 min-[650px]:grid-cols-2 lg:grid-cols-3 pt-10 pb-20 lg:pb-0 lg:pt-0 items-center justify-center md:gap-y-20 lg:gap-y-0  lg:gap-x-[30px] mt-[24px]">
        {content.map((CrlEem, i) => (
          <div
            key={i}
            className="relative md:h-full mt-[80px] lg:mt-0 lg:top-[100px] bg-white rounded-[32px] group w-full max-w-[300px] lg:max-w-[370px] lg:h-[437px] shadow-lg mx-auto transition-all duration-300"
            style={{
              // top: "100px",
              cursor: "pointer",
            }}
            // data-aos="fade-up"
          >
            {/* Image */}
            <div className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 top-[-42px] sm:top-[-52px] group-hover:top-[-60px]">
              <img
                src={CrlEem.image}
                alt=""
                className="mx-auto w-[80px] lg:w-auto"
              />
            </div>

            {/* Card Content */}
            <div className="px-[20px] pb-5 lg:px-[28px] pt-[30px] lg:pt-[121px]">
              <h1 className="font-inter mt-2 md:mt-0  text-[20px] lg:text-[24px] font-semibold leading-[28px] lg:leading-[32px] text-center text-[#222222]">
                {CrlEem.heading}
              </h1>
              <p className="font-inter text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[26px] text-center text-[#3D424D] mt-[12px] lg:mt-[20px]">
                {CrlEem.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
