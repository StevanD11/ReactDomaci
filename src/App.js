import logo from './logo.svg';
import './App.css';
import Navbar from './Nav';
import Pocetna from './Pocetna';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content" >
        <Pocetna />
      </div>
    </div>
  );
}

export default App;