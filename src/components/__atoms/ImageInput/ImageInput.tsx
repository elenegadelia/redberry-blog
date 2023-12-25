"use client";
import React, { ChangeEvent, useState } from "react";
import ImageUpload from "../../../../public/icons/ImageUpload";
import ImageIcon from "../../../../public/icons/ImageIcon";
import CloseIcon from "../../../../public/icons/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setBlogImageName,
  setBlogImageUri,
} from "@/redux/features/createBlog-slice";
import { RootState } from "@/redux/store";

const ImageInput = () => {
  const dispatch = useDispatch();
  const imageName = useSelector(
    (state: RootState) => state.createBlog.imageName
  );

  const blogReducer = useSelector((state: RootState) => state.createBlog);

  const handleImageDelete = () => {
    dispatch(setBlogImageName(""));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      dispatch(setBlogImageName(selectedImage.name));
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        dispatch(setBlogImageUri(base64String));
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  console.log(blogReducer);
  return (
    <div className="mt-10">
      <p className="text-primaryBlack text-sm font-medium">ატვირთეთ ფოტო</p>
      {imageName ? (
        <div className="w-full h-[56px] flex items-center justify-between bg-[#F2F2FA] rounded-xl mt-2 px-4">
          <div className="flex items-center gap-[12px]">
            <ImageIcon />
            <p className="text-primaryBlack text-sm">{imageName}</p>
          </div>
          <div onClick={handleImageDelete} className="cursor-pointer">
            <CloseIcon />
          </div>
        </div>
      ) : (
        <label htmlFor="imageInput">
          <div className="w-full h-[180px] flex flex-col items-center justify-center rounded-xl border-dashed border-[#85858D] border-[1px] bg-[#F4F3FF] mt-2 relative">
            <ImageUpload />
            <p className="text-primaryBlack text-sm mt-6">
              ჩააგდეთ ფაილი აქ ან{" "}
              <span className="underline font-medium cursor-pointer">
                აირჩიეთ ფაილი
              </span>
            </p>
            <input
              type="file"
              id="imageInput"
              className="w-full h-full absolute invisible"
              onChange={handleImageChange}
            />
          </div>
        </label>
      )}
    </div>
  );
};

export default ImageInput;
