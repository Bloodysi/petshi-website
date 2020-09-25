import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import KnowUs from './pages/know-us/KnowUs';
import Donate from './pages/donate/Donate';
import Join from './pages/join/Join';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/know-us' component={KnowUs} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/join-us' component={Join} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
