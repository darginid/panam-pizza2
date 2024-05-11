import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: "алфавиту",
    sortProperty: "title",
    type: 'asc',
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
        state.sort = action.payload;
      },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    }
  },
});

export const selectCategory = (state) => state.filter.categoryId;
export const selectSort = (state) => state.filter.sort;
export const selectSearch = (state) => state.filter.searchValue;

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
