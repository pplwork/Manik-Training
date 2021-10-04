import { render, screen } from "@testing-library/react";
import Header from "../Header";
test("render same header as passed in prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
