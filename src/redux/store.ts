import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import categoriesSlice from "./features/categories-slice";

export const store = configureStore({
  reducer: {
    authReducer,
    category: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
