import { render, screen } from "@testing-library/react";
import TodoList from "./todoList";

describe("Given a TodoList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list todo", () => {
      render(<TodoList></TodoList>);
      const listLenght = 3;

      const expectedListLenght = screen.getAllByRole("listitem").length;

      expect(expectedListLenght).toBe(listLenght);
    });
  });
});
