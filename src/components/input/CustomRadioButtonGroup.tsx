import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  name: string;
  labels: string[];
  display: string;
  defaultChecked: number;
  onClick: Function | null;
}

const CustomRadioButtonGroup = ({ name, labels, display, defaultChecked, onClick }: Props) => {
  const RadioGroupDiv = styled.div`
    & input[type="radio"] {
      display: none;
    }

    & > div {
      display: ${display};
      margin: 16px 0;
    }

    & label {
      color: #858585;
      position: relative;
      padding: 0 0 0 44px;
    }

    & label::after,
    & label::before {
      position: absolute;
      content: "";
      display: block;
      top: 50%;
    }

    & label::after {
      left: 15px;
      margin-top: -10px;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(225, 225, 225, 0.3);
      border-radius: 50%;
    }

    & label::before {
      left: 20px;
      margin-top: -5px;
      width: 10px;
      height: 10px;
      background: rgba(225, 225, 225, 0);
      border-radius: 50%;
    }

    & label:hover::after {
      border: 2px solid rgba(225, 225, 225, 0.9);
      transition: all 0.5s ease-out;
    }

    & label:hover::before {
      background: rgba(225, 225, 225, 0.9);
      transition: all 0.5s ease-out;
    }

    & .checked::before {
      background: rgba(225, 225, 225, 0.7);
    }
  `;
  return (
    <RadioGroupDiv className="radio-group">
      {labels.map((value, index) => (
        <div key={index}>
          <label className={`${index === defaultChecked ? "checked" : ""}`}>
            <input
              type="radio"
              defaultChecked={index === defaultChecked ? true : false}
              name={name}
              value={index}
              onClick={event => (onClick ? onClick(event) : null)}
            />
            {value}
          </label>
        </div>
      ))}
    </RadioGroupDiv>
  );
};

CustomRadioButtonGroup.defaultProps = {
  name: "custom-radio-button",
  display: "block",
  defaultChecked: 0,
  onClick: null
};

export default CustomRadioButtonGroup;
