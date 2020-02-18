import * as React from "react";
import * as renderer from "react-test-renderer";

import { CustomCheckbox } from "../../../src/components/inputs/CustomCheckbox";

describe("CustomCheckbox test", () => {
  it("tests CustomCheckbox renders correctly ", () => {
    const customCheckbox = renderer.create(<CustomCheckbox />).toJSON();
    expect(customCheckbox).toMatchSnapshot();
  });
});
