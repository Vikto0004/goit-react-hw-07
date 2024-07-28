import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilters = (state) => state.filters.name;
// export const selectFilter = (state) => {};

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
