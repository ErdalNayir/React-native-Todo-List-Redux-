import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",

  initialState: {
    todos: [],
  },

  reducers: {
    addTodos: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: ({ description }) => {
        return {
          payload: {
            id: nanoid(),
            description,
            completed: false,
          },
        };
      },
    },
    updateTodo: {
      reducer: (state, action) => {
        state.todos.map((todo) =>
          todo.id == action.payload ? (todo.completed = true) : ""
        );
      },
    },
    removeCompletedTodo: {
      reducer: (state) => {
        state.todos = state.todos.filter((todo) => !todo.completed);
      },
    },
  },
});

export const { addTodos, updateTodo, removeCompletedTodo } = todoSlice.actions;
export default todoSlice.reducer;
