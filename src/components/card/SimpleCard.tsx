import styled from "@emotion/styled";
import * as React from "react";

const StyledCard = styled.div`
  display: inline-block;
  width: 28%;
  height: 230px;
  text-align: center;
  box-shadow: 2px 2px 8px black;
  margin: 16px;
  padding: 8px 16px;
`;

interface Props {
  title: string;
  detail: string;
}

const SimpleCard = ({ title, detail }: Props) => (
  <StyledCard>
    <h2>{title}</h2>
    <p>{detail}</p>
  </StyledCard>
);

export default SimpleCard;
