import { StyledButton, IconContainer } from './Button.styles';

const Button = ({ secondary, occupy, icon: Icon, children, ...props }) => (
  <StyledButton secondary={secondary} occupy={occupy} {...props}>
    {Icon && (
      <IconContainer>
        <Icon fontSize="large" />
      </IconContainer>
    )}
    {children}
  </StyledButton>
);

export default Button;
