import React from "react";
import { useSwiper } from "swiper/react";
import SliderArrowNext from "../../../../public/icons/SliderArrowNext";
import SliderArrowsPrev from "../../../../public/icons/SliderArrowsPrev";

interface sliderButtonProps {
  sliderIndex: number;
  sliderCount: number;
}

const SliderButtons = ({ sliderIndex, sliderCount }: sliderButtonProps) => {
  const swiper = useSwiper();
  const leftActive = sliderIndex > 0;
  const rightActive = sliderIndex < sliderCount - 3;

  return (
    <div className="flex gap-6 absolute z-50 top-0 right-0">
      <button onClick={() => swiper.slidePrev()}>
        <SliderArrowsPrev isBeginning={leftActive} />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <SliderArrowNext isEnd={rightActive} />
      </button>
    </div>
  );
};

export default SliderButtons;
