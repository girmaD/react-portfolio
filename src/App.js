import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Route exact path="/" ><About/></Route>         
        <Route exact path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
