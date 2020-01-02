import styled from "@emotion/styled";
import * as React from "react";

import SectionTitle from "../SectionTitle";
import { SectionDiv } from "../constants";
import SimpleCard from "./BasicCard";
import PictureCard from "./PictureCard";
import { cardData } from "../constants";

const CardDiv = styled.div`
  display: flex;
`;

const Cards = () => (
  <SectionDiv>
    <SectionTitle>Card</SectionTitle>
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
  </SectionDiv>
);

export default Cards;
