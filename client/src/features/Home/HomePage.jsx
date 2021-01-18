import { Fragment } from 'react';

import MobileHeader from '../../components/MobileHeader/MobileHeader';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Tile from '../../components/Tile/Tile';

import { StyledSection, StyledH2 } from './HomePage.styles';

const HomePage = () => (
  <Fragment>
    <MobileHeader title="Home" />
    <StyledSection>
      <Tile title="Surf shop" color="orange" />
      <Tile title="Dave automobile" color="#6F32D2" />
      <StyledH2>Join a workplace by pasting their unique code below</StyledH2>
      <Input />
      <Button occupy>Create A Workplace</Button>
    </StyledSection>
  </Fragment>
);

export default HomePage;
