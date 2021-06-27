import { createSlice } from "@reduxjs/toolkit";

import { addTodo } from ".";

const slice = createSlice({
  name: "text",

  initialState: "",

  reducers: {
    setText(state, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [addTodo.fulfilled](state, action) {
      return "";
    },
  },
});

export default slice.reducer;

export const { setText } = slice.actions;
