import * as React from "react";

import { slideshowData } from "../../constants";
import BasicSlideshow from "./BasicSlideshow";

export default {
  title: "Slideshow",
  component: BasicSlideshow
};

export const _BasicSlideshow = () => (
  <BasicSlideshow height={`450px`} width={`450px`} imgSrcs={slideshowData}></BasicSlideshow>
);
