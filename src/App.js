import TodoList from "./components/todoList";

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
  return (
    <>
      <h1>*Awesome super ToDo tittle goes here*</h1>
      <TodoList todos={todosData}></TodoList>
    </>
  );
}

export default App;
