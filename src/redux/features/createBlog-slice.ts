import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  imageName: "",
  imageUri: "",
  author: "",
  publish_date: "",
  categories: [],
  email: "",
};

export const createBlogSlice = createSlice({
  name: "createBlog",
  initialState,
  reducers: {
    setBlogTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setBlogDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setBlogImageName: (state, action: PayloadAction<string>) => {
      state.imageName = action.payload;
    },
    setBlogImageUri: (state, action: PayloadAction<string>) => {
      state.imageUri = action.payload;
    },
    setBlogAuthor: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setBlogPublishDate: (state, action: PayloadAction<string>) => {
      state.publish_date = action.payload;
    },
    setBlogCategories: (state, action: PayloadAction<[]>) => {
      state.categories = action.payload;
    },
    setBlogEmail: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
  },
});

export const {
  setBlogTitle,
  setBlogDescription,
  setBlogImageName,
  setBlogImageUri,
  setBlogAuthor,
  setBlogPublishDate,
  setBlogCategories,
  setBlogEmail,
} = createBlogSlice.actions;
export default createBlogSlice.reducer;
