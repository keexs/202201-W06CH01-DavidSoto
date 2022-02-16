import Todo from "./Todo";

const TodoList = ({ todos, deleteAction }) => {
  todos.map((todo) => {
    return todo;
  });

  return (
    <ul>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo}></Todo>;
      })}
    </ul>
  );
};
export default TodoList;
