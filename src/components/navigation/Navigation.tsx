import * as React from "react";

import Section from "../Section";
import SideNavigation from "./SideNavigation";

const List = () => (
  <Section title="Navigation">
    <SideNavigation
      logo={"logo item"}
      items={["item 1", "item 2", "item 3", "item 4"]}
    />
  </Section>
);

export default List;
