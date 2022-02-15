import { render, screen } from "@testing-library/react";
import TodoList from "./todoList";

describe("Given a TodoList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list todo", () => {
      const todos = [
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
      ];

      render(<TodoList todos={todos}></TodoList>);
      const listLenght = todos.length;

      const expectedListLenght = screen.getAllByRole("listitem").length;

      expect(expectedListLenght).toBe(listLenght);
    });
  });
});
