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
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const filteredBlogs = blogs.filter((blog) =>
    blog.categories.some((category) =>
      blogCategories.some(
        (selectedCategory) => selectedCategory.id === category.id
      )
    )
  );
  return (
    <div className="relative px-[76px] mt-[98px]">
      <Swiper
        onReachBeginning={() => setIsBeginning(false)}
        onReachEnd={() => setIsEnd(true)}
        slidesPerView={3}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={32}
      >
        <h3 className="text-primaryBlack text-[32px] font-bold absolute top-0 left-0">
          მსგავსი სტატიები
        </h3>
        <SliderButtons isBeginning={isBeginning} isEnd={isEnd} />
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
