import styled from "@emotion/styled";
import * as React from "react";

import StoryBookIcon from "../../assets/storybook-icon.svg";

export const StyledSection = styled.section`
  width: 85%;
  margin: 0 auto 100px auto;

  h1 {
    padding-top: 5%;
    margin: -5% 0 5% 0;

    & > a {
      height: 24px;
      width: 24px;
      margin-right: 8px;

      & > img {
        height: 24px;
        width: 24px;
        vertical-align: text-top;
      }
    }
  }
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => (
  <StyledSection>
    <h1 id={title.toLowerCase()}>
      <a href={`https://mise-en-place-ui-components.herokuapp.com/story?path=/story/${title.toLowerCase()}`}>
        <img src={StoryBookIcon} alt="story-icon" />
      </a>
      {title}
    </h1>
    {children}
  </StyledSection>
);

export default Section;
