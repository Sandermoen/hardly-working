import { useLocation } from 'react-router-dom';

import Home from '@material-ui/icons/HomeRounded';
import Today from '@material-ui/icons/TodayRounded';
import AccountCircle from '@material-ui/icons/AccountCircleRounded';

import { StyledNav, StyledNavLink } from './MobileNav.styles';

const MobileNav = () => {
  const location = useLocation();
  return location.pathname === '/login' ||
    location.pathname === '/register' ? null : (
    <StyledNav>
      <StyledNavLink to="/" exact activeClassName="active">
        <Home style={{ fontSize: '3.5rem' }} />
      </StyledNavLink>
      <StyledNavLink to="/test" activeClassName="active">
        <Today style={{ fontSize: '3.5rem' }} />
      </StyledNavLink>
      <StyledNavLink to="/user" activeClassName="active">
        <AccountCircle style={{ fontSize: '3.5rem' }} />
      </StyledNavLink>
    </StyledNav>
  );
};

export default MobileNav;
