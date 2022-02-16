import { deleteTodo, loadTodos } from "./actionsCreator";
import { actionsTypes } from "./actionsTypes";

describe("Given an actionCreator function", () => {
  describe("When loadTodos function is called", () => {
    test("Then it should return an object with type 'load-todos' and the object inside", () => {
      const fakeObject = { name: "hello" };
      const fakeType = actionsTypes.loadTodos;

      const expectedObject = { type: fakeType, todos: fakeObject };

      const action = loadTodos(fakeObject);

      expect(action).toEqual(expectedObject);
    });
  });

  describe("When deleteTodo function is called and recives an 'id'", () => {
    test("Then it should return an object with type 'delete-todo' and the id", () => {
      const fakeId = 1;
      const fakeType = actionsTypes.deleteTodo;

      const expectedObject = { type: fakeType, id: fakeId };

      const action = deleteTodo(fakeId);

      expect(action).toEqual(expectedObject);
    });
  });
});
