import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Play from './components/Play';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar />

      <Switch>
        <Route exact path ='/' component={Home} />
        <Route path ='/play' component={Play} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
