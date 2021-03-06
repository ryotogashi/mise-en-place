import styled from '@emotion/styled';
import * as React from 'react';

import { NavigationLogo } from './NavigationLogo';
import { NavigationNode } from './NavigationNode';
import { white } from '../../constants/colors';

export interface Props {
  logo: string;
  navHeight: string;
  navWidth: string;
  items: [string, string[] | null][];
}

export const SideNavigation = ({ logo, navHeight, navWidth, items }: Props) => {
  const StyledNav = styled.nav`
    height: ${navHeight};
    width: ${navWidth};
    background-color: #323439;
    color: #e5e5e5;
    overflow: scroll;
    text-align: left;

    div:hover {
      color: ${white};
      box-shadow: 1px 1px 4px black;
    }

    & a {
      text-decoration: none;
      color: ${white};
    }
  `;

  return (
    <StyledNav>
      <NavigationLogo logo={logo} />
      {items.map(([item, children], index) => {
        return <NavigationNode key={index} item={item} childItems={children} />;
      })}
    </StyledNav>
  );
};

SideNavigation.defaultProps = {
  navHeight: '100vh',
  navWidth: '20%'
};
