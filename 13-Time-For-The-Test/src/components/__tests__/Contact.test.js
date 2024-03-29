import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page Test Case", () => {
  it("should Contatct page Render", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load Button inside the Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside the Contact Component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  it("should load 2 input box inside contact componnet", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
