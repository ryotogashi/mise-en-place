import styled from "@emotion/styled";
import * as React from "react";

const StyledNav = styled.nav`
  width: 100%;
  height: 56px;
  background-color: #323439;
  color: #e5e5e5;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  .nav {
    &:hover {
      color: #ffffff;
      box-shadow: 1px 1px 4px black;
    }
  }

  .logo {
    padding: 14px 24px 14px 24px;
    font-size: 24px;
  }

  .options {
    display: flex;
  }

  .option {
    padding: 19px;
  }
`;

interface Props {
  logo: string;
  items: string[];
}

const TopNavigation = ({ logo, items }: Props) => (
  <StyledNav>
    <a href="">
      <div className="nav logo">{logo}</div>
    </a>
    <div className="options">
      {items.map((item, index) => (
        <a key={index} href={item.toLowerCase()}>
          <div className="nav option">{item}</div>
        </a>
      ))}
    </div>
  </StyledNav>
);

export default TopNavigation;
