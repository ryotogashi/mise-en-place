import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  children: React.ReactNode;
  width: string;
  height: string;
}

const BasicCard = ({ children, width, height }: Props) => {
  const StyledCard = styled.div`
    display: inline-block;
    width: ${width};
    ${height ? `height: ${height};` : ""}
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

  return <StyledCard>{children}</StyledCard>;
};

BasicCard.defaultProps = {
  width: "100%",
  height: null
};

export default BasicCard;
