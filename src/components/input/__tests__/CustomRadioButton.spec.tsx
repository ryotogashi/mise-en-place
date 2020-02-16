import * as React from "react";
import * as renderer from "react-test-renderer";

import CustomRadioButton from "../CustomRadioButton";

describe("CustomRadioButton test", () => {
  it("tests CustomRadioButton renders correctly ", () => {
    const customRadioButton = renderer.create(<CustomRadioButton />).toJSON();
    expect(customRadioButton).toMatchSnapshot();
  });
});
