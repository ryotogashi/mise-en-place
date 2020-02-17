import * as React from "react";
import * as renderer from "react-test-renderer";

import BasicSlideshow from "../BasicSlideshow";

describe("Arrow test", () => {
  it("tests Arrow render correctly", () => {
    const basicSlideshow = renderer.create(<BasicSlideshow imgSrcs={["test", "test"]} />);

    expect(basicSlideshow).toMatchSnapshot();
  });
});
