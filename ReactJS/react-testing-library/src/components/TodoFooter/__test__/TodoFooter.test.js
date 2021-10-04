import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";
const MockTodoFooter = () => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={5} />
    </BrowserRouter>
  );
};
test("render same header as passed in prop", () => {
  render(<MockTodoFooter />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});
