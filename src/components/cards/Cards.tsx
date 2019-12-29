import * as React from "react";

import SectionTitle from "../SectionTitle";
import { SectionDiv } from "../constants";
import SimpleCard from "./SimpleCard";
import PictureCard from "./PictureCard";

const Cards = () => (
  <SectionDiv>
    <SectionTitle>Card</SectionTitle>
    <SimpleCard
      title="Should we start"
      detail="Should we start class now, or should we wait for everyone to get here? She did her best to help him. Rock music approaches at high velocity."
    />
    <PictureCard
      title="Should we start"
      subtitle="Should we start class now, or should we wait for everyone to get here? She did her best to help him. Rock music approaches at high velocity."
      imgSrc="/public/assets/img-for-card.jpg"
    />
  </SectionDiv>
);

export default Cards;
