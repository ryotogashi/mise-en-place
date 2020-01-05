import styled from "@emotion/styled";
import * as React from "react";

const StyledNav = styled.nav`
  height: 100vh;
  width: 20%;
  background-color: #323439;
  color: #e5e5e5;
  overflow: scroll;

  .nav {
    &:hover {
      color: #ffffff;
      box-shadow: 1px 1px 4px black;
    }
  }

  .logo {
    padding: 24px 0 24px 16px;
    font-size: 24px;
  }

  .nav-item {
    padding: 16px 0 16px 24px;
  }

  .nav-item-child {
    padding: 16px 0 16px 32px;
  }

  .nav-item-child-inactive {
    display: none;
  }
`;

interface Props {
  logo: string;
  items: [string, string[] | null][];
}

const SideNavigation = ({ logo, items }: Props) => {
  return (
    <StyledNav>
      <a href="">
        <div className="nav logo">{logo}</div>
      </a>
      {items.map(([item, children], index) => {
        return (
          <div key={index}>
            <a key={index} href={`#${item.toLowerCase()}`}>
              <div className="nav nav-item">{item}</div>
            </a>
            {children === null
              ? null
              : children.map((child, childIndex) => (
                  <a
                    key={index * 100 + childIndex}
                    href={`#${child.toLowerCase()}`}
                  >
                    <div className="nav nav-item-child nav-item-child-inactive">
                      {child}
                    </div>
                  </a>
                ))}
          </div>
        );
      })}
    </StyledNav>
  );
};

export default SideNavigation;
