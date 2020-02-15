import * as React from "react";
import * as renderer from "react-test-renderer";

import IconButton from "../IconButton";

describe("IconButton test", () => {
  it("tests IconButton renders correctly ", () => {
    const iconButton = renderer.create(<IconButton img="xxx.png" />).toJSON();
    expect(iconButton).toMatchSnapshot();
  });
});
