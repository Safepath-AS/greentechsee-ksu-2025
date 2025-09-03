import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Fallback } from "../Fallback";

describe("Fallback", () => {
  // mock FallbackProps

  const props = {
    error: new Error("Test error"),
    resetErrorBoundary: jest.fn(),
  };

  beforeEach(() => {
    render(<Fallback {...props} />);
  });

  it("should render fallback content", () => {
    expect(screen.getByText("Something went wrong:")).toBeInTheDocument();
  });

  it("should have a button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should have the label Try again on the button", () => {
    expect(screen.getByRole("button")).toHaveTextContent("Try again");
  });
});
