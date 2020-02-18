import * as React from "react";
import * as renderer from "react-test-renderer";

import SquareIconButton from "../SquareIconButton";

describe("SquareIconButton test", () => {
  it("tests SquareIconButton renders correctly ", () => {
    const squareIconButton = renderer.create(<SquareIconButton />).toJSON();
    expect(squareIconButton).toMatchSnapshot();
  });
});
