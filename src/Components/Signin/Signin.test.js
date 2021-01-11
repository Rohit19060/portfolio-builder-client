import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Signin from "./Signin";

describe(`Signin component`, () => {
  it("renders the Component", () => {
    const wrapper = shallow(<Signin />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
