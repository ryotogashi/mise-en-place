import styled from "@emotion/styled";
import * as React from "react";

import CustomRadioButton from "../input/CustomRadioButton";
import SquareIconButton from "../button/SquareIconButton";
import { LeftArrow, RightArrow } from "./Arrow";

interface Props {
  width: string;
  height: string;
  imgSrcs: string[];
}

const BasicSlideshow = ({ width, height, imgSrcs }: Props) => {
  const SlideshowDiv = styled.div`
    display: block;
    position: relative;
    width: ${width};
    height: ${height};
    margin: 0 auto;

    .img-group {
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
    }

    .button-group {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }

    .radio-group {
      position: absolute;
      bottom: 5%;
      width: 100%;
    }
  `;

  const [checkedValue, setCheckedValue] = React.useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;

    if (value === "left") {
      setCheckedValue(prevValue =>
        prevValue === 0 ? prevValue : prevValue - 1
      );
    } else {
      setCheckedValue(prevValue =>
        prevValue === imgSrcs.length - 1 ? prevValue : prevValue + 1
      );
    }
  };

  return (
    <SlideshowDiv>
      <div className="img-group">
        {imgSrcs.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`img-${index}`}
            className={`img ${index === checkedValue ? "" : "img-inactive"}`}
          />
        ))}
      </div>
      <div className="button-group">
        <SquareIconButton onClick={handleClick} value="left">
          <LeftArrow />
        </SquareIconButton>
        <SquareIconButton onClick={handleClick} value="right">
          <RightArrow />
        </SquareIconButton>
      </div>
      <div className="radio-group">
        <CustomRadioButton
          name="slideshow"
          labels={imgSrcs.map(_ => "")}
          onClick={setCheckedValue}
        />
      </div>
    </SlideshowDiv>
  );
};

BasicSlideshow.defaultProps = {
  width: "90%",
  height: "90%"
};

export default BasicSlideshow;
