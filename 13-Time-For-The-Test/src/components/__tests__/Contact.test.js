import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should Contatct page Render", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should Button inside the Contact Component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should input name inside the Contact Component", () => {
  render(<Contact />);
  const input = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();
});
