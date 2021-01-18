import styled from 'styled-components';

export const TileContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: none;
  border: none;
  width: 7rem;
  height: 100%;

  font-family: inherit;
`;

export const TileTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;

  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  color: var(--color-grey);
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 7rem;

  margin-bottom: 0.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Initial = styled.h2`
  color: var(--color-white);
  font-size: 3rem;
  font-weight: 500;
`;
