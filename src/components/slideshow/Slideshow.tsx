import * as React from "react";

import { slideshowData } from "../../constants/sampleData";
import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import BasicSlideshow from "./BasicSlideshow";

const Slideshow = () => (
  <Section title="Slideshows">
    <IntroPage title="Normal Slideshow" description="Normal Slideshow">
      <BasicSlideshow height="450px" imgSrcs={slideshowData} />
    </IntroPage>
  </Section>
);

export default Slideshow;
