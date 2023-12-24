import { FETCH_TOKEN } from "@/utils/constants/requests";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface StateType {
  loading: boolean;
  token: string;
  errors: string | undefined;
}

const initialState: StateType = {
  loading: false,
  token: localStorage.getItem("token") || "",
  errors: "",
};

export const fetchToken = createAsyncThunk("token/fetchToken", async () => {
  try {
    const response = await axios.get(FETCH_TOKEN);
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
});

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.loading = true;
        state.errors = "";
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.errors = "";
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.token = "";
        state.errors = action.error.message;
      });
  },
});

export default tokenSlice.reducer;
