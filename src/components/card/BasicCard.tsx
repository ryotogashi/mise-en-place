import styled from "@emotion/styled";
import * as React from "react";

const StyledCard = styled.div`
  display: inline-block;
  width: 28%;
  text-align: center;
  box-shadow: 1px 1px 4px black;
  margin: 16px;
  cursor: pointer;

  h2,
  p {
    padding: 8px 16px;
  }

  &: hover {
    box-shadow: 2px 2px 8px black;
  }
`;

interface Props {
  title: string;
  detail: string;
}

const BasicCard = ({ title, detail }: Props) => (
  <StyledCard>
    <h2>{title}</h2>
    {detail !== "" ? <p>{detail}</p> : null}
  </StyledCard>
);

export default BasicCard;
