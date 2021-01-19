import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

export const StyledSection = styled.section`
  background-color: var(--color-primary-dark);
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem 2.5rem;
`;

export const StyledLogo = styled(Logo)`
  width: 30rem;
`;

export const ContentContainer = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  flex: 1;
  border-top-left-radius: 50px;
  padding: 4rem var(--gutter-width);
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3rem;
`;
