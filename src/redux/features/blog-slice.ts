import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import axios from "axios";
import { Blog } from "@/types/services";

interface StateType {
  loading: boolean;
  blogs: Blog[];
  errors: string | undefined;
}

const initialState: StateType = {
  loading: false,
  blogs: [],
  errors: "",
};

export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, { getState }) => {
    try {
      const { token } = (getState() as RootState).token;
      const response = await axios.get(
        "https://api.blog.redberryinternship.ge/api/blogs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
);

export const blogSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.errors = "";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.data;
        state.errors = "";
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.blogs = [];
        state.errors = action.error.message;
      });
  },
});

export default blogSlice.reducer;
