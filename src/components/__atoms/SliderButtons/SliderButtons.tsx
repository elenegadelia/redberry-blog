import React from "react";
import { useSwiper } from "swiper/react";
import SliderArrowNext from "../../../../public/icons/SliderArrowNext";
import SliderArrowsPrev from "../../../../public/icons/SliderArrowsPrev";

interface sliderButtonProps {
  isEnd: boolean;
  isBeginning: boolean;
}

const SliderButtons = ({ isEnd, isBeginning }: sliderButtonProps) => {
  const swiper = useSwiper();
  return (
    <div className="flex gap-6 absolute z-50 top-0 right-0">
      <button onClick={() => swiper.slidePrev()}>
        <SliderArrowsPrev isBeginning={isBeginning} />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <SliderArrowNext isEnd={isEnd} />
      </button>
    </div>
  );
};

export default SliderButtons;
