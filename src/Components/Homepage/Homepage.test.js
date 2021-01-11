import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Homepage from "./Homepage";

describe(`Homepage component`, () => {
  it("renders the Component", () => {
    const wrapper = shallow(<Homepage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
