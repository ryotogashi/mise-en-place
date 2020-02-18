import styled from "@emotion/styled";
import * as React from "react";

import CustomRadioButtonGroup from "../inputs/CustomRadioButtonGroup";
import SlideshowImages from "./SlideshowImages";
import SquareIconButton from "../buttons/SquareIconButton";
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
      bottom: 1%;
      width: 100%;
      text-align: center;
    }
  `;

  const [checkedValue, setCheckedValue] = React.useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;

    if (value === "left") {
      setCheckedValue(prevValue => (prevValue === 0 ? prevValue : prevValue - 1));
    } else {
      setCheckedValue(prevValue => (prevValue === imgSrcs.length - 1 ? prevValue : prevValue + 1));
    }
  };

  const handleRadioClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setCheckedValue(Number(value));
  };

  return (
    <SlideshowDiv>
      <SlideshowImages imgSrcs={imgSrcs} activeNumber={checkedValue} />
      <div className="button-group">
        <SquareIconButton onClick={handleClick} value="left" disabled={0 === checkedValue ? true : false}>
          <LeftArrow />
        </SquareIconButton>
        <SquareIconButton
          onClick={handleClick}
          value="right"
          disabled={checkedValue === imgSrcs.length - 1 ? true : false}
        >
          <RightArrow />
        </SquareIconButton>
      </div>
      <div className="radio-group">
        <CustomRadioButtonGroup
          name="slideshow"
          labels={imgSrcs.map(_ => "")}
          display="inline-block"
          onClick={handleRadioClick}
          defaultChecked={checkedValue}
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
