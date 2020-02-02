import styled from "@emotion/styled";
import * as React from "react";

import HideIcon from "../../assets/hide.svg";
import ShowIcon from "../../assets/show.svg";

interface Props {
  placeholder: string;
  showHideIcon: boolean;
}

const PasswordTextInput = ({ placeholder, showHideIcon }: Props) => {
  const [imageName, setImageName] = React.useState("show");
  const [inputType, setInputType] = React.useState("password");

  const handleClick = () => {
    setImageName(prevValue => (prevValue === "hide" ? "show" : "hide"));
    setInputType(prevValue => (prevValue === "password" ? "text" : "password"));
  };

  const PasswordDiv = styled.div`
    display: inline-block;
    width: 70.5%;
    margin: 16px;
    padding-right: 5px;

    & > label {
      display: inline-block;
      float: right;
      cursor: pointer;
    }

    & > input {
      height: 24px;
      width: 99%;
      margin: 0;
      padding: 4px;
      border: 1px solid gray;
      opacity: 0.4;
      border-radius: 4px;
    }

    & img {
      display: ${showHideIcon ? "inline" : "none"};
      height: 12px;
      wieght: 12px;
    }
  `;

  return (
    <PasswordDiv>
      <label htmlFor="password-input" onClick={handleClick}>
        <img src={imageName === "hide" ? HideIcon : ShowIcon} />
      </label>
      <input name="password-input" type={inputType} placeholder={placeholder} />
    </PasswordDiv>
  );
};

PasswordTextInput.defaultProps = {
  placeholder: "password",
  showHideIcon: false
};

export default PasswordTextInput;
