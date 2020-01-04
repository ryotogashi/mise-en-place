import * as React from "react";

import SectionTitle from "../SectionTitle";
import { SectionDiv } from "../constants";
import SideNavigation from "./SideNavigation";

const List = () => (
  <SectionDiv>
    <SectionTitle title="Navigation" />
    <SideNavigation
      logo={"logo item"}
      items={["item 1", "item 2", "item 3", "item 4"]}
    />
  </SectionDiv>
);

export default List;
