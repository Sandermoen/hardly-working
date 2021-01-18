import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${(props) =>
    props.secondary ? 'var(--color-black)' : 'var(--color-white)'};
  background-color: ${(props) =>
    props.secondary ? 'var(--color-white)' : 'var(--color-primary)'};

  width: ${(props) => (props.occupy ? '100%' : 'auto')};
  padding: 1rem 1.5rem;
  border: 1px solid
    ${(props) =>
      props.secondary ? 'var(--color-black)' : 'var(--color-primary-dark)'};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-weight: 500;
  font-size: 1.5rem;
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;
