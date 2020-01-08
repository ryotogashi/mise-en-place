import styled from "@emotion/styled";
import * as React from "react";

const RadioGroupDiv = styled.div`
  label {
    color: #858585;
  }

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
`;

interface Props {
  name: string;
  labels: string[];
  checkedNumber: number;
  onClick: Function | null;
}

const CustomRadioButton = ({ name, labels, checkedNumber, onClick }: Props) => {
  const [checkedValue, setCheckedValue] = React.useState(checkedNumber);
  const handleRadioClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setCheckedValue(Number(value));

    if (onClick) onClick(Number(value));
  };

  return (
    <RadioGroupDiv className="radio-group">
      {labels.map((value, index) => (
        <label
          key={index}
          className={`radio-label ${
            index === checkedValue ? "radio-label-checked" : ""
          }`}
        >
          <input
            type="radio"
            name={name}
            value={index}
            onClick={event => {
              handleRadioClick(event);
            }}
            defaultChecked={index === checkedValue ? true : false}
          />
          {value}
        </label>
      ))}
    </RadioGroupDiv>
  );
};

CustomRadioButton.defaultProps = {
  name: "custom-radio-button",
  checkedNumber: 0,
  onClick: null
};

export default CustomRadioButton;
