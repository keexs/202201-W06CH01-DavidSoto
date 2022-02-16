import { actionsTypes } from "../actions/actionsTypes";

const todoReducer = (todos = [], action = {}) => {
  let newTodos;

  switch (action.type) {
    case actionsTypes.loadTodos:
      newTodos = [...action.todos];
      break;

    case actionsTypes.deleteTodo:
      newTodos = todos.filter((todo) => todo.id !== action.id);
      break;

    default:
      newTodos = [...todos];
  }
  return newTodos;
};

export default todoReducer;
