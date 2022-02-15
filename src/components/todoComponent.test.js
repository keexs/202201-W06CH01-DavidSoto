import { render, screen } from "@testing-library/react";
import Todo from "./todoComponent";

describe("Given a todoComponent", () => {
  describe("When it's rendered", () => {
    test("Then it should render the text 'something'", () => {
      render(<Todo></Todo>);
      const text = "something";

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
    test("Then ot should render a button with text 'delete'", () => {
      render(<Todo></Todo>);

      const expectedButton = screen.getByRole("button", { title: "delete" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
