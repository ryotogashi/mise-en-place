import * as React from "react";
import * as renderer from "react-test-renderer";

import Avatar from "../Avatar";

describe("Avatar test", () => {
  it("tests Avatar renders correctly ", () => {
    const avatar = renderer.create(<Avatar src={"img"} />).toJSON();

    expect(avatar).toMatchSnapshot();
  });
});
