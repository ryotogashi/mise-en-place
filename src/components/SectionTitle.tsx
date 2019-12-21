import styled from "@emotion/styled";
import * as React from "react";

const StyledTitle = styled.h1`
  margin: 5%;
`;

const SectionTitle = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default SectionTitle;
