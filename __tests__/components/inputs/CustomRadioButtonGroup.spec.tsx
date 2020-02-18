import * as React from "react";
import * as renderer from "react-test-renderer";

import { radioData } from "../../../src/constants/sampleData";
import CustomRadioButtonGroup from "../../../src/components/inputs/CustomRadioButtonGroup";

describe("CustomRadioButtonGroup test", () => {
  it("tests CustomRadioButtonGroup renders correctly ", () => {
    const customRadioButtonGroup = renderer.create(<CustomRadioButtonGroup labels={radioData} />).toJSON();
    expect(customRadioButtonGroup).toMatchSnapshot();
  });
});
