import * as React from "react";
import styled from "@emotion/styled";

const StyledLabel = styled.label`
  display: block;
  margin: 16px;
  color: gray;

  input {
    margin-right: 8px;
  }
`;

interface Props {
  data: {
    id: number;
    name: string;
  }[];
  handleRadio: Function | null;
}

const RadioButtons = ({ data, handleRadio = null }: Props) => (
  <>
    {data.map(dataElement => {
      return (
        <StyledLabel key={dataElement.id}>
          <input
            type="radio"
            name="sample-radio"
            key={dataElement.id}
            onChange={event => handleRadio(event.target)}
          />
          {dataElement.name}
        </StyledLabel>
      );
    })}
  </>
);

RadioButtons.defaultProps = {
  handleRadio: null
};

export default RadioButtons;
