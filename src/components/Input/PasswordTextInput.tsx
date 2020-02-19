import styled from "@emotion/styled";
import * as React from "react";

import { HideIcon } from "./HideIcon";
import { ShowIcon } from "./ShowIcon";
import InputType from "./input-type";
import { secondary } from "../../constants/colors";
import { BasicTextInput } from "./BasicTextInput";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  showHideIcon: boolean;
}

const PasswordDiv = styled.div`
  margin: 16px;

  & > label {
    text-align: right;
    width: 70%;
    display: inline-block;
    cursor: pointer;
  }

  & > input {
    margin-top: 4px;
  }
`;

export const PasswordTextInput = ({ showHideIcon, ...rest }: Props) => {
  const [value, setValue] = React.useState<string>("");
  const [inputType, setInputType] = React.useState<InputType>(InputType.PASSWORD);

  const handleClick = () => {
    setValue(value);
    setInputType(prevValue => (prevValue === InputType.PASSWORD ? InputType.TEXT : InputType.PASSWORD));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
  };

  return (
    <PasswordDiv>
      {showHideIcon ? (
        <label htmlFor="password-input" onClick={handleClick}>
          {inputType === InputType.PASSWORD ? <HideIcon /> : <ShowIcon />}
        </label>
      ) : null}
      <BasicTextInput type={inputType} name="password-input" {...rest} onChange={handleChange} value={value} />
    </PasswordDiv>
  );
};

PasswordTextInput.defaultProps = {
  showHideIcon: false
};
