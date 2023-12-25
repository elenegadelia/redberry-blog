"use client";
import CustomBlogInput from "@/components/__atoms/CustomBlogInput/CustomBlogInput";
import ImageInput from "@/components/__atoms/ImageInput/ImageInput";
import { setBlogAuthor, setBlogTitle } from "@/redux/features/createBlog-slice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateBlogForm = () => {
  const dispatch = useDispatch();

  const blogValues = useSelector((state: RootState) => state.createBlog);

  return (
    <div className="max-w-[600px] mx-auto mt-10">
      <h1 className="text-primaryBlack text-[32px] font-bold">
        ბლოგის დამატეტება
      </h1>
      <ImageInput />
      <div className="flex w-full justify-between mt-6">
        <CustomBlogInput
          name="author"
          value={blogValues.author}
          onChange={(e) => dispatch(setBlogAuthor(e.target.value))}
          height="44px"
          label="ავტორი *"
          placeholder="ტატო კვარაცხელია"
          errors={false}
          width="288px"
        />
        <CustomBlogInput
          name="title"
          value={blogValues.title}
          onChange={(e) => dispatch(setBlogTitle(e.target.value))}
          height="44px"
          label="სათაური *"
          placeholder="ტატო კვარაცხელია"
          errors={false}
          width="288px"
        />
      </div>
    </div>
  );
};

export default CreateBlogForm;
