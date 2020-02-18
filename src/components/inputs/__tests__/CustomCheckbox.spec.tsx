import * as React from "react";
import * as renderer from "react-test-renderer";

import CustomCheckbox from "../CustomCheckbox";

describe("CustomCheckbox test", () => {
  it("tests CustomCheckbox renders correctly ", () => {
    const customCheckbox = renderer.create(<CustomCheckbox />).toJSON();
    expect(customCheckbox).toMatchSnapshot();
  });
});
