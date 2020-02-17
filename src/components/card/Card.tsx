import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import BasicCard from "./BasicCard";
import PictureCard from "./PictureCard";
import { cardData } from "../../constants/sampleData";

const Cards = () => (
  <Section title="Cards">
    <IntroPage title="Basic Card" description="Normal card">
      <BasicCard width="85%" height="250px">
        <h2>{cardData.title}</h2>
        <p>{cardData.content}</p>
      </BasicCard>
    </IntroPage>
    <IntroPage title="Picture Covered Card" description="Picture covered card">
      <PictureCard imgSrc={cardData.cardImg} width="85%" height="250px">
        <h2>{cardData.title}</h2>
        <p>{cardData.content}</p>
      </PictureCard>
    </IntroPage>
  </Section>
);

export default Cards;
