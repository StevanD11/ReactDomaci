import Navbar from './components/Nav';
import Pocetna from './Pocetna';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kontakt from './Kontakt';

function App() {
  return (
    <div className="App">
      <div className="content" >
        <Router>
          <Switch>
            <Route exact path="/">
              <Pocetna />
            </Route>
            <Route path="/kontakt">
              <Kontakt />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;