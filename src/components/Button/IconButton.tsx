import * as React from 'react';
import styled from '@emotion/styled';

export const IconStyledButton = styled.div`
  display: inline-block;
  margin: 16px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const IconButton = ({ children, ...rest }: Props) => <IconStyledButton {...rest}>{children}</IconStyledButton>;
