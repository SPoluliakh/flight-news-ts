import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkTo = styled(NavLink)`
  display: flex;
  align-items: center;
  transition: 300ms linear;
  position: relative;
  margin-bottom: ${p => {
    if (p.children === 'Home page') {
      return p.theme.space[0];
    }
    return p.theme.space[3];
  }}px;
  margin-left: ${p => p.theme.space[3]}px;
  text-decoration: none;
  width: ${p => {
    if (p.children === 'Read more') {
      return 70;
    }
    if (Array.isArray(p.children)) {
      return 85;
    }
  }}px;
  color: ${p => {
    if (p.children === 'Home page') {
      return p.theme.colors.navLink;
    }
  }};

  &::after {
    content: ' ';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.colors.linkHover};
    scale: 0;
    transition: 300ms linear;
  }

  :hover::after {
    scale: 1;
  }
  &.active::after {
    scale: 1;
  }
`;
