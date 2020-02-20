import styled from '@emotion/styled';
import * as React from 'react';

import InputType from './input-type';
import { secondary } from '../../constants/colors';

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type: InputType;
}

const StyledInput = styled.input`
  height: 24px;
  width: 70%;
  margin: 16px;
  padding: 4px;
  border: none;
  border-bottom: 1px solid ${secondary};
  color: ${secondary};

  &::placeholder {
    color: ${secondary};
  }
`;

export const UnderlineTextInput = ({ type, ...rest }: Props) => <StyledInput type="text" {...rest} />;

UnderlineTextInput.defaultProps = {
  type: InputType.TEXT
};
