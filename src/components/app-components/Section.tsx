import styled from "@emotion/styled";
import * as React from "react";

export const StyledSection = styled.section`
  width: 85%;
  margin: 0 auto 100px auto;

  h1 {
    padding-top: 5%;
    margin: -5% 0 5% 0;
  }
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => (
  <StyledSection>
    <h1 id={title.toLowerCase()}>{title}</h1>
    {children}
  </StyledSection>
);

export default Section;
