import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions/actionsCreator";

const Todo = ({ todo: { id, text } }) => {
  const dispatch = useDispatch();
  const drawDelete = dispatch(deleteTodo(id));
  return (
    <>
      <li>
        {text}
        <button onClick={drawDelete}>delete</button>
      </li>
    </>
  );
};

export default Todo;
