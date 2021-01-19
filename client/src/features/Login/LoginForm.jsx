import { StyledForm, RecoverLink, RegisterLink } from './LoginForm.styles';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
  };

  return (
    <StyledForm onSubmit={(event) => handleSubmit(event)}>
      <Input label="Email" placeholder="example@gmail.com" big />
      <div>
        <Input
          label="Password"
          type="password"
          placeholder="Must have at least 6 characters"
          big
        />
        <RecoverLink to="/recover">
          Forgotten your password? Recover
        </RecoverLink>
      </div>
      <Button occupy>Login</Button>
      <RegisterLink to="/register">
        Don't have an account? Register
      </RegisterLink>
    </StyledForm>
  );
};

export default LoginForm;
