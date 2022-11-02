import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import formSlice from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    forms: formSlice,
  },
});
