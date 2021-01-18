import { StyledHeader, StyledH1 } from './MobileHeader.styles';

const MobileHeader = ({ title }) => (
  <StyledHeader>
    <StyledH1>{title}</StyledH1>
  </StyledHeader>
);

export default MobileHeader;
