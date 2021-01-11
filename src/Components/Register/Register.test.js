import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Register from "./Register";

describe(`Register component`, () => {
  it("renders the Component", () => {
    const wrapper = shallow(<Register />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
