import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Resume from './Resume'
import Contact from './Contact'
import { Route } from 'react-router-dom'

function App() {
  return (
  
      <div className="App">


          <Route path="/resume" render={() => (
            <div>
              <Header />
              <Resume />
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