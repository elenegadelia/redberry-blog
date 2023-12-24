import { SingleBlog } from "@/types/services";
import { FETCH_BLOG } from "@/utils/constants/requests";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

interface StateType {
  loading: boolean;
  singleBlog: SingleBlog | null;
  errors: string | undefined;
}

const initialState: StateType = {
  loading: false,
  singleBlog: null,
  errors: "",
};

export const fetchBlogById = createAsyncThunk(
  "blogById/fetchBlogById",
  async (id: number, { getState }) => {
    try {
      const { token } = (getState() as RootState).token;
      const url = FETCH_BLOG(id);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
);

export const singleBlogSlice = createSlice({
  name: "singleBlog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
        state.errors = "";
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleBlog = action.payload;
        state.errors = "";
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = false;
        state.singleBlog = null;
        state.errors = action.error.message;
      });
  },
});

export default singleBlogSlice.reducer;
