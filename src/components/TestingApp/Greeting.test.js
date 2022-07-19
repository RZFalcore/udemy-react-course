import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello there text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...

    // Assert
    const helloElement = screen.getByText("Hello there!", { exact: true });
    expect(helloElement).toBeInTheDocument();
  });

  test("render Not Changed text if btn not clicked", () => {
    render(<Greeting />);

    const notChangedElem = screen.getByText("Not changed!");
    expect(notChangedElem).toBeInTheDocument();
  });

  test("render Changed if btn WAS clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const btnElem = screen.getByRole("button");
    userEvent.click(btnElem);
    // Assert
    const changedElem = screen.getByText("Changed!");
    expect(changedElem).toBeInTheDocument();
  });

  test("'Not changed' is not rendered while 'Change' clicked", () => {
    render(<Greeting />);

    const btnElem = screen.getByRole("button");
    userEvent.click(btnElem);

    const notChangedElem = screen.queryByText("Not changed!");
    expect(notChangedElem).toBeNull();
  });
});