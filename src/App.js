
import './App.css';
import Nav from './COMPONENTS/NAV/Nav';





//IMPORT THIS FOR REACT ROUTER DOM
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./COMPONENTS/HOME/Home";
import About from "./COMPONENTS/ABOUT/About";
import Shop from "./COMPONENTS/SHOP/Shop";
import Gallery from './COMPONENTS/GALLERY/Gallery';




function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/gallery" exact component={Gallery}/>
        <Route path="/about" exact component={About}/>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
