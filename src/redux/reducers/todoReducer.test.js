import todoReducer from "./todoReducer";
import { loadTodosAction } from "../actions/actionsCreator";

describe("Given a todoReducen", () => {
  describe("When recives an action 'loadTodos' and a object inside an array", () => {
    test("Then it should return an array with the two an objects", () => {
      const newState = [{ name: "papita" }];
      const action = loadTodosAction(newState);

      const result = todoReducer([{ name: "pepito" }], action);

      const expectedOutput = [{ name: "papita" }];

      expect(result).toEqual(expectedOutput);
    });
  });

  describe("When it recive no action and a object inside an array", () => {
    test("Then it should return an equal array", () => {
      const fakeArray = [{ name: "pepito" }];
      const action = "any";

      const expectedOutput = [{ name: "pepito" }];

      const result = todoReducer(fakeArray, action);

      expect(result).toEqual(expectedOutput);
    });
  });
});
