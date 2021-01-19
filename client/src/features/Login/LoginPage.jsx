import {
  StyledSection,
  StyledHeader,
  StyledLogo,
  ContentContainer,
  Title,
} from './LoginPage.styles';

import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <StyledSection>
      <StyledHeader>
        <StyledLogo />
      </StyledHeader>
      <ContentContainer>
        <Title>Login</Title>
        <LoginForm />
      </ContentContainer>
    </StyledSection>
  );
};

export default LoginPage;
