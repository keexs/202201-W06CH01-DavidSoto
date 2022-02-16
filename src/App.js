import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TodoList from "./components/todoList";
import { loadTodos } from "./redux/actions/actionsCreator";

export const todosData = [
  {
    id: 1,
    text: "blabla",
    done: false,
  },
  {
    id: 2,
    text: "something",
    done: false,
  },
  {
    id: 3,
    text: "hug your wife",
    done: false,
  },
];

function App() {
  const todoState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos(todosData));
  }, [dispatch]);

  return (
    <>
      <h1>*Awesome super ToDo tittle goes here*</h1>
      <TodoList todos={todosData}></TodoList>
    </>
  );
}

export default App;
