import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import categoriesSlice from "./features/categories-slice";
import tokenSlice from "./features/token-slice";
import blogSlice from "./features/blog-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoriesSlice,
    token: tokenSlice,
    blog: blogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
