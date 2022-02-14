import { loadTodosAction } from "./actionsCreator";
import { actionsTypes } from "./actionsTypes";

describe("Given an actionCreator function", () => {
  describe("When loadTodos function is called", () => {
    test("Then it should return an object with type 'load-todos' and the object inside", () => {
      const fakeObject = { name: "hello" };
      const fakeType = actionsTypes.loadTodos;

      const expectedObject = { type: fakeType, todos: fakeObject };

      const action = loadTodosAction(fakeObject);

      expect(action).toEqual(expectedObject);
    });
  });
});
