import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";
import { navigationItems, navigationItems2 } from "../../constants/sampleData";

const List = () => (
  <Section title="Navigations">
    <IntroPage title="Side Navigation" description="Side navigation">
      <SideNavigation logo={"logo item"} navHeight="100%" navWidth="50%" items={navigationItems} />
    </IntroPage>

    <IntroPage title="Top Navigation" description="Top navigation">
      <TopNavigation logo={"logo item"} items={navigationItems2} />
    </IntroPage>
  </Section>
);

export default List;
