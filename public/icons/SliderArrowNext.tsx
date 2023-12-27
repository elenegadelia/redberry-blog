import React from "react";

interface sliderArrowNextProps {
  isEnd: boolean;
}

const SliderArrowNext = ({ isEnd }: sliderArrowNextProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
    >
      <rect
        x="44"
        y="44"
        width="44"
        height="44"
        rx="22"
        transform="rotate(180 44 44)"
        fill={`${isEnd ? "#E4E3EB" : "#5D37F3"}`}
      />
      <path
        d="M26 21C25.4477 21 25 21.4477 25 22C25 22.5523 25.4477 23 26 23L26 21ZM26.8071 22.7071C27.1976 22.3166 27.1976 21.6834 26.8071 21.2929L20.4431 14.9289C20.0526 14.5384 19.4195 14.5384 19.0289 14.9289C18.6384 15.3195 18.6384 15.9526 19.0289 16.3431L24.6858 22L19.0289 27.6569C18.6384 28.0474 18.6384 28.6805 19.0289 29.0711C19.4195 29.4616 20.0526 29.4616 20.4431 29.0711L26.8071 22.7071ZM26 23L26.1 23L26.1 21L26 21L26 23Z"
        fill="white"
      />
    </svg>
  );
};

export default SliderArrowNext;
