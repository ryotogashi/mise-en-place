import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  imgSrcs: string[];
  activeNumber: number;
}

const ImgGroupDiv = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
  }

  .img-inactive {
    display: none;
  }
`;

const SlideshowImages = ({ imgSrcs, activeNumber }: Props) => (
  <ImgGroupDiv>
    {imgSrcs.map((imgSrc, index) => (
      <img
        key={index}
        src={imgSrc}
        alt={`img-${index}`}
        className={`img ${index === activeNumber ? "" : "img-inactive"}`}
      />
    ))}
  </ImgGroupDiv>
);

SlideshowImages.defaultProps = {
  activeNumber: 0
};

export default SlideshowImages;
