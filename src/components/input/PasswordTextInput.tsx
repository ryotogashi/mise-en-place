import styled from "@emotion/styled";
import * as React from "react";

import HideIcon from "../../assets/hide.svg";
import ShowIcon from "../../assets/show.svg";

interface Props {
  placeholder: string;
  showHideIcon: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | null;
}

const PasswordTextInput = ({ placeholder, showHideIcon, onChange }: Props) => {
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

    & > label {
      display: inline-block;
      float: right;
      cursor: pointer;
    }

    & > input {
      height: 24px;
      width: 100%;
      margin: 0;
      padding: 4px;
      border: 1px solid gray;
      opacity: 0.4;
      border-radius: 4px;
    }

    & img {
      display: inline;
      height: 12px;
      wieght: 12px;
    }
  `;

  const StyledPasswordInput = styled.input`
    height: 24px;
    width: 70%;
    margin: 16px;
    padding: 4px;
    border: 1px solid gray;
    opacity: 0.4;
    border-radius: 4px;
  `;

  return showHideIcon ? (
    <PasswordDiv>
      <label htmlFor="password-input" onClick={handleClick}>
        <img src={imageName === "hide" ? HideIcon : ShowIcon} />
      </label>
      <input
        name="password-input"
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
    </PasswordDiv>
  ) : (
    <StyledPasswordInput
      name="password-input"
      type={inputType}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

PasswordTextInput.defaultProps = {
  placeholder: "password",
  showHideIcon: false,
  onChange: null
};

export default PasswordTextInput;
