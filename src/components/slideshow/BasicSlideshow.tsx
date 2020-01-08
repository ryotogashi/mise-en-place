import styled from "@emotion/styled";
import * as React from "react";

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

      input[type="radio"] {
        display: none;
      }

      .radio-label {
        position: relative;
        padding: 0 0 0 42px;
      }

      .radio-label::after,
      .radio-label::before {
        position: absolute;
        content: "";
        display: block;
        top: 50%;
      }

      .radio-label::after {
        left: 15px;
        margin-top: -10px;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(225, 225, 225, 0.3);
        border-radius: 50%;
      }

      .radio-label::before {
        left: 20px;
        margin-top: -5px;
        width: 10px;
        height: 10px;
        background: rgba(225, 225, 225, 0);
        border-radius: 50%;
      }

      .radio-label-checked::before {
        background: rgba(225, 225, 225, 0.7);
      }

      .radio-label:hover::after {
        border: 2px solid rgba(225, 225, 225, 0.9);
        transition: all 0.5s ease-out;
      }

      .radio-label:hover::before {
        background: rgba(225, 225, 225, 0.9);
        transition: all 0.5s ease-out;
      }
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

  const handleRadioClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setCheckedValue(Number(value));
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
              points="
      45.63,75.8 0.375,38.087 45.63,0.375 "
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
              points="
      0.375,0.375 45.63,38.087 0.375,75.8 "
            />
          </svg>
        </button>
      </div>
      <div className="radio-group">
        {imgSrcs.map((_, index) => (
          <label
            key={index}
            className={`radio-label ${
              index === checkedValue ? "radio-label-checked" : ""
            }`}
          >
            <input
              type="radio"
              name="photo"
              value={index}
              onClick={event => {
                handleRadioClick(event);
              }}
              defaultChecked={index === checkedValue ? true : false}
            />
          </label>
        ))}
      </div>
    </SlideshowDiv>
  );
};

BasicSlideshow.defaultProps = {
  width: "90%",
  height: "90%"
};

export default BasicSlideshow;
