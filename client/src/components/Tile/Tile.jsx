import { TileContainer, TileTitle, StyledDiv, Initial } from './Tile.styles';

const Tile = ({ color, title }) => (
  <TileContainer>
    <StyledDiv color={color}>
      <Initial>{title[0].toUpperCase()}</Initial>
    </StyledDiv>
    <TileTitle>{title}</TileTitle>
  </TileContainer>
);

export default Tile;
