import styled from '@emotion/styled';
import * as React from 'react';

export interface Props {
  imgSrc: string;
  children: React.ReactNode;
  width: string;
  height: string;
}

export const PictureCard = ({ imgSrc, children, width, height }: Props) => {
  const StyledPictureCard = styled.div`
    width: ${width};
    height: ${height};
    margin: 16px;
    cursor: pointer;
    box-shadow: 0 0 5px black;


  & > figure {
    position: relative;
    margin: 0;
    height: 100%;

    & > img {
      position: absolute;
      height: 100%;
      width: 100%;
    }

    & > figcaption {
      position: absolute;
      background-color: rgba(0,0,0, 0.3);
      height: 100%;
      width: 100%;
      margin: 0 auto;

      & > * {
        color: white;
        margin: 16px 0 0 16px;
        text-align: center;
      }

    }

    &:hover > figcaption {
      background-color: rgba(0,0,0, 0.7);
    }
  `;

  return (
    <StyledPictureCard>
      <figure>
        <img src={imgSrc} alt={`${imgSrc}`} />
        <figcaption>{children}</figcaption>
      </figure>
    </StyledPictureCard>
  );
};

PictureCard.defaultProps = {
  width: '100%',
  height: null
};
