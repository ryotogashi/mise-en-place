import styled from "@emotion/styled";
import * as React from "react";
import BasicTextInput from "../input/BasicTextInput";
import PasswordTextInput from "../input/PasswordTextInput";
import FlatButton from "../button/FlatButton";
import InputType from "../input/input-type";

const StyledSignInForm = styled.div`
  padding: 16px;
`;

const SignInForm = () => (
  <StyledSignInForm>
    <BasicTextInput placeholder="Given Name" />
    <BasicTextInput placeholder="Last Name" />
    <BasicTextInput type={InputType.TEL} placeholder="Phone Number" />
    <BasicTextInput type={InputType.EMAIL} placeholder="Email" />
    <PasswordTextInput placeholder="Password" />
    <FlatButton value="Sign In" width="70%" />
  </StyledSignInForm>
);

export default SignInForm;
