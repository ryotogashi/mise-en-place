import styled from '@emotion/styled';
import * as React from 'react';
import { secondary, white } from '../../constants/colors';

type value = string;
type item = string;

export interface Props {
  width: string;
  title: string;
  data: [value, item][];
}

export const BasicDropdown = ({ width, title, data }: Props) => {
  const StyledDiv = styled.div`
    overflow: hidden;
    width: ${width};
    margin: 16px;

    & select {
      width: 100%;
      padding-right: 1em;
      cursor: pointer;
      text-indent: 0.01px;
      text-overflow: ellipsis;
      border: none;
      outline: none;
      background: transparent;
      background-image: none;
      box-shadow: none;
      -webkit-appearance: none;
      appearance: none;
    }

    & select::-ms-expand {
      display: none;
    }

    &.selected-box {
      position: relative;
      border: 1px solid ${secondary};
      border-radius: 2px;
      background: ${white};
    }

    &.selected-box::before {
      position: absolute;
      top: 0.8em;
      right: 0.9em;
      width: 0;
      height: 0;
      padding: 0;
      content: '';
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid ${secondary};
      pointer-events: none;
    }

    &.selected-box select {
      padding: 8px 38px 8px 8px;
      color: ${secondary};
    }
  `;
  return (
    <StyledDiv className="selected-box">
      <select required>
        <option value="" hidden>
          {title}
        </option>
        {data.map(([value, item], index) => (
          <option key={index} value={value}>
            {item}
          </option>
        ))}
      </select>
    </StyledDiv>
  );
};

BasicDropdown.defaultProps = {
  width: '100%'
};
