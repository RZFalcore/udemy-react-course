import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Greeting from "./Greeting";

test("renders Hello there text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...

  // Assert
  const helloElement = screen.getByText("Hello there!", { exact: true });
  expect(helloElement).toBeInTheDocument();
});
