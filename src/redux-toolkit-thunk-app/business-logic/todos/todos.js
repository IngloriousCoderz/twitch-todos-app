import { createSlice } from "@reduxjs/toolkit";

import { fetchTodos } from ".";

const slice = createSlice({
  name: "todos",

  initialState: [],

  reducers: {},

  extraReducers: {
    [fetchTodos.fulfilled](state, action) {
      return action.payload;
    },
  },
});

export default slice.reducer;
