import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stateType {
  filteredCategories: number[];
}

const initialState: stateType = {
  filteredCategories: [],
};

export const categoryFilterSlice = createSlice({
  name: "createBlog",
  initialState,
  reducers: {
    setFilteredCategory: (state, action: PayloadAction<number>) => {
      const categoryId = action.payload;
      if (!state.filteredCategories.includes(categoryId)) {
        state.filteredCategories.push(categoryId);
      }
    },
    removeFilteredCategory: (state, action: PayloadAction<number>) => {
      const categoryId = action.payload;
      state.filteredCategories = state.filteredCategories.filter(
        (id) => id !== categoryId
      );
    },
  },
});

export const { setFilteredCategory, removeFilteredCategory } =
  categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;
