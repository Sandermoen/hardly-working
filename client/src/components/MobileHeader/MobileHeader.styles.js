import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--color-primary-dark);
  color: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: var(--mobile-nav-height);
`;

export const StyledH1 = styled.h1`
  font-size: 2.5rem;
  font-family: 'Roboto';
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  padding: 1.5rem 0;
`;
