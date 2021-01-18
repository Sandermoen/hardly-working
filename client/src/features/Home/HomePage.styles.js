import styled from 'styled-components';

export const StyledSection = styled.section`
  margin: calc(var(--mobile-nav-height) + 2rem) var(--gutter-width);
  & > * {
    margin-bottom: 1rem;
  }
`;

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
`;
