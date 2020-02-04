import styled from "@emotion/styled";
import * as React from "react";

const StyledInput = styled.input`
  height: 24px;
  width: 70%;
  margin: 16px;
  padding: 4px;
  border: 1px solid gray;
  opacity: 0.4;
  border-radius: 4px;

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    color: gray;
  }
`;

const DateTextInput = ({ ...rest }: React.HTMLAttributes<HTMLInputElement>) => (
  <StyledInput type="date" {...rest} />
);

export default DateTextInput;
