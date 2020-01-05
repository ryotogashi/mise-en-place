import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

const List = () => (
  <Section title="Navigations">
    <IntroPage title="Side Navigation" description="Side navigation">
      <SideNavigation
        logo={"logo item"}
        navHeight="100%"
        navWidth="50%"
        items={[
          ["item 1", null],
          ["item 2", ["item 2 child 1", "item 2 child 2", "item 2 child 3"]],
          ["item 3", null],
          ["item 4", ["item 4 child 1", "item 4 child 2", "item 4 child 3"]]
        ]}
      />
    </IntroPage>

    <IntroPage title="Top Navigation" description="Top navigation">
      <TopNavigation
        logo={"logo item"}
        items={["item 1", "item 2", "item 3", "item 4"]}
      />
    </IntroPage>
  </Section>
);

export default List;
