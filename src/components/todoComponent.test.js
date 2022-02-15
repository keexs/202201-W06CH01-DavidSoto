import { render, screen } from "@testing-library/react";
import Todo from "./todoComponent";

describe("Given a todoComponent", () => {
  describe("When it's rendered", () => {
    test("Then it should render the text 'something'", () => {
      const todo = {
        id: 1,
        text: "blabla",
        done: false,
      };

      render(<Todo todo={todo}></Todo>);
      const text = todo.text;

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
    test("Then ot should render a button with text 'delete'", () => {
      const todo = {
        id: 1,
        text: "blabla",
        done: false,
      };
      render(<Todo todo={todo}></Todo>);

      const expectedButton = screen.getByRole("button", { title: "delete" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
