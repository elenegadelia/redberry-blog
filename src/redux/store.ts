import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use your preferred storage

import authReducer from "./features/auth-slice";
import categoriesSlice from "./features/categories-slice";
import tokenSlice from "./features/token-slice";
import blogSlice from "./features/blog-slice";
import singleBlogSlice from "./features/singleBlog-slice";
import createBlogSlice from "./features/createBlog-slice";
import categoryFilterSlice from "./features/categoryFilter-slice";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoriesSlice,
  token: tokenSlice,
  blog: blogSlice,
  singleBlog: singleBlogSlice,
  createBlog: createBlogSlice,
  categoryFilter: categoryFilterSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["createBlog", "auth", "categoryFilter", "token"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor };
