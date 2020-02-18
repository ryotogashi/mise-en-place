import * as React from "react";
import * as renderer from "react-test-renderer";

import BasicButton from "../../../src/components/buttons/BasicButton";

describe("BasicButton test", () => {
  it("tests BasicButton renders correctly ", () => {
    const basicButton = renderer.create(<BasicButton />).toJSON();
    expect(basicButton).toMatchSnapshot();
  });
});
