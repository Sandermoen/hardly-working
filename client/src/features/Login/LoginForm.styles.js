import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 3rem;

  & > *:not(:last-child):not(label) {
    margin-bottom: 2rem;
  }
`;

export const RecoverLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: 400;

  display: inline-block;
  margin-top: 1rem;
`;

export const RegisterLink = styled(Link)`
  font-size: 1.7rem;
  font-weight: 500;

  margin-top: 5rem;

  text-align: center;
  display: block;
`;
