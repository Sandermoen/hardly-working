import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './global.styles';

import MobileNav from './features/MobileNav/MobileNav';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <MobileNav />
      <Switch>
        <Route exact path="/">
          <h1>Almost before we knew it, we had left the ground.</h1>
        </Route>
        <Route path="/test">
          <h1>Test route</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
