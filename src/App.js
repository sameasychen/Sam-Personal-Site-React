import React from 'react';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
// import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Portfolio from './Components/Portfolio'

import { Route } from 'react-router-dom'

function App() {
  return (
  
      <div className="App">

          <Route path="/portfolio" render={() => (
            <div>
              <Header />
              <Portfolio />
              <Footer />
            </div>
          )}  />

          <Route path="/contact" render={() => (
            <div>
              <Header />
              <Contact />
              <Footer />
            </div>
          )} />
          
          <Route exact path="/" render={() => (
            <div>
              <Header />
              <Home />
              <Footer />
            </div>
          )} />

      </div>

  );
}

export default App;