import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  email: string;
};

const initialState = {
  value: {
    isAuth: false,
    email: "",
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          email: action.payload,
        },
      };
    },
  },
});

export const { logIn } = auth.actions;
export default auth.reducer;
