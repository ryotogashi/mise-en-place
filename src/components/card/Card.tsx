import styled from "@emotion/styled";
import * as React from "react";

import Section from "../app-components/Section";
import SimpleCard from "./BasicCard";
import PictureCard from "./PictureCard";
import { cardData } from "../constants";

const CardDiv = styled.div`
  display: flex;
`;

const Cards = () => (
  <Section title="Card">
    <CardDiv>
      <SimpleCard>
        <h2>{cardData.title}</h2>
        <p>{cardData.content}</p>
      </SimpleCard>
      <PictureCard imgSrc={cardData.cardImg}>
        <h2>{cardData.title}</h2>
        <p>{cardData.content}</p>
      </PictureCard>
    </CardDiv>
  </Section>
);

export default Cards;
