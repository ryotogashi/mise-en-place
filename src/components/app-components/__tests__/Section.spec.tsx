import * as React from "react";
import * as renderer from "react-test-renderer";

import Section from "../Section";

describe("Section test", () => {
  it("tests Section renders correctly ", () => {
    const section = renderer.create(<Section title="test">test</Section>).toJSON();
    expect(section).toMatchSnapshot();
  });
});
