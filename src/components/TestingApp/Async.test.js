import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Async from "./Async";

describe("Async component", () => {
  test("list was fetched successfully", async () => {
      window.fetch = jest.fn();
      window.fetch.mockResolvedValueOnce({
        json: async () => [{ id: 1, title: "Firs post" }],
      });
      render(<Async />);

    const listElems = await screen.findAllByRole("listitem");
    expect(listElems).not.toHaveLength(0);
  });
});
