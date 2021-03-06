import styled from '@emotion/styled';
import * as React from 'react';

export interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  height: string;
  width: string;
}

export const Avatar = ({ src, height, width, ...rest }: Props) => {
  const StyledImg = styled.img`
    vertical=align: middle;
    margin: 16px;
    height: ${height};
    width: ${width};
    border-radius: 50%;
  `;
  return <StyledImg src={src} {...rest} alt="avatar" />;
};

Avatar.defaultProps = {
  height: '50px',
  width: '50px'
};
