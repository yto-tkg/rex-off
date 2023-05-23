import { configureStore } from "@reduxjs/toolkit";
import todosReducers from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducers,
  },
});
