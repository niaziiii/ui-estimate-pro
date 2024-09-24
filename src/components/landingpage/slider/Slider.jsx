import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lotch from "../../../assets/images/slider/Lotch.png";
import Dunn from "../../../assets/images/slider/Dunn.png";
import Cura from "../../../assets/images/slider/Cura.png";
import Mitcaail from "../../../assets/images/slider/Mitcaail.png";
import EliteCare from "../../../assets/images/slider/EliteCare.png";
import stumpy from "../../../assets/images/slider/stumpy.png";

import { Autoplay } from "swiper/modules";

export default function Slider() {
  const images = [
    { id: 1, src: Lotch },
    { id: 2, src: Dunn },
    { id: 3, src: Cura },
    { id: 4, src: Mitcaail },
    { id: 5, src: EliteCare },
    { id: 6, src: stumpy },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let slidesPerView = 5;

  if (width < 568) {
    slidesPerView = 3;
  } else if (width < 450) {
    slidesPerView = 2;
  }

  return (
    <div className="my-10 md:my-[80px]">
      <h1 className="font-neue-montreal text-[2rem] md:text-[36px] font-medium leading-[44px] text-center pb-[70px] text-[#2D3340] px-3">
        We've Worked With Some Amazing Teams
      </h1>
      <div className="px-6">
        <Swiper
          spaceBetween={30}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{ delay: 1000 }}
          modules={[Autoplay]}
        >
          {images.map((image) => (
            <SwiperSlide className="flex items-center gap-3" key={image.id}>
              <img
                src={image.src}
                alt={`Slide-${image.id}`}
                className="min-w-[111px] max-w-[111px] w-[111px] cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
