import styled from "@emotion/styled";
import * as React from "react";

const StyledPictureCard = styled.div`
  display: inline-block;
  width: 28%;
  height: 230px;
  box-shadow: 2px 2px 8px black;
  margin: 16px;
  position: relative;
`;

const StyledImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const CaptionDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  color: white;

  * {
    padding: 0 16px;
  }
`;

interface Props {
  title: string;
  subtitle: string;
  imgSrc: string;
}

const PictureCard = ({ title, subtitle, imgSrc }: Props) => (
  <StyledPictureCard>
    <StyledImg src={imgSrc} alt="card picture" />
    <CaptionDiv>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </CaptionDiv>
  </StyledPictureCard>
);

export default PictureCard;
