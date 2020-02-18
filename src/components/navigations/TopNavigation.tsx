import styled from "@emotion/styled";
import * as React from "react";

import { white } from "../../constants/colors";

interface Props {
  logo: string;
  navHeight: string;
  items: string[];
}

const TopNavigation = ({ logo, navHeight, items }: Props) => {
  const StyledNav = styled.nav`
    width: 100%;
    height: ${navHeight};
    background-color: #323439;
    color: #e5e5e5;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    .nav {
      &:hover {
        color: ${white};
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

    & a {
      text-decoration: none;
      color: ${white};
    }
  `;

  return (
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
};

TopNavigation.defaultProps = {
  navHeight: "56px"
};

export default TopNavigation;
