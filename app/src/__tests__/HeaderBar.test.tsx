import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HeaderBar } from "../HeaderBar";

describe("HeaderBar", () => {
  beforeEach(() => {
    render(<HeaderBar />);
  });

  it("should contain one image", () => {
    expect(screen.getAllByRole("img").length).toBe(1);
  });

  it("should have alt text Logo", () => {
    const images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute("alt", "Logo");
  });
});
