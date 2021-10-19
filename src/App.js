import logo from './logo.svg';
import Navbar from './Nav';
import Pocetna from './Pocetna';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kontakt from './Kontakt';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content" >
          <Switch>
            <Route exact path="/">
              <Pocetna />
            </Route>
            <Route path="/kontakt">
              <Kontakt />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;