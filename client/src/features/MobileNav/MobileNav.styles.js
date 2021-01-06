import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  border-top: 3px solid var(--color-grey-light);

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--color-grey-light);

  &.active {
    color: var(--color-primary);
  }
`;
