import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface StateType {
  loading: boolean;
  categories: Category[];
  errors: string | undefined;
}

interface Category {
  id: number;
  title: string;
  text_color: string;
  background_color: string;
}

const initialState: StateType = {
  loading: false,
  categories: [],
  errors: "",
};

export const fetchCategories = createAsyncThunk<Category[]>(
  "category/fetchCategories",
  async () => {
    try {
      const response = await axios.get<Category[]>(
        "https://api.blog.redberryinternship.ge/api/categories"
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.errors = "";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
        state.errors = "";
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.categories = [];
        state.errors = action.error.message;
      });
  },
});

export default categorySlice.reducer;
