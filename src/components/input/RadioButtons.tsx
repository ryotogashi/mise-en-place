import * as React from "react";
import styled from "@emotion/styled";

const StyledLabel = styled.label`
  display: block;
  margin: 16px;
  color: gray;

  input {
    margin-right: 8px;
  }
`;

interface Props {
  name: string;
  labels: string[];
  checkedNumber: number;
  onClick: Function | null;
}

const RadioButtons = ({ name, labels, checkedNumber, onClick }: Props) => {
  const [checkedValue, setCheckedValue] = React.useState(checkedNumber);
  const handleRadioClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setCheckedValue(Number(value));

    if (onClick) onClick(Number(value));
  };
  return (
    <>
      {labels.map((label, index) => {
        return (
          <StyledLabel key={index}>
            <input
              type="radio"
              name={name}
              key={index}
              onClick={event => {
                handleRadioClick(event);
              }}
              defaultChecked={index === checkedValue ? true : false}
            />
            {label}
          </StyledLabel>
        );
      })}
    </>
  );
};

RadioButtons.defaultProps = {
  name: "radio-button-group",
  checkedNumber: 0,
  onClick: null
};

export default RadioButtons;
