import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import SimpleCard from "./BasicCard";
import PictureCard from "./PictureCard";
import { cardData } from "../constants";

const Cards = () => (
  <Section title="Cards">
    <IntroPage title="Basic Card" description="Normal card">
      <SimpleCard>
        <h2>{cardData.title}</h2>
        <p>{cardData.content}</p>
      </SimpleCard>
    </IntroPage>
    <IntroPage title="Basic Card" description="Normal card">
      <PictureCard imgSrc={cardData.cardImg}>
        <h2>{cardData.title}</h2>
        <p>{cardData.content}</p>
      </PictureCard>
    </IntroPage>
  </Section>
);

export default Cards;
