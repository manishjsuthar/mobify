import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact1 from './components/Contact1';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminPanel1 from './components/AdminPanel1';
import Sellus from './components/Sellus1';
import Phoneadminpanel from './components/Phoneadminpanel1';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route path="/" exact>{Hero}</Route>
    <Route path="/contact">{Contact1}</Route>
    <Route path="/adminpanel">{AdminPanel1}</Route>
    <Route path="/sellus">{Sellus}</Route>
    <Route path="/phoneadminpanel">{Phoneadminpanel}</Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
