import styled from "@emotion/styled";
import * as React from "react";

import HideIcon from "../../assets/hide.svg";
import ShowIcon from "../../assets/show.svg";
import InputType from "./input-type";
import { secondary } from "../../constants/colors";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  showHideIcon: boolean;
}

const PasswordTextInput = ({ showHideIcon, ...rest }: Props) => {
  const [imageName, setImageName] = React.useState("show");
  const [inputType, setInputType] = React.useState(InputType.PASSWORD);

  const handleClick = () => {
    setImageName(prevValue => (prevValue === "hide" ? "show" : "hide"));
    setInputType(prevValue => (prevValue === InputType.PASSWORD ? InputType.TEXT : InputType.PASSWORD));
  };

  const PasswordDiv = styled.div`
    display: inline-block;
    width: 70%;
    margin: 16px;

    & > label {
      display: inline-block;
      float: right;
      cursor: pointer;
    }

    & > label > img {
      display: ${showHideIcon ? "inline" : "none"};
      height: 12px;
      wieght: 12px;
    }

    & > input {
      height: 24px;
      width: 100%;
      padding: 4px;
      border: 1px solid ${secondary};
      color: ${secondary};
      border-radius: 4px;

      &::placeholder {
        color: ${secondary};
      }
    }
  `;

  return (
    <PasswordDiv>
      <label htmlFor="password-input" onClick={handleClick}>
        <img src={imageName === "hide" ? HideIcon : ShowIcon} />
      </label>
      <input type={inputType} name="password-input" {...rest} />
    </PasswordDiv>
  );
};

PasswordTextInput.defaultProps = {
  showHideIcon: false
};

export default PasswordTextInput;
