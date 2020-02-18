import * as React from "react";

import SideNavigation from "./SideNavigation";
import { navigationItems } from "../../constants/sampleData";

export default {
  title: "Navigation",
  component: SideNavigation
};

export const _SideNavigation = () => (
  <SideNavigation logo={"logo item"} navHeight="100%" navWidth="25%" items={navigationItems}></SideNavigation>
);
