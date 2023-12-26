"use client";
import Banner from "@/components/__molecules/Banner/Banner";
import CategoryFilter from "@/components/__molecules/CategoryFilter/CategoryFilter";
import SignInModal from "@/components/__molecules/SignInModal/SignInModal";
import BlogList from "@/components/__organisms/BlogList/BlogList";
import Header from "@/components/__organisms/Header/Header";
import { fetchBlogs } from "@/redux/features/blog-slice";
import { fetchCategories } from "@/redux/features/categories-slice";
import { fetchToken } from "@/redux/features/token-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.token);

  const handleModal = (isActive: boolean) => {
    setIsModalActive(isActive);
  };

  const { loading, categories, errors } = useSelector(
    (state: RootState) => state.category
  );

  useEffect(() => {
    if (localStorage.getItem("token") === "") {
      dispatch<any>(fetchToken());
    } else {
      dispatch<any>(fetchCategories());
      dispatch<any>(fetchBlogs());
    }
  }, []);
  localStorage.setItem("token", token);

  return (
    <div>
      <Header handleModal={handleModal} isButtonActive={true} />
      <Banner />
      <CategoryFilter categories={categories} />
      {isModalActive && (
        <SignInModal
          handleModal={handleModal}
          setIsModalActive={setIsModalActive}
        />
      )}
      <BlogList />
    </div>
  );
}
