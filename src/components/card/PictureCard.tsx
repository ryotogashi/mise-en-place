import styled from "@emotion/styled";
import * as React from "react";

const StyledPictureCard = styled.div`
  display: inline-block;
  width: 28%;
  box-shadow: 1px 1px 4px black;
  margin: 16px;
  position: relative;
  cursor: pointer;

  &: hover {
    box-shadow: 2px 2px 8px black;
  }

  img {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

const CaptionDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  color: white;

  * {
    padding: 8px 16px;
  }
`;

const PictureCard = ({ imgSrc, children }) => (
  <StyledPictureCard>
    <img src={imgSrc} alt="card picture" />
    <CaptionDiv>{children}</CaptionDiv>
  </StyledPictureCard>
);

export default PictureCard;
