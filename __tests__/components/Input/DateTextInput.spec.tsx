import * as React from "react";
import * as renderer from "react-test-renderer";

import { DateTextInput } from "../../../src/components/Input/DateTextInput";

describe("DateTextInput test", () => {
  it("tests DateTextInput renders correctly ", () => {
    const dateTextInput = renderer.create(<DateTextInput />).toJSON();
    expect(dateTextInput).toMatchSnapshot();
  });
});
