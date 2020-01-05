import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  title: string;
  discription: string;
  children: React.ReactNode;
  imgSrcs: [string, string][] | null;
}

const StyledDiv = styled.div`
  width: 100%;
`;

const IntroPage = ({ title, discription, children, imgSrcs }: Props) => (
  <StyledDiv>
    <h2>{title}</h2>
    <h5>Usage</h5>
    <p>{discription}</p>
    <div>{children}</div>
    <>
      {imgSrcs.map(([imgSrc, imgTag], index) => (
        <div key={index}>
          <img src={imgSrc} alt={imgTag} />
          <p>{imgTag}</p>
        </div>
      ))}
    </>
  </StyledDiv>
);

IntroPage.defaultProps = {
  imgSrcs: null
};

export default IntroPage;
