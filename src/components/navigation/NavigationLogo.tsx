import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  logo: string;
}

const LogoDiv = styled.div`
  padding: 24px 0 24px 16px;
  font-size: 24px;
`;

const NavigationLogo = ({ logo }: Props) => (
  <a href="">
    <LogoDiv>{logo}</LogoDiv>
  </a>
);

export default NavigationLogo;
