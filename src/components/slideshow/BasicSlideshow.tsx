import styled from "@emotion/styled";
import * as React from "react";

import CustomRadioButton from "../input/CustomRadioButton";

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

      button {
        height: 45px;
        width: 45px;
        background-color: rgba(225, 225, 225, 0.3);
        border: none;
        border-radius: 0;
        padding: 7.5px;

        &:hover {
          background-color: rgba(225, 225, 225, 0.9);
          transition: all 0.5s ease-out;
        }
      }

      .left-slideshow-button {
        float: left;
      }

      .right-slideshow-button {
        float: right;
      }
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
        <button
          value="left"
          className="left-slideshow-button"
          onClick={event => {
            handleClick(event);
          }}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 50 80"
            xmlSpace="preserve"
          >
            <polyline
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="45.63,75.8 0.375,38.087 45.63,0.375"
            />
          </svg>
        </button>
        <button
          value="right"
          className="right-slideshow-button"
          onClick={event => {
            handleClick(event);
          }}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 50 80"
            xmlSpace="preserve"
          >
            <polyline
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0.375,0.375 45.63,38.087 0.375,75.8"
            />
          </svg>
        </button>
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
