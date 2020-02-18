import * as React from "react";
import * as renderer from "react-test-renderer";

import { LeftArrow, RightArrow } from "../../../src/components/slideshows/Arrow";

describe("Arrow test", () => {
  it("tests Arrow render correctly", () => {
    const leftArrow = renderer.create(<LeftArrow />);
    const rightArrow = renderer.create(<RightArrow />);

    expect(leftArrow).toMatchSnapshot();
    expect(rightArrow).toMatchSnapshot();
  });
});
