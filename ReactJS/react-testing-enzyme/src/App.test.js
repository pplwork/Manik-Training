import { render, screen } from "@testing-library/react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("renders heading of the app", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });
  test("renders button successfuly", () => {
    expect(wrapper.find("#inc-btn").text()).toBe("Increment");
  });
  test("render initial value of state in div", () => {
    expect(wrapper.find("#counter-val").text()).toBe("0");
  });
  test("render the click event of increment btn", () => {
    wrapper.find("#inc-btn").simulate("click");
    expect(wrapper.find("#counter-val").text()).toBe("1");
  });
  test("render the click event of decrement btn", () => {
    wrapper.find("#inc-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-val").text()).toBe("0");
  });
  test("value should not be less than 0", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-val").text()).toBe("0");
  });
});
