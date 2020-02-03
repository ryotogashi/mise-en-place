import styled from "@emotion/styled";
import * as React from "react";
import BasicTextInput from "../input/BasicTextInput";
import PasswordTextInput from "../input/PasswordTextInput";
import FlatButton from "../button/FlatButton";

const SignInForm = () => {
  const StyledSignInForm = styled.form`
    padding: 16px;
  `;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit!");
  };
  return (
    <StyledSignInForm onSubmit={handleSubmit}>
      <BasicTextInput placeholder="Given Name" width="31%" />
      <BasicTextInput placeholder="Last Name" width="31%" />
      <BasicTextInput placeholder="Phone Number" />
      <BasicTextInput placeholder="Email" />
      <PasswordTextInput placeholder="Password" />
      <PasswordTextInput placeholder="Retype Password" />
      <FlatButton value="Sign In" width="72%" />
    </StyledSignInForm>
  );
};

export default SignInForm;
