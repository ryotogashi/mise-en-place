import * as React from "react";

import TopNavigation from "./TopNavigation";
import { navigationItems2 } from "../../constants/sampleData";

export default {
  title: "Navigation",
  component: TopNavigation
};

export const _TopNavigation = () => (
  <TopNavigation logo={"logo item"} navHeight="100%" items={navigationItems2}></TopNavigation>
);
