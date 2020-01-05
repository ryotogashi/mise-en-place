import styled from "@emotion/styled";
import * as React from "react";

const StyledCard = styled.div`
  display: inline-block;
  width: 95%;
  text-align: center;
  box-shadow: 1px 1px 4px black;
  margin: 16px;

  * {
    padding: 8px 16px;
  }

  &: hover {
    box-shadow: 2px 2px 8px black;
  }
`;
interface Props {
  children: React.ReactNode;
}

const BasicCard = ({ children }: Props) => <StyledCard>{children}</StyledCard>;

export default BasicCard;
