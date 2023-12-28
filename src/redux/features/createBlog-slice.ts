import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stateType {
  title: string;
  description: string;
  imageName: string;
  image: File | undefined;
  author: string;
  publish_date: string;
  categories: number[];
  email: string;
}

const initialState: stateType = {
  title: "",
  description: "",
  imageName: "",
  image: undefined,
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
    setBlogImage: (state, action: PayloadAction<File>) => {
      state.image = action.payload;
    },
    setBlogAuthor: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setBlogPublishDate: (state, action: PayloadAction<string>) => {
      state.publish_date = action.payload;
    },
    setBlogCategories: (state, action: PayloadAction<number>) => {
      state.categories.push(action.payload);
    },
    setBlogEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    deleteCategory: (state, action: PayloadAction<number>) => {
      const categoryId = action.payload;
      state.categories = state.categories.filter((id) => id !== categoryId);
    },
    resetBlogState: (state) => {
      (state.title = ""),
        (state.description = ""),
        (state.imageName = ""),
        (state.image = undefined),
        (state.author = ""),
        (state.publish_date = ""),
        (state.categories = []),
        (state.email = "");
    },
  },
});

export const {
  setBlogTitle,
  setBlogDescription,
  setBlogImageName,
  setBlogAuthor,
  setBlogPublishDate,
  setBlogCategories,
  setBlogImage,
  setBlogEmail,
  resetBlogState,
  deleteCategory,
} = createBlogSlice.actions;
export default createBlogSlice.reducer;
