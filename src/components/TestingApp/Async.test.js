import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Async from "./Async";

describe("Async component", () => {
  test("list was fetched successfully", async () => {
    render(<Async />);

    const listElems = await screen.findAllByRole("listitem");
    expect(listElems).not.toHaveLength(0);
  });
});
