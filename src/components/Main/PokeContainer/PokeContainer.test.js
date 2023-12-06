import React from "react";
import { shallow } from "enzyme";
import PokeContainer from "./PokeContainer";

describe("PokeContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokeContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
