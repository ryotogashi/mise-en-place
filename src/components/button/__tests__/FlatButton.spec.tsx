import * as React from "react";
import * as renderer from "react-test-renderer";

import FlatButton from "../FlatButton";

describe("FlatButton test", () => {
  it("tests FlatButton renders correctly ", () => {
    const flatButton = renderer.create(<FlatButton />).toJSON();
    expect(flatButton).toMatchSnapshot();
  });
});
