import Home from '@material-ui/icons/HomeRounded';
import Today from '@material-ui/icons/TodayRounded';
import AccountCircle from '@material-ui/icons/AccountCircleRounded';

import { StyledNav, StyledNavLink } from './MobileNav.styles';

const MobileNav = () => (
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

export default MobileNav;
