import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  imgSrc: string;
  children: React.ReactNode;
}

const PictureCard = ({ imgSrc, children }: Props) => {
  const StyledPictureCard = styled.div`
    background-image: url(${imgSrc});
    display: inline-block;
    width: 100%;
    box-shadow: 1px 1px 4px black;
    margin: 16px;
    position: relative;

    &: hover {
      box-shadow: 2px 2px 8px black;
    }

    .cover {
      position: absolute;
      width: inherited;
      height: inherited;
      background-color: rgba(0, 0, 0, 0.3);
      top: 0;
      left: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      padding: 8px 16px 8px 16px;
      color: #f6f6f6;
    }

    &:hover h1,
    &:hover h2,
    &:hover h3,
    &:hover h4,
    &:hover h5,
    &:hover h6,
    &:hover p {
      color: white;
    }
  `;

  return (
    <StyledPictureCard>
      {children}
      <div className="cover">{children}</div>
    </StyledPictureCard>
  );
};

export default PictureCard;
