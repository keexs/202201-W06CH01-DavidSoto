import { actionsTypes } from "./actionsTypes";

export const loadTodos = (todos) => ({
  type: actionsTypes.loadTodos,
  todos,
});

export const deleteTodo = (id) => ({
  type: actionsTypes.deleteTodo,
  id,
});
