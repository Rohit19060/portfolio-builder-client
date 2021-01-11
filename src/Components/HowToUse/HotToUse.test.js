import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import HowToUse from "./HowToUse";

describe(`HowToUse component`, () => {
  it("renders the Component", () => {
    const wrapper = shallow(<HowToUse />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
