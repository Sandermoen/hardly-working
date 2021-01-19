import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: ${(props) => (props.big ? '1.3rem 1rem' : '1rem')};
  border-radius: 7px;
  border: 2px solid var(--color-grey);
  outline: none;
  color: currentColor;

  font-family: inherit;

  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: var(--color-primary);
  }
`;
