"use client";
import Banner from "@/components/__molecules/Banner/Banner";
import CategoryFilter from "@/components/__molecules/CategoryFilter/CategoryFilter";
import SignInModal from "@/components/__molecules/SignInModal/SignInModal";
import Header from "@/components/__organisms/Header/Header";
import { fetchCategories } from "@/redux/features/categories-slice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { loading, categories, errors } = useSelector(
    (state: RootState) => state.category
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <CategoryFilter categories={categories} />
      <SignInModal />
    </div>
  );
}
