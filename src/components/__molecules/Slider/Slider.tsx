import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "../BlogCard/BlogCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SliderButtons from "@/components/__atoms/SliderButtons/SliderButtons";
import { useState } from "react";
import { Category } from "@/types/services";

interface sliderProps {
  blogCategories: Category[];
}

const Slider = ({ blogCategories }: sliderProps) => {
  const blogs = useSelector((state: RootState) => state.blog.blogs);
  const [sliderIndex, setSliderIndex] = useState(0);

  const filteredBlogs = blogs.filter((blog) =>
    blog.categories.some((category) =>
      blogCategories.some(
        (selectedCategory) => selectedCategory.id === category.id
      )
    )
  );
  const sliderCount = filteredBlogs.length;
  console.log(sliderIndex);
  return (
    <div className="relative px-[76px] mt-[98px] mb-14">
      <Swiper
        onRealIndexChange={(index) => setSliderIndex(index.activeIndex)}
        slidesPerView={3}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={32}
      >
        <h3 className="text-primaryBlack text-[32px] font-bold absolute top-0 left-0">
          მსგავსი სტატიები
        </h3>
        <SliderButtons sliderIndex={sliderIndex} sliderCount={sliderCount} />
        {filteredBlogs.map((blog, index) => (
          <SwiperSlide className="mt-20" key={index}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
