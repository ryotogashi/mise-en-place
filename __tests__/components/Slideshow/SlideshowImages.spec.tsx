import * as React from "react";
import * as renderer from "react-test-renderer";

import { SlideshowImages } from "../../../src/components/Slideshow/SlideshowImages";

describe("Arrow test", () => {
  it("tests Arrow render correctly", () => {
    const slideshowImages = renderer.create(<SlideshowImages imgSrcs={["test", "test"]} />);

    expect(slideshowImages).toMatchSnapshot();
  });
});
