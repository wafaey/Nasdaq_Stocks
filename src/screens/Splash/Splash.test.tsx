import { render, screen } from "@testing-library/react";
import Splash from "./Splash";

describe("when rendered with a image", () => {
  it("should has Nasdaq logo", () => {
    render(<Splash />);
    expect(screen.getByAltText(/Nasdaq Logo/)).toBeInTheDocument();
  });
});

describe("when rendered with a developer name", () => {
  it("should has a name", () => {
    render(<Splash />);
    expect(screen.getByText(/Omar Wafaey/)).toBeInTheDocument();
  });
});
