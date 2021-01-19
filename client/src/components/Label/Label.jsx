import { StyledLabel } from './Label.styles';

const Label = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);

export default Label;
