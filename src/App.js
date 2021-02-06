import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

function App() {
  
  return (    
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path={["/", "/about", "/react-portfolio"]} ><About/></Route>         
        <Route exact path="/react-portfolio/contact"><Contact/></Route>
        <Route path="/react-portfolio/portfolio" ><Portfolio/></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
