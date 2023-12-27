"use client";
import CustomBlogInput from "@/components/__atoms/CustomBlogInput/CustomBlogInput";
import CustomDropdown from "@/components/__atoms/CustomDropdown/CustomDropdown";
import ImageInput from "@/components/__atoms/ImageInput/ImageInput";
import PrimaryButton from "@/components/__atoms/PrimaryButton/PrimaryButton";
import {
  resetBlogState,
  setBlogAuthor,
  setBlogDescription,
  setBlogEmail,
  setBlogPublishDate,
  setBlogTitle,
} from "@/redux/features/createBlog-slice";
import { RootState } from "@/redux/store";
import { CREATE_BLOG } from "@/utils/constants/requests";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface createBlogFormProps {
  setIsModalActive: (isActive: boolean) => void;
}

const CreateBlogForm = ({ setIsModalActive }: createBlogFormProps) => {
  const dispatch = useDispatch();

  const [isAllVallsPassed, setIsAllVallsPassed] = useState(false);
  const emailPattern = /@redberry\.ge$/i;
  const blogValues = useSelector((state: RootState) => state.createBlog);
  useEffect(() => {
    const isValid =
      blogValues.title.length >= 2 &&
      blogValues.description.length >= 2 &&
      blogValues.author.length > 4 &&
      blogValues.author.split(" ").length >= 2 &&
      (blogValues.email === "" || emailPattern.test(blogValues.email)) &&
      blogValues.categories.length >= 1 &&
      blogValues.publish_date !== "";
    setIsAllVallsPassed(isValid);
  }, [blogValues]);

  const createBlog = async () => {
    const formData = new FormData();
    formData.append("title", blogValues.title);
    formData.append("description", blogValues.description);
    if (blogValues.image instanceof File) {
      const blob = new Blob([blogValues.image], {
        type: blogValues.image.type,
      });
      formData.append("image", blob, blogValues.image.name);
    }
    formData.append("author", blogValues.author);
    formData.append("publish_date", blogValues.publish_date);
    formData.append("categories", JSON.stringify(blogValues.categories));
    formData.append("email", blogValues.email);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(CREATE_BLOG, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) {
        dispatch<any>(resetBlogState());
        setIsModalActive(true);
      }
    } catch (error) {
      console.error("error", error);
      throw new Error("failed");
    }
  };
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
      <div className="mt-6">
        <CustomBlogInput
          name="description"
          value={blogValues.description}
          onChange={(e) => dispatch(setBlogDescription(e.target.value))}
          height="124px"
          width="600px"
          label="აღწერა *"
          placeholder="შეიყვანეთ აღწერა"
          errors={false}
        />
      </div>
      <div className="flex justify-between item-center mt-6">
        <CustomBlogInput
          name="publish_date"
          value={blogValues.publish_date}
          onChange={(e) => dispatch(setBlogPublishDate(e.target.value))}
          height="44px"
          width="288px"
          label="გამოქვეყნების თარიღი *"
          placeholder="12/12/2023"
          errors={false}
        />
        <CustomDropdown />
      </div>
      <div className="mt-[24px]">
        <CustomBlogInput
          name="email"
          value={blogValues.email}
          onChange={(e) => dispatch(setBlogEmail(e.target.value))}
          height="44px"
          width="288px"
          label="ელ-ფოსტა *"
          placeholder="Example@redberry.ge"
          errors={false}
        />
      </div>
      <PrimaryButton
        onclick={createBlog}
        disabled={!isAllVallsPassed}
        text="შესვლა"
        styles="w-[432px] h-[40px] mt-[24px]"
      />
    </div>
  );
};

export default CreateBlogForm;
