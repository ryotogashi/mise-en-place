import * as React from "react";
import * as renderer from "react-test-renderer";

import { FlatButton } from "../../../src/components/Button/FlatButton";

describe("FlatButton test", () => {
  it("tests FlatButton renders correctly ", () => {
    const flatButton = renderer.create(<FlatButton />).toJSON();
    expect(flatButton).toMatchSnapshot();
  });
});
