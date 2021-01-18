import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: var(--mobile-nav-height);
  border-top: 3px solid var(--color-grey-light);
  background-color: var(--color-white);

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--color-grey);

  &.active {
    color: var(--color-primary);
  }
`;
