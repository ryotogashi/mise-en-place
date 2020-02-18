import styled from "@emotion/styled";
import * as React from "react";
import { secondary, white } from "../../constants/colors";

const ToggleButtonDiv = styled.div`
  background-color: ${white};
  display: inline-block;
  border-radius: 5px;
  border: solid 0.5px ${secondary};
  color: ${secondary};
  cursor: pointer;
  margin: 16px;

  div {
    display: inline-block;
    padding: 10px 12px;
    border-right: solid 0.3px ${secondary};

    &:last-child {
      border-style: none;
    }

    &:hover {
      background-color: rgba(221, 221, 221, 0.5);
    }
  }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  values: string[];
}

const ToggleButton = ({ values, ...rest }: Props) => (
  <ToggleButtonDiv>
    {values.map((item, index) => (
      <div key={index} {...rest}>
        {item}
      </div>
    ))}
  </ToggleButtonDiv>
);

ToggleButton.defaultProps = {
  values: ["item 1", "item 2", "item 3", "item 4"]
};

export default ToggleButton;
