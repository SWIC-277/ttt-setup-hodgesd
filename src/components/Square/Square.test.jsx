import { render, screen } from "@testing-library/react";
import Square from "./Square";

it("renders a square with the correct marker ('x' or 'o')", () => {
  // Arrange
  render(<Square marker="X" />);

  // Act
  const square = screen.getByRole("button", { name: "X" });

  // Assert
  expect(square).toBeInTheDocument();
});
