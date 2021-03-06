import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StyledMain } from './App.styles';
import GlobalStyle from './global.styles';

import MobileNav from './features/MobileNav/MobileNav';
import HomePage from './features/Home/HomePage';
import LoginPage from './features/Login/LoginPage';

const App = () => {
  return (
    <StyledMain>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/test">
            <h1>Test route</h1>
          </Route>
          <Route path="/login" component={LoginPage} />
        </Switch>
        <MobileNav />
      </Router>
    </StyledMain>
  );
};

export default App;
