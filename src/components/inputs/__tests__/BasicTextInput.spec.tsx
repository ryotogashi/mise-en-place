import * as React from "react";
import * as renderer from "react-test-renderer";

import BasicTextInput from "../BasicTextInput";

describe("BasicTextInput test", () => {
  it("tests BasicTextInput renders correctly ", () => {
    const basicTextInput = renderer.create(<BasicTextInput />).toJSON();
    expect(basicTextInput).toMatchSnapshot();
  });
});
