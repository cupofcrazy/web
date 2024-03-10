"use client";

import "swiper/css";
import { CustomImage } from "./custom-image";
import { useEffect, useState } from "react";
import classNames from "classnames";

type SliderProps = {
  slides: any[];
};

// export const Slider = ({ slides }: SliderProps) => {
//   return (
//     <Swiper
//       spaceBetween={16}
//       slidesPerView={3}
//     >
//       { slides.map((slide, index) => {

//         return (
//           <SwiperSlide key={index}>
//             <CustomImage
//               src={slide.image.url}
//               alt={slide.alt || ""}
//               width={slide.image.metadata.dimensions.width}
//               height={slide.image.metadata.dimensions.height}
//             />
//           </SwiperSlide>
//         )
//       })}
//     </Swiper>
//   )
// }

export const Slider = ({ slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="rounded-xl overflow-hidden relative flex flex-col items-center w-[600px] select-none">
      <div
        className="w-full"
        onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
      >
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              style={{ display: currentSlide === index ? "block" : "none" }}
            >
              <CustomImage
                src={slide.image.url}
                alt={slide.alt || ""}
                width={slide.image.metadata.dimensions.width}
                height={slide.image.metadata.dimensions.height}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => {
          return (
            <button
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlide(index);
              }}
              key={index}
              className={classNames(
                "w-2 h-3 rounded-full",
                {
                  "bg-black w-4": currentSlide === index,
                  "bg-black opacity-25": currentSlide !== index,
                },
                "transition-all duration-[0.5s] ease-[ease]"
              )}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
