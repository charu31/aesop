import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path="/"/>
    </Switch>
    <Home />
    </Router>
  );
}

export default App;
