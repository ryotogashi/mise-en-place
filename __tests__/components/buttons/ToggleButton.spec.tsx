import * as React from "react";
import * as renderer from "react-test-renderer";

import { ToggleButton } from "../../../src/components/buttons/ToggleButton";

describe("ToggleButton test", () => {
  it("tests ToggleButton renders correctly ", () => {
    const toggleButton = renderer.create(<ToggleButton />).toJSON();
    expect(toggleButton).toMatchSnapshot();
  });
});
