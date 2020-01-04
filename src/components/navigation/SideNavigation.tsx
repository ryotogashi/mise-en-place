import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  logo: string;
  items: string[];
}

const SideNavigation = ({ logo, items }: Props) => {
  return (
    <StyledNav>
      <a href="">
        <div className="logo">{logo}</div>
      </a>
      {items.map((item, index) => (
        <a href={`#${item}`}>
          <div key={index}>{item}</div>
        </a>
      ))}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 100vh;
  width: 20%;
  background-color: #323439;
  color: #e5e5e5;
  overflow: scroll;

  a {
    text-decoration: none;
    color: #e5e5e5;
  }

  .logo {
    padding: 24px 0 24px 16px;
    font-size: 24px;
  }

  div {
    padding: 16px 0 16px 24px;

    &:hover {
      color: #ffffff;
      box-shadow: 1px 1px 4px black;
    }
  }
`;

export default SideNavigation;
