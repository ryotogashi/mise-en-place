import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import SpinLoader from "./SpinLoader";

const Loaders = () => (
  <Section title="Loaders">
    <IntroPage title="SpinLoader" description="">
      <SpinLoader />
    </IntroPage>
  </Section>
);

export default Loaders;
