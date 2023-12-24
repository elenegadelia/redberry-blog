import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@/redux/store";
import { API_BASE, AUTH_LOGIN } from "@/utils/constants/requests";

interface AuthState {
  isAuth: boolean;
  email: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  email: "",
  loading: false,
  error: null,
};

export const userLogin = createAsyncThunk(
  "auth/sentAuth",
  async (email: string, { getState, rejectWithValue }) => {
    try {
      const { token } = (getState() as RootState).token;
      const response = await axios.post(
        AUTH_LOGIN,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "An error occurred"
      );
    }
  }
);
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.email = action.payload;
    },
    resetAuthState: (state) => {
      state.isAuth = false;
      state.email = "";
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logIn, resetAuthState } = auth.actions;
export default auth.reducer;
