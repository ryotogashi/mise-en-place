import styled from "@emotion/styled";
import * as React from "react";

import SectionTitle from "../SectionTitle";
import { SectionDiv } from "../constants";
import SimpleCard from "./SimpleCard";
import PictureCard from "./PictureCard";

const CardDiv = styled.div`
  display: flex;
`;

const Cards = () => (
  <SectionDiv>
    <SectionTitle>Card</SectionTitle>
    <CardDiv>
      <SimpleCard
        title="Lorem ipsum dolor"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam."
      />
      <PictureCard
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam."
        imgSrc="/public/assets/img-for-card.jpg"
      />
    </CardDiv>
  </SectionDiv>
);

export default Cards;
