import todoReducer from "./todoReducer";
import { deleteTodo, loadTodos } from "../actions/actionsCreator";

describe("Given a todoReducen", () => {
  describe("When recives an action 'loadTodos' and a object inside an array", () => {
    test("Then it should return an array with the two an objects", () => {
      const newState = [{ name: "papita" }];
      const action = loadTodos(newState);

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
  describe("When recives an action 'delete-todo' and an array of objects with id", () => {
    describe("Then it should return the array without the object with the id recived", () => {
      const fakeArray = [
        { id: 1, name: "papito" },
        { id: 2, name: "pepito" },
        { id: 3, name: "pipito" },
        { id: 4, name: "popito" },
        { id: 5, name: "pupito" },
      ];

      const expectedFakeArray = [
        { id: 1, name: "papito" },
        { id: 2, name: "pepito" },
        { id: 3, name: "pipito" },
        { id: 5, name: "pupito" },
      ];
      const idToDelete = 4;
      const action = deleteTodo;
      const result = todoReducer(fakeArray, action(idToDelete));

      expect(result).toEqual(expectedFakeArray);
    });
  });
  describe("When it render", () => {
    test("Then it should return length 0", () => {
      const newProjects = todoReducer();

      expect(newProjects).toHaveLength(0);
    });
  });
});
