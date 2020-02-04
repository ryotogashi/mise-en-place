import styled from "@emotion/styled";
import * as React from "react";
import BasicTextInput from "../input/BasicTextInput";
import PasswordTextInput from "../input/PasswordTextInput";
import FlatButton from "../button/FlatButton";
import InputType from "../input/input-type";

const StyledSignInForm = styled.div`
  border: 1px solid;
  padding: 16px;
`;

const SignInForm = () => (
  <StyledSignInForm>
    <BasicTextInput type={InputType.TEXT} placeholder="email" />
    <PasswordTextInput />
    <FlatButton value="Sign In" width="70%" />
  </StyledSignInForm>
);

export default SignInForm;
