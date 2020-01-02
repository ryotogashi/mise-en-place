import styled from "@emotion/styled";
import * as React from "react";

import SectionTitle from "../SectionTitle";
import { SectionDiv } from "../constants";
import SimpleCard from "./BasicCard";
import PictureCard from "./PictureCard";

const CardDiv = styled.div`
  display: flex;
`;

const Cards = () => (
  <SectionDiv>
    <SectionTitle>Card</SectionTitle>
    <CardDiv>
      <SimpleCard>
        <h2>Lorem ipsum dolor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta
          lorem mollis aliquam.
        </p>
      </SimpleCard>
      <PictureCard imgSrc="/public/assets/img-for-card.jpg">
        <h2>Lorem ipsum dolor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta
          lorem mollis aliquam.
        </p>
      </PictureCard>
    </CardDiv>
  </SectionDiv>
);

export default Cards;
