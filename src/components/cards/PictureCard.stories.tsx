import * as React from "react";

import PictureCard from "./PictureCard";
import { cardData } from "../../constants/sampleData";

export default {
  title: "Card",
  component: PictureCard
};

export const _PictureCard = () => (
  <PictureCard imgSrc={cardData.cardImg} width="350px" height="230px">
    <h2>picture card</h2>
    <p>picture card discrition</p>
  </PictureCard>
);
