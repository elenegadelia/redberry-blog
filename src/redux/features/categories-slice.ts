import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import axios from "axios";
import { Category } from "@/types/services";
import { FETCH_CATEGORIES } from "@/utils/constants/requests";

interface StateType {
  loading: boolean;
  categories: Category[];
  errors: string | undefined;
}

const initialState: StateType = {
  loading: false,
  categories: [],
  errors: "",
};

export const fetchCategories = createAsyncThunk<Category[]>(
  "category/fetchCategories",
  async (_, { getState }) => {
    try {
      const { token } = (getState() as RootState).token;
      const response = await axios.get<{ data: Category[] }>(FETCH_CATEGORIES, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
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
        state.categories = action.payload;
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
