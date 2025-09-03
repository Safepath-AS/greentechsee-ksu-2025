import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LabelCard } from "../TagFilter";

describe("Fallback", () => {
  beforeEach(() => {
    render(<LabelCard />);
  });

  it("should render label text", () => {
    expect(screen.getByText("Dine etikketer")).toBeInTheDocument();
  });
});
