import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "formSlice",

  initialState: {
    data: {
      text: "",
    },
  },

  reducers: {
    updateText: {
      reducer: (state, action) => {
        state.data.text = action.payload;
      },
      //   prepare: () => {},
    },
  },
});

export const { updateText, updateColor } = formSlice.actions;
export default formSlice.reducer;
