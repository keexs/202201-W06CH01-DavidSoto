const Todo = ({ todo: { text, done } }) => {
  return (
    <>
      <li>
        {text}
        <button>delete</button>
      </li>
    </>
  );
};

export default Todo;
